import * as React from 'react'

interface Props {
  slug: string
}

export default function Date({ slug }: Props) {
  const [, , year, month, day] = slug.split('/')
  const date = `${year}-${month}-${day}`
  return <span>{date}</span>
}
