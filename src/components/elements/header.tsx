import Image from 'next/image';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface HeaderNavProps {
  activeNav: string
}

export default function HeaderNav({ activeNav }: HeaderNavProps) {
  if (activeNav === "Login") {
    return LoginHeader();
  }
  else {
    return DefaultHeader(activeNav);
  }
};

function LoginHeader() {
  return (
    <>
      <header className="bg-slate-700 flex gap-2 border-solid border-b-2 border-green-300 justify-between items-center px-16 py-4 h-[10dvh]">
        <a href="/">
          <Image src={"/aits.png"} width={50} height={50} alt="AITS Logo"></Image>
        </a>
        <div className="right flex gap-2">
          <a href="/">
            <Button variant={"secondary"} className="rounded-full">Exit</Button>
          </a>
        </div>
      </header>
    </>
  );
}

function DefaultHeader(activeNav: string) {
  return (
    <>
      <header className="bg-slate-700 flex gap-2 border-solid border-b-2 border-green-300 justify-between items-center px-16 py-4 h-[10dvh]">
        <Link href="/">
          <Image src={"/aits.png"} width={50} height={50} alt="AITS Logo"></Image>
        </Link>
        <div className="right flex gap-2">
          <nav className="flex gap-2 ">
            <Link href="/" className={`border-solid border-green-500 px-5 py-2 text-white ${activeNav === "Home" ? "border-b-[5px]" : ""}`}>
              Home
            </Link>

            <Link href="/news" className={`border-solid border-green-500 px-5 py-2 text-white ${activeNav === "News" ? "border-b-[5px]" : ""}`}>
              News
            </Link>

            <Link href="/about" className={`border-solid border-green-500 px-5 py-2 text-white ${activeNav === "About" ? "border-b-[5px]" : ""}`}>
              About AITS
            </Link>

          </nav>
          <Link href="/login">
            <Button variant={"secondary"} className="rounded-full">Login</Button>
          </Link>
        </div>
      </header>
    </>
  );
}