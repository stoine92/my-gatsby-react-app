import React from "react";
import { Link } from "gatsby";
import * as headerStyles from '../components/header.module.scss'

const Header = () => {
    return(
        <header className={headerStyles.header}>
        <h1><Link className={headerStyles.title} to='/'>Stoyanssss Nikolov</Link></h1>
        <nav>
            <ul className={headerStyles.navList}>
            <li><Link className={headerStyles.navItem} to="/">Home</Link></li>
            <li><Link className={headerStyles.navItem} to="/blog">Blog</Link></li>
            <li><Link className={headerStyles.navItem}to="/aboutPage">About</Link></li>
            <li><Link to="/contactPage">Contact Us</Link></li>
            </ul>
        </nav>
        
    </header>


    )
}

export default Header 