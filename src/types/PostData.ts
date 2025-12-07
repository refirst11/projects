import { ReactElement, JSXElementConstructor } from 'react'

export type ReturnData = {
  meta: {
    title?: string
    subtitle?: string
    date?: string
  }
  content: ReactElement<unknown, string | JSXElementConstructor<any>>
}

export type PostData = {
  title: string
  subtitle: string
  date: string
  content: ReactElement<unknown, string | JSXElementConstructor<any>>
}
