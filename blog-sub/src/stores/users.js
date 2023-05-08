import Reflux         from 'reflux';
import Actions        from 'actions';
import Request        from 'superagent';
import Config         from 'appConfig';
import SessionContext from 'stores/sessionContext';

export default class UsersStore extends Reflux.Store {
    constructor () {
        super();
        this.listenToMany(Actions);
        this.state = {
            users: [],
            endpoint: Config.apiRoot + '/users',
        }
        Request
            .get(this.state.endpoint)
            .end(function (err, res) {
                if (res.ok) {
                    this.setState({users: res.body});
                    this.trigger(this.state.users);
                }
            }.bind(this));

    }
	modifyUser(method, details, action) {
		Request
			[method](this.endpoint)
			.send(details)
			.end(function (err, res) {
				if (res.ok) {
					Actions.login(res.body.username, res.password)
						.then(function () {
							action.completed(res.body);
						});
				} else {
					action.failed(err);
				}
			}.bind(this));
	}
	onCreateUser(details) {
		this.modifyUser('post', details, Actions.createUser);
	}
	onEditUser(details) {
		this.modifyUser('put', details, Actions.editUser);
	}
}
