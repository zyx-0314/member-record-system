"use client"

import Section from '@/components/elements/container';
import Layout from '@/components/elements/layout';

interface ReducerProps {
  type: string
  payload: string
}

export default function AboutPage() {


  return (
    <main className="bg-slate-700">
      <Layout
        activeNav={"About"}
      >

        <Section>

        </Section>

      </Layout>
    </main >
  );
}
