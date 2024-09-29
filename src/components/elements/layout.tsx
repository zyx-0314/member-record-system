import { ReactNode } from 'react';

import Section from '@/components/elements/container';
import Footer from '@/components/elements/footer';
import HeaderNav from '@/components/elements/header';

interface LayoutProps {
  children?: ReactNode
  variant?: "subFolder" | undefined
  crumbsList?: { href: string, title: string }[] | undefined
  activeNav: string
}

export default function Layout({ children, variant, activeNav, crumbsList }: LayoutProps) {
  return (
    <>
      <HeaderNav
        activeNav={activeNav}
      />
      <Section variant={variant} crumbsList={crumbsList}>
        {children}
      </Section>
      <Footer></Footer>
    </>
  )
}