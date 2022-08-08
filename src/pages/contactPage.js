import React from "react";
import Layout from "../components/layout";

import Head from '../components/head';

const ContactPage = () => {
    return(
        
            <Layout>
                <Head title="Contact" />
                    <h1> Contact page</h1>
                    <h3>Stoyan Nikolov</h3>
                    <p>tel: +44 7843 138809</p>
                    <p><strong>GitHub</strong> link: <a href="https://github.com/stoine92">click here</a></p>
                    <p><strong>Linkedin</strong> link: <a href="https://www.linkedin.com/in/stoyan-nikolov-660a0491/">click here</a></p>
                    
            </Layout>
    )
}

export default ContactPage