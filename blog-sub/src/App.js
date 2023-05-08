import React from 'react';
import { Route, Routes } from 'react-router';
import CSS from './css/app.css';
import AppHeader from './views/appHeader';
import Login from './views/login';
import PostList from './views/posts/list';
import PostView from './views/posts/view';
import PostEdit from './views/posts/edit';
import UserList from './views/users/list';
import UserView from './views/users/view';
import UserEdit from './views/users/edit';

export default function App() {
    return (
        <div className="app-container">
            <AppHeader />
            <main>
                <Routes>
                    <Route path="/" element={<PostList />} />
                    {/* <Route
                    path="posts/:pageNum/?"
                    component={PostList}
                    ignoreScrollBehavior
                />
                <Route
                    path="/posts/create"
                    component={PostEdit}
                />
                <Route
                    path="/posts/:postId/edit"
                    component={PostEdit}
                />
                <Route
                    path="posts/:postId"
                    component={PostView}
                />
                <Route
                    path="/users"
                    component={UserList}
                />
                <Route
                    path="/users/create"
                    component={UserEdit}
                />
                <Route
                    path="/users/:userId"
                    component={UserView}
                />
                <Route
                    path="/users/:userId/edit"
                    component={UserEdit}
                />
                <Route
                    path="/login"
                    component={Login}
                />
                <Route path="*" component={PostList} /> */}
                </Routes>
            </main>
        </div>
    )
}
