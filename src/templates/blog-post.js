import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Bio from "../components/bio";

const BlogPostTemplate = ({ data: { markdownRemark: post }}) => {
  return (
    <Layout>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date} | {post.frontmatter.date}</p>
          <p>{post.frontmatter.keywords}</p>
          <p>{post.frontmatter.summary}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      </article>
      <Bio />
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
