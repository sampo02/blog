import * as React from 'react'
import { graphql } from 'gatsby'
import { Query } from '../generated/graphql'
import Date from '../components/date'
import Head from '../components/head'
import Layout from '../components/layout'

require('prismjs/themes/prism-tomorrow.css')

interface Props {
  data: Query
}

export default function Template({ data }: Props) {
  const { markdownRemark } = data
  const frontmatter = markdownRemark?.frontmatter
  const html = markdownRemark?.html
  return (
    <>
      <Head title={frontmatter?.title || ''} description={frontmatter?.description || ''} />
      <Layout>
        <div>
          <div>
            <h1>{frontmatter?.title}</h1>
            <p>
              <span>Created: </span>
              <Date slug={frontmatter!.slug!} />
            </p>
            <div dangerouslySetInnerHTML={{ __html: html || '' }} />
          </div>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        description
        slug
        title
      }
    }
  }
`
