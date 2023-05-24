import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'


function User(props) {
    const {userId, small} = props;
    const user = useSelector((state) => state.users.users).find((_user) => _user.id === parseInt(userId));

    return user ? (
        <div className={`user ${small ? 'small' : ''}`}>
            <img className={ `profile-img ${small ? 'small' : ''}`} src={user.profileImageData} />
            <div className="user-meta">
                <strong>{user.blogName}</strong>
                <small>
                    {user.firstName}&nbsp;{user.lastName}
                </small>
            </div>
        </div>
    ) : <div className="user" />;
}

export default User;