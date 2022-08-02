import React from "react";
import { Link } from 'gatsby'
import Layout from "../components/layout";
import Head from '../components/head';


const AboutPage = () => {
    return(
        <Layout>
            <Head title="About" />
            <h1> About page title</h1>
            <p>Here I will have some bio </p>
            <p><Link to="/contactPage">Contact page</Link></p>
            
        </Layout>
            
       
    )
}

export default AboutPage