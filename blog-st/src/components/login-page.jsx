import React, { useState } from 'react';
import BasicInput from './basic-input';
import { useDispatch } from 'react-redux';
import { loginAsync } from '../store/user-reducer';

function LoginPage(props) {
    const dispatch = useDispatch();
    const [loginError, setLoginError] = useState(null)

    const onSubmit = (e) => {
        const detail = {};
        e.preventDefault();
        e.stopPropagation();
        e.target.querySelectorAll('input').forEach(
            function (v) {
                detail[v.getAttribute('name')] = v.value;
            });
        try {
            dispatch(loginAsync(detail['username'], detail['password']))
        } catch (e) {
            setLoginError(e);
        }
    }
    return (
        <form className="login-form" onSubmit={onSubmit}>
            <fieldset>
                <legend>Log In</legend>
                <BasicInput name="username" type="text" placeholder="username" />
                <BasicInput name="password" type="password" placeholder="password" />
                {loginError && <aside className="error">{loginError}</aside>}
                <button type="submit">Log In</button>
            </fieldset>
        </form>
    );
}

export default LoginPage;