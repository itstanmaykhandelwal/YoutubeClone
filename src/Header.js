import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import {Link} from "react-router-dom"



function Header() {
    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon/>
                <Link to="/">
                    <img
                    className="header_logo" 
                    src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png" alt=""   
                />
                </Link>
            </div>

            <div className="header_center">
                <input
                 onChange={(e) => setInputSearch(e.target.value)} 
                 value={inputSearch} 
                 placeholder="Search"
                 type="text"
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header_button"/>
                </Link>
            </div>

            <div className="header_right">
                <VideoCallIcon className="header_icon" />
                <AppsIcon className="header_icon" />
                <NotificationsIcon className="header_icon" />
                <Avatar
                    alt="Tanmay Khandelwal"
                    src="https://avatars.githubusercontent.com/u/65352484?s=400&u=5da01eca4c4946db0e7aad04c6fae86c9fca7aa0&v=4"
                />
            </div>
        </div>
    )
}

export default Header
