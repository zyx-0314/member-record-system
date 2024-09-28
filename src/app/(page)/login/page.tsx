import Image from "next/image";

export default function LoginPage() {
  return (
    <main>
      <header className="bg-slate-700 flex gap-2 border-solid border-b-2 border-green-300 justify-between items-center px-16 py-4 h-[10dvh]">
        <a href="">
          <Image src={"/aits.png"} width={50} height={50} alt="AITS Logo"></Image>
        </a>
        <div className="right flex gap-2">
          <nav className="flex gap-2 ">
            <a href="/" className="border-solid border-b-[5px] border-green-500 px-5 py-2 text-white">Home</a>
            <a href="" className="border-solid border-green-500 px-5 py-2 text-white">News!</a>
            <a href="" className="border-solid border-green-500 px-5 py-2 text-white">About AITS!</a>
          </nav>
          <a href="/login" className="rounded-full bg-green-200 px-5 py-2">Login</a>
        </div>
      </header>
    </main >
  );
}
