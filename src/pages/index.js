import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
          <h1>Hello</h1>
          <h2> I am Stoyan, a front-end developer. Living in rainy Manchester</h2>
          <p> Need a developer ? <Link to="/contactPage">Contact me.</Link></p>
    </Layout>
  )
}


export default IndexPage