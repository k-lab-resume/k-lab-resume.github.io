import * as React from "react";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPostTemplate = ({ data: { markdownRemark: post }}) => {
  return (
    <Layout>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 id="top" itemProp="headline">{post.frontmatter.title}</h1>
          <p>Created: {post.frontmatter.date} | Modified: {post.frontmatter.date}</p>
          <p>Keywords: {post.frontmatter.keywords}</p>
        </header>
        <div className="summary">
            <p>{post.frontmatter.summary}</p>
          </div>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      </article>
      <p className="move"><Link to="#top">▲ Move to Top</Link></p>
      <StaticImage
      src="./bio.png"
      alt="bio"
      placeholder="blurred"
      width={1050}
      height={450}
      />
    </Layout>
  )
};

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
    />
  )
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        update(formatString: "MMMM DD, YYYY")
        keywords
        summary
      }
    }
  }
`
