import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import * as headerStyles from '../components/header.module.scss'

const Header = () => {
        const data = useStaticQuery(graphql`
            query {
                site{
                    siteMetadata{
                        title
                    }
                }
            }
        `)
    return(
        <header className={headerStyles.header}>
        <h1><Link className={headerStyles.title} activeClassName={headerStyles.activeNavItem} to='/'>
            {data.site.siteMetadata.title}
            </Link>
            </h1>
        <nav>
            <ul className={headerStyles.navList}>
            <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
            <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li>
            <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/aboutPage">About</Link></li>
            <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contactPage">Contact</Link></li>
            </ul>
        </nav>
        
    </header>


    )
}

export default Header 