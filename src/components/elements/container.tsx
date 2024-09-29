"use client"

import { ReactNode, useState } from 'react';

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link';

interface SectionProps {
  children?: ReactNode
  variant?: "subFolder" | undefined
  crumbsList?: { href: string, title: string }[] | undefined
}

export default function Section({ children, variant, crumbsList }: SectionProps) {
  switch (variant) {
    case "subFolder":
      return SubFolderSection({ children, crumbsList });
    default:
      return DefaultSection(children);
  }
};

function DefaultSection(children: ReactNode) {
  return (
    <section className="bg-slate-700 hero h-[85dvh] flex py-6 mx-32">
      {children}
    </section>
  );
};

interface SubFolderSectionProps {
  children?: ReactNode
  crumbsList?: { href: string, title: string }[] | undefined
}

function SubFolderSection({ children, crumbsList }: SubFolderSectionProps) {
  return (
    <>
      <section className="bg-slate-700 hero h-[85dvh] flex flex-col py-6 mx-32">
        {BreadCrumbsHandler(crumbsList)}
        <div className="flex h-[80dvh]">
          {children}
        </div>
      </section>
    </>
  );
};

function BreadCrumbsHandler(crumbsList?: { href: string, title: string }[] | undefined) {
  const ITEMS_TO_DISPLAY = 3
  const [open, setOpen] = useState(false)

  return (
    <>
      {crumbsList &&
        <Breadcrumb className='h-[4dvh]'>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={crumbsList[0].href}>{crumbsList[0].title}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {crumbsList.length > ITEMS_TO_DISPLAY ? (
              <>
                <BreadcrumbItem>
                  <DropdownMenu open={open} onOpenChange={setOpen}>
                    <DropdownMenuTrigger
                      className="flex items-center gap-1"
                      aria-label="Toggle menu"
                    >
                      <BreadcrumbEllipsis className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {crumbsList.slice(1, -2).map((item, index) => (
                        <DropdownMenuItem key={index}>
                          <Link href={item.href ? item.href : "#"}>
                            {item.title}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            ) : null}
            {crumbsList.slice(1 - ITEMS_TO_DISPLAY + 1).map((item, index) => (
              <BreadcrumbItem key={index}>
                <BreadcrumbPage className="max-w-20 truncate md:max-w-none">
                  {item.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      }
    </>
  )
}