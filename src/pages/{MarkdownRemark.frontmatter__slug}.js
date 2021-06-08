import React from "react"
import { graphql } from "gatsby"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'

deckDeckGoHighlightElement()

export default function Template({ data }) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
      <div>
          <div>
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
      </div>
    )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`