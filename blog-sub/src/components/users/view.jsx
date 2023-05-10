import React from 'react';
import Reflux from 'reflux';
import Classnames from 'classnames';
import UserStore from 'stores/users';
export default class View extends Reflux.Component {
    constructor(props) {
        super(props);
        this.store = UserStore;
    }
    render() {
        const user = this.state.users.find((_user) => _user.id === parseInt(this.props.userId));

        // you must have a root element!
        return user ? (
            <div className={Classnames({
                'user': true,
                'small': this.props.small
            })}>
                <img className={Classnames({
                    'profile-img': true,
                    'small': this.props.small
                })} src={user.profileImageData} />
                <div className="user-meta">
                    <strong>{user.blogName}</strong>
                    <small>
                        {user.firstName}&nbsp;{user.lastName}
                    </small>
                </div>
            </div>
        ) : <div className="user" />;
    }
}
