import { ReactNode } from 'react';

interface SectionProps {
  children?: ReactNode
  variant?: string
}

export default function Section({ children, variant = "" }: SectionProps) {
  switch (variant) {
    case "none":
      return <></>
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