import React from "react";
import { Link } from 'gatsby'
import Layout from "../components/layout";

const AboutPage = () => {
    return(
        <Layout>
            
            <h1> About page title</h1>
            <p>Here I will have some bio </p>
            <p><Link to="/contactPage">Contact page</Link></p>
            
        </Layout>
            
       
    )
}

export default AboutPage