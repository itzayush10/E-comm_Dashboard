import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <div>
            <img alt="logo" className="logo" src='data:image/png;base64,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'/>
            {auth ? <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">Update Products</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
            </ul>
                :
                <ul className="nav-ul nav-right">
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            }
        </div>
    )
}

export default Nav;