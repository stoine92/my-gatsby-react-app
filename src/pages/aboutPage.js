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
            <p className={aboutStyle.paragraph}>Graduate and certified by SoftUni.org, a bootcamp coding academy created by the founders of Telerik.</p>
            <p className={aboutStyle.paragraph}>This bootcamp course has given me the oportunity to develop my knowledge for JavaScript - starting from basics all the way to ReactJs. </p>
            <p className={aboutStyle.paragraph}>Thorough my journey with SoftUni I have worked with Vanilla JavaScript, DOM manipulations, HTML, CSS, Gatsby, Sammy, Handlebars, full React course, firebase and much more.</p>
            <p><Link className={aboutStyle.pLink} to="/contactPage">Contact page</Link></p>
            
        </Layout>
            
       
    )
}

export default AboutPage