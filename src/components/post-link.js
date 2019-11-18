import React from "react"
import { Link } from "gatsby";

import ReadingTime from "./reading-time";

const PostLink = ({ post }) => (
  <div>
      <h2 className='major'>
        <Link to={post.frontmatter.path}>
            {post.frontmatter.title}
        </Link>
      </h2>
    <p>
        {post.frontmatter.date} 
        <ReadingTime readingTime={post.frontmatter.readingTime} />
    </p>
    <p>{post.excerpt}</p>
  </div>
)

export default PostLink