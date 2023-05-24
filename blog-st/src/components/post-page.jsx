import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import PostView from '../views/posts/view';

function PostPage() {
    const post = useSelector((state) => state.posts.posts).find((post) => post.id === 6);
    return (
        <div className="post-page">
            <PostView post={post} />
        </div>
    )
}

export default PostPage;