import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import PostListView from '../views/posts/list-view';

function HomePage() {
    return (
        <div className="post-page">
            <PostListView />
        </div>
    )
}

export default HomePage;