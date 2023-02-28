import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const DocumentPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <h1>Documents</h1>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <p>Created: {post.frontmatter.date} | Modified: {post.frontmatter.update}</p>
                  <p>Keywords: {post.frontmatter.keywords}</p>
                </header>
                <section>
                  <small
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt,
                    }}
                    itemProp="excerpt"
                  />
                </section>
              </article>
              <hr />
            </li>
          )
        })}
      </ol>
    </Layout>
  )
};

export default DocumentPage;
export const Head = () => <Seo title="Documents" />;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt(pruneLength: 200)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          update(formatString: "MMMM DD, YYYY")
          title
          keywords
        }
      }
    }
  }
`
