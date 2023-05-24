import logo from './logo.svg';
import { Routes, Route, useSearchParams, Navigate } from 'react-router-dom';
import HomePage from './components/home-page';
import './css/app.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUsersAsync } from './store/user-reducer';
import { loadPostsAsync } from './store/posts-reducer';
import Header from './components/header';
import LoginPage from './components/login-page';
import PostPage from './components/post-page';
import RegisterPage from './components/register-page';


function App() {
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(loadUsersAsync());
        dispatch(loadPostsAsync());
    }, []);

    return (
        <div className="app-container">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/users/create" element={<RegisterPage />} />
                <Route path="/posts/:id" element={<PostPage />} />
            </Routes>
        </div>
    );
}

export default App;
