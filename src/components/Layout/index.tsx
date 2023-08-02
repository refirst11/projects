import type { ReactNode } from 'react'
import Footer from 'components/Footer'
import SideLink from 'components/SideLink'
import { LazyWrap } from './LazyWrap'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LazyWrap>
      <SideLink />
      {children}
      <Footer />
    </LazyWrap>
  )
}

export default Layout
