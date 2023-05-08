import Reflux  from 'reflux';
import Actions from 'actions';
import Request from 'superagent';
import Config  from 'appConfig';
import Cookie  from 'vendor/cookie';

export default class SessionStore extends Reflux.Store{
    constructor () {
        super();
        this.listenToMany(Actions);
        const context = JSON.parse(Cookie.getItem('session')) || {loggedIn: false};
        this.state = {
            context,
            endpoint: Config.apiRoot + '/users',
        }
    }
	getResponseResolver(action){
		return function (err, res) {
			if (res.ok && res.body instanceof Array && res.body.length > 0) {
                const context = res.body[0];
				context.loggedIn = true;
				context.profileImageData = null;
                this.setState({context})
				action.completed();

				//console.log("SETTING COOKIE", JSON.stringify(this.context), Cookie.setItem);
				Cookie.setItem('session', JSON.stringify(this.context));
			} else {
				action.failed();
			}
		}.bind(this);
	}
	getSessionInfo() {
		return JSON.parse(Cookie.getItem('session'));
	}
	onLogin(name, pass) {
		Request
			.get(this.state.endpoint)
			.query({
				'username': name,
				'password': pass
			})
			.end(this.getResponseResolver(Actions.login));
	}
	onLogOut() {
		Cookie.removeItem('session');
		const context = { loggedIn: false };
        this.setState({context});
		return true;
	}
}

