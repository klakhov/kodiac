import React from 'react';
import UserView from 'components/users/view';
import PostList from 'components/posts/list';
export default class View extends React.Component {
    render() {
        return (
            <div className="user-view">
                <UserView userId={this.props.params.userId} />
                <hr />
                <PostList user={this.props.params.userId} />
            </div>
        );
    }
}
