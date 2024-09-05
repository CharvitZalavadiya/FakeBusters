"use client"
import Image from "next/image";
import backImg from "@/components/assets/back.png"
import { useRouter } from "next/navigation";

const AboutPage = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
  ];

  const router = useRouter();

  const handleBackBtn = () => {
    console.log(`btn`)
    router.push("/")
  }

  return (
    <div className="text-slate-300">
      <header className="flex font-semibold tracking-wide items-center justify-between select-none mx-12 h-[10vh]">
        <button onClick={handleBackBtn}>
      <Image src={backImg} alt="Upload Image" width={40} height={40} className="rounded-full p-2 bg-zinc-800 hover:cursor-pointer hover:bg-zinc-900" />
        </button>
        <ul className="flex gap-3 w-fit">
          {navLinks.map((link, index) => (
            <a href={link.path} key={index} className="cursor-pointer">
              <li
                key={index}
                className="px-5 py-2 text-slate-300 rounded-lg hover:bg-zinc-700"
              >
                {link.name}
              </li>
            </a>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default AboutPage;
