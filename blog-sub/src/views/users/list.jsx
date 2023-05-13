
import React from 'react';
import Reflux from 'reflux';
import { Link } from 'react-router-dom';
import UserStore from 'stores/users';
import UserView from 'components/users/view';

export default class List extends Reflux.Component {
    constructor(props){
        super(props);
        this.state = {};
        this.store = UserStore;
    }
    render() {
        return (
            <ul className="user-list">
                {this.state.users ?
                    this.state.users.map(function (v) {
                        return (
                            <li key={v.id}>
                                <Link to={`/users/${v.id}`}>
                                    <UserView userId={v.id} small={true} />
                                </Link>
                            </li>
                        );
                    }) : []
                }
            </ul>
        );
    }
}

