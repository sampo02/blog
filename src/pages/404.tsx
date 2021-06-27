import * as React from 'react'
import { Link } from 'gatsby'
import Head from '../components/Head'
import Layout from '../components/Layout'

const NotFoundPage = () => {
  return (
    <>
      <Head title="sampo02's blog" description="Page not found" />
      <Layout>
        <main>
          <title>Not found</title>
          <h1>Page not found</h1>
          <Link to="/">Go home</Link>
        </main>
      </Layout>
    </>
  )
}

export default NotFoundPage
