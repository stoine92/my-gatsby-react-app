import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout";
import Head from '../components/head';

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
          <h1>Hello</h1>
          <h2> I am Stoyan, a front-end developer. Living in lovely Manchester.</h2>
          <p> This page is made from scratch powered by ReactJS, GatsbyJS, contentful and Netlify <a href="https://github.com/stoine92/my-gatsby-react-app" target="_blank">More info</a></p>
          <p> Need a developer ? <Link to="/contactPage">Contact me.</Link></p>
    </Layout>
  )
}


export default IndexPage