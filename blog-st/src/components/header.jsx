import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
// import './styles.scss';

function Header() {
    const loggedIn = useSelector((state) => state.users.loggedIn);
    const loggedUser = useSelector((state) => state.users.loggedUser);

    return (
        <header className="app-header">
        <Link to="/"><h1>Re&#923;ction</h1></Link>
        <section className="account-ctrl">
            <input
                type="search"
                placeholder="search" />
            {
                loggedIn ?
                    (<Link to="/posts/create">
                        Hello {loggedUser.username}, write something!
                    </Link>) :
                    <Link to="/users/create">Join</Link>
            }
            {
                loggedIn ?
                    <a>Log Out</a> :
                    <Link to="/login">Log In</Link>
            }
        </section>
    </header>
    )
}

export default Header;