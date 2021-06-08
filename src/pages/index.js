import * as React from "react"
import {graphql, Link} from "gatsby"

const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

export default function Index({ data }) {
  return (
    <main style={pageStyles}>
      <title>sampo02's blog</title>
        <h1>sampo02's blog</h1>
        {data.allMarkdownRemark.nodes.map(node => (
          <div key={node.frontmatter.slug}>
            <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
          </div>
        ))}
    </main>
  )
}

export const query = graphql`
{
  allMarkdownRemark {
    nodes {
      frontmatter {
        slug
        title
      }
    }
  }
}
`
