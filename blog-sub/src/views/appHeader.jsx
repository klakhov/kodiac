import React from 'react';
import Reflux from 'reflux';
import { Link } from 'react-router-dom';
import Actions from 'actions';
import SessionStore from 'stores/sessionContext';

export default class AppHeader extends Reflux.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.store = SessionStore;
    }
    logOut () {
        Actions.logOut();
        this.history.pushState('', '/');
    }
    search() {
        var searchVal = this.refs.search.value;
        Actions.search(searchVal);
    }
    render() {
        return (
            <header className="app-header">
                <Link to="/"><h1>Re&#923;ction</h1></Link>
                <section className="account-ctrl">
                    <input
                        ref="search"
                        type="search"
                        placeholder="search"
                        defaultValue={this.state.initialQuery}
                        onChange={this.search} />
                    {
                        this.state.context.loggedIn ?
                            (<Link to="/posts/create">
                                Hello {this.state.session.username}, write something!
                            </Link>) :
                            <Link to="/users/create">Join</Link>
                    }
                    {
                        this.state.context.loggedIn ?
                            <a onClick={this.logOut}>Log Out</a> :
                            <Link to="/login">Log In</Link>
                    }
                </section>
            </header>
        );
    }
  }

