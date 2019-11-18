import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/Layout';
import PostLink from "../components/post-link"

import pic28 from '../assets/images/pic28.jpg';
import config from '../../config';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const posts = edges
    .filter(edge => !!edge.node.frontmatter.date);

  return (
    <Layout>
        <section id="banner">
        <div className="inner">
          <div className="logo">
            {/* <span className="icon fa-diamond"></span> */}
            <img src={pic28} alt=""/>
          </div>
          <h2>Suborna's Blog</h2>
          <p>This blog is all about my journey towards the <strong>100daysofcoding</strong> challenge</p>
          <ul className="contact">
          {config.socialLinks.map(social => {
            const { icon, url, name } = social;
            return (
              <li key={url}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {!!icon ? (
                    <i className={`fa ${icon}`}></i>
                  ) : (
                    <span className="button primary small">{ name }</span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
        
        <div className="hire-me-btn">
          <a 
            href={config.socialLinks[3].url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hire-me-btn button primary small">
            Hire Me
          </a>
        </div>
        </div>
        
      </section>
      
      <section id="wrapper">
        <section className="blog-section">
            {posts.map((edge, i) => (
                <section key={edge.node.id} className={`wrapper project ${(i%2) === 0 ? "alt" : ""} style${i+1}`}>
                    <div className="inner">
                        <PostLink key={edge.node.id} post={edge.node} />
                    </div>
                </section>
            ))}
        </section>
      </section>
    </Layout>
  );
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 500)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            readingTime
          }
        }
      }
    }
  }
`