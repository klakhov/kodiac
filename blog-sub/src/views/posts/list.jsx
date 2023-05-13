import React from 'react';
import Reflux from 'reflux';
import PostStore   from 'stores/posts';
import UserList from 'views/users/list';
import PostList from '../../components/posts/list';
import Actions      from 'actions';

export default class List extends Reflux.Component {
    constructor(props) {
        super(props);
        this.stores = [PostStore]
    }
    componentDidMount() {
        Actions.getPostsByPage(
			1,
			{}
        )
    }
    render() {
        return (
            <div className="post-list-view">
                <PostList posts={this.state.posts}/>
                <div className="users-list">
                    <UserList />
                </div>
            </div>
        );
    }
}