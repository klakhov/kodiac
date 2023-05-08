import React   from 'react';
import BasicInput   from 'components/basicInput';
import Actions      from 'actions';
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
	logIn(e) {
		var detail = {};

		Array.prototype.forEach.call(
			e.target.querySelectorAll('input'),
			function (v) {
				detail[v.getAttribute('name')] = v.value;
			});
		e.preventDefault(); 
		e.stopPropagation(); 

		Actions.login(detail.username, detail.password)
			.then(function () {
				//console.log("SUCCESS", arguments);
				this.history.pushState('', '/');
			}.bind(this))
			['catch'](function () {
				//console.log("ERROR", arguments);
				this.setState({'loginError': 'bad username or password'});
			}.bind(this))
			;
	}
	render() {
		return (
			<form className="login-form" onSubmit={this.logIn}>
				<fieldset>
					<legend>Log In</legend>
					<BasicInput name="username" type="text" placeholder="username" />
					<BasicInput name="password" type="password" placeholder="password" />
					{ this.state.loginError && <aside className="error">{this.state.loginError}</aside> }
					<button type="submit">Log In</button>
				</fieldset>
			</form>
		);
	}
  }
// export default React.createClass({
// 	mixins: [
// 		// History
// 	],
	
// });

