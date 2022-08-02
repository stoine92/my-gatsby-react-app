import React from "react";
import { Link } from 'gatsby'
import Layout from "../components/layout";
import Head from '../components/head';
import * as aboutStyle from './aboutPage.module.scss';


const AboutPage = () => {
    return(
        <Layout>
            <Head title="About" />
            <h1> About page</h1>
            <p className={aboutStyle.paragraph}>Graduated and certified by SoftUni.org, a bootcamp coding academy found by the creators of Telerik. My bootcamp course provided me the skills to learn JavaScript from basics all the way to ReactJs. Thorough our journey I have worked with Vanilla JavaScript, DOM manipulations, HTML, CSS, Gatsby, Sammy, Handlebars, full React course, firebase and much more.</p>
            <p><Link className={aboutStyle.pLink} to="/contactPage">Contact page</Link></p>
            
        </Layout>
            
       
    )
}

export default AboutPage