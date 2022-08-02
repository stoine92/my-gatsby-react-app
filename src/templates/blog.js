import React from "react";
import { graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout' 

import Head from '../components/head';


export const query = graphql`
  query($slug: String!) {
    contentfulTheGatsbyBlog(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            gatsbyImageData(width: 1600)
            __typename
          }
        }
      }
    }
  }
`

const Blog= ({data}) => {

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <b>{text}</b>
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => {
        return <h1>{children}</h1>
      },
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { gatsbyImageData, title} = node.data.target
        return <GatsbyImage image={getImage(gatsbyImageData)} alt={title} />
      }
    }
  }

  return (
    <Layout>
      <Head title={data.contentfulTheGatsbyBlog.title}/>
      <h1>{data.contentfulTheGatsbyBlog.title}</h1>
      <p>{data.contentfulTheGatsbyBlog.publishedDate}</p>
      {renderRichText(data.contentfulTheGatsbyBlog.body, options)}
    </Layout>
  )

}

export default Blog