import * as React from 'react'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'

interface Props {
  title: string
  description: string
}

export default function Head({ title, description }: Props) {
  return (
    <Helmet>
      <html lang="ja" />
      <link rel="icon" href={favicon} />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}
