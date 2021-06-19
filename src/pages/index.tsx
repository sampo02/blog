import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { Query } from '../../graphql-types'
import Head from '../components/head'
import Layout from '../components/layout'

interface Props {
  data: Query
}

export default function Index({ data }: Props) {
  return (
    <>
      <Head title="sampo02's blog" description="sampo02's blog" />
      <Layout>
        <main>
          <title>sampo02&apos;s blog</title>
          <h1>sampo02&apos;s blog</h1>
          {data.allMarkdownRemark.nodes.map((node) => (
            <div key={node.frontmatter?.slug}>
              <Link to={node.frontmatter?.slug || '/'}>{node.frontmatter?.title}</Link>
            </div>
          ))}
        </main>
      </Layout>
    </>
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
