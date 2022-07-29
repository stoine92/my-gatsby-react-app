import React from "react";
import { graphql, useStaticQuery } from 'gatsby';

const Footer = () => {
    const data = useStaticQuery(graphql`
        query{
            
                siteMetadata{
                    author
                }
            
        }
    `)
    return (
        <footer>
            <p>Created by {data.site.siteMetadata.author}, &copy; 2022</p>
        </footer>
    )
}

export default Footer 