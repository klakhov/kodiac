import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
// import './styles.scss';

function HomePage() {
    const users = useSelector((state) => state.users.users);
    return (
        <div className="cvat-billing-plans-page">
        </div>
    )
}

export default HomePage;