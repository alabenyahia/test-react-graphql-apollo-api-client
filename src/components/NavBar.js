import React from 'react';
import {Link} from "react-router-dom"
import "./css/NavBar.css"

function NavBar(props) {
    return (
        <nav className="NavBar">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/adduser'>Add User</Link></li>
                <li><Link to='/addpost'>Add Post</Link></li>
                <li><Link to='/allposts'>All Posts</Link></li>
                <li><Link to='/allusers'>All Users</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;