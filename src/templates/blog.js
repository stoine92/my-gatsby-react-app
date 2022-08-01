import React from "react";
import { graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {renderRichText} from "gatsby-source-contentful/rich-text" 

import Layout from '../components/layout' 

export const query = graphql`
  query($slug: String!){
    contentfulTheGatsbyBlog(slug: {eq: $slug}){
      title 
      publishedDate(formatString: "MMMM Do, YYYY")
      body{
        raw
      }
    }
  }
`

const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.contentfulTheGatsbyBlog.title}</h1>
            <h1>{props.data.contentfulTheGatsbyBlog.publishedDate}</h1>
            {documentToReactComponents(
        JSON.parse(props.data.contentfulTheGatsbyBlog.body.raw)
      )}
        </Layout>
    )
}

export default Blog;