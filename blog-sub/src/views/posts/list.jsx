import React from 'react';
import UserList from 'views/users/list';
import PostList from 'components/posts/list';

export default class List extends React.Component {
    render() {
        return (
            <div className="post-list-view">
                <PostList />
                <div className="users-list">
                    <UserList />
                </div>
            </div>
        );
    }
}