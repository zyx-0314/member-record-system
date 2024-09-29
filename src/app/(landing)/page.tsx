import HeaderNav from "@/components/elements/header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-700">
      <HeaderNav
        activeNav={"Home"}
      />

      <section className="bg-slate-700 hero h-[85dvh] flex py-6 mx-32">
        <aside className="left w-2/12 flex flex-col gap-4 mx-4 my-16">
          <div className="text-white border-b-white border-b cursor-pointer">AITS Assist: Midterm</div>
          <div className="text-white border-b-white border-b cursor-pointer">General Assembly</div>
        </aside>
        <div className="border"></div>
        <div className="right w-10/12 relative">
          <Image className="absolute bg-cover p-10" src="/events/cyber-security-digital-data-protection-shield-on-blue-background-database-security-software-development-made-with-generative-ai-photo.jpg" fill alt="Security" />
        </div>
      </section>

      <footer className="bg-slate-700 footer h-[5dvh] border-solid border-t-2 border-green-300 flex justify-center text-white items-center">
        Record System
      </footer>
    </main >
  );
}
