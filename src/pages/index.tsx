import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { Query } from '../generated/Graphql'
import Date from '../components/Date'
import Head from '../components/Head'
import Layout from '../components/Layout'

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
            <div key={node.frontmatter!.slug}>
              <Link to={node.frontmatter!.slug || '/'}>
                <Date slug={node.frontmatter!.slug!} />
                <span>: </span>
                <span>{node.frontmatter!.title}</span>
              </Link>
            </div>
          ))}
        </main>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___slug], order: DESC }) {
      nodes {
        frontmatter {
          slug
          title
        }
      }
    }
  }
`
