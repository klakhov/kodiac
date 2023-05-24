import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Post from '../../components/post';
import User from '../../components/user';

function PostListView() {
    const posts = useSelector((state) => state.posts.posts);
    const users = useSelector((state) => state.users.users);

    const postListView = posts.map((post, key) => <Post post={post} key={key}/>)
    const userListView = users.map((user, key) => <User userId={user.id} key={key} small={true} />)

    return (
        <div className="post-list-view">
            <div className='post-list' >
            {postListView}

            </div>
            <div className="users-list">
                {userListView}
            </div>
        </div>
    )
}

export default PostListView;