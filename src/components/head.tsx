import * as React from 'react'
import Helmet from 'react-helmet'

interface Props {
  title: string
  description: string
}

export default function Head({ title, description }: Props) {
  return (
    <Helmet>
      <html lang="ja" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}
