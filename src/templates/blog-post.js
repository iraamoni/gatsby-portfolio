import React, { useEffect } from "react"
import { graphql } from "gatsby"

import ReadingTime from "../components/reading-time";
import Layout from "../components/Layout";
import analytics from "../analytics";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  useEffect(() => {
    analytics.page();
  }, []);

  return (
    <Layout fullMenu>
        <section id="wrapper">
            <header>
                <div className="inner">
                <h2>{ frontmatter.title }</h2>
                <p>
                    {frontmatter.date}
                    <ReadingTime readingTime={frontmatter.readingTime} />
                </p>
                </div>
            </header>

            <div className="wrapper">
                <div className="inner">
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
                </div>
            </div>
        </section>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        readingTime
      }
    }
  }
`