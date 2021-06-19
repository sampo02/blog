import * as React from 'react'
import './layout.scss'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return <div>{children}</div>
}
