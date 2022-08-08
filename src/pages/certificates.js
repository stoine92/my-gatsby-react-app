import React from 'react';
import Layout from '../components/layout';
import {Link, graphql, useStaticQuery } from 'gatsby';
import * as blogStyles from './certificates.module.scss'

import Head from '../components/head';


const Blog = () => {
    const data = useStaticQuery(graphql`
    query{
      allContentfulTheGatsbyBlog (
        sort: {
          fields: publishedDate,
          order:DESC
        }
      ){
        edges {
          node{
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
    `)
    
    return (
        <Layout>
            <Head title="Blog"/>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                    {data.allContentfulTheGatsbyBlog.edges.map((edge) => {
                        return (
                            <li className={blogStyles.post}>
                              <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishedDate}</p>
                              </Link>
                                
                            </li>
                        )
                    })}
            </ol>
           
            
       </Layout>
    )
}

export default Blog