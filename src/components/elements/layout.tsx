import { ReactNode } from 'react';

import Section from '@/components/elements/container';
import Footer from '@/components/elements/footer';
import HeaderNav from '@/components/elements/header';

interface LayoutProps {
  children?: ReactNode
  variant?: string
  activeNav: string
}

export default function Layout({ children, variant, activeNav }: LayoutProps) {
  return (
    <>
      <HeaderNav
        activeNav={activeNav}
      />
      <Section>
        {children}
      </Section>
      <Footer></Footer>
    </>
  )
}