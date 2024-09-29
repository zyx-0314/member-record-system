"use client"

import Layout from '@/components/elements/layout';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function AboutPage() {
  const buttonCollection = [
    {
      title: "Achievements",
      description: "Lorem Ipsum Dolor Concivio Sueza.",
      href: "/about/achievement",
      src: ""
    },
    {
      title: "Officers",
      description: "Lorem Ipsum Dolor Concivio Sueza.",
      href: "/about/officers",
      src: ""
    },
    {
      title: "All News",
      description: "Lorem Ipsum Dolor Concivio Sueza.",
      href: "/about/news",
      src: ""
    },
  ]

  return (
    <main className="bg-slate-700">
      <Layout
        activeNav={"About"}
      >
        <div className="flex flex-col w-full">

          <div className="grid grid-cols-2 gap-4 w-full">
            {buttonCollection.map((data) => {
              return (
                <a href={data.href} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-fit min-w-full">
                  <div className="w-4/12 h-60 relative">
                    <Image className="absolute object-cover  rounded-t-lg  md:h-auto md:rounded-none md:rounded-s-lg" src={data.src ? data.src : "/aits.png"} alt="" fill />
                  </div>
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.description}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>


      </Layout>
    </main >
  );
}
