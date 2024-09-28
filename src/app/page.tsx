import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-700">
      <header className="flex gap-2 border-solid border-b-2 border-green-300 justify-between items-center px-16 py-4 h-[10dvh]">
        <a href="">
          <Image src={"/aits.png"} width={50} height={50} alt="AITS Logo"></Image>
        </a>
        <div className="right flex gap-2">
          <nav className="flex gap-2 ">
            <a href="" className="border-solid border-b-[5px] border-green-500 px-5 py-2 text-white">Home</a>
            <a href="" className="border-solid border-green-500 px-5 py-2 text-white">News!</a>
            <a href="" className="border-solid border-green-500 px-5 py-2 text-white">About AITS!</a>
          </nav>
          <a href="" className="rounded-full bg-green-200 px-5 py-2">Login</a>
        </div>
      </header>

      <section className="hero h-[85dvh] flex py-6 mx-32">
        <aside className="left w-/12 flex flex-col gap-4 mx-4 my-16">
          <a href="" className="text-white border-b-white border-b">AITS Assist: Midterm</a>
          <a href="" className="text-white border-b-white border-b">General Assembly</a>
        </aside>
        <div className="border"></div>
        <div className="right w-10/12 relative">
          <Image className="absolute bg-cover p-10" src="/events/cyber-security-digital-data-protection-shield-on-blue-background-database-security-software-development-made-with-generative-ai-photo.jpg" fill alt="Security" />
        </div>
      </section>

      <footer className="footer h-[5dvh] border-solid border-t-2 border-green-300">

      </footer>
    </main >
  );
}
