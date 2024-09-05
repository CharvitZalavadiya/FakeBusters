"use client"

import Image from "next/image";
import uploadImage from "@/components/assets/upload.png";
import backImg from "@/components/assets/back.png"
import { useRouter } from "next/navigation";

const UploadPage = () => {
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
      <main className="grid grid-cols-2">
        <section className="h-[70vh] flex flex-col justify-center items-center border-2 border-slate-600 rounded-lg text-slate-500 mx-12 my-12 hover:cursor-pointer">
          <Image src={uploadImage} alt="Upload Image" width={50} height={50} />
          upload your file here
        </section>
        <section className="my-12 flex flex-col gap-12">
          <span className="grid grid-cols-2 place-items-center text-4xl font-semibold">
            <span className="bg-red-700 opacity-80 text-white rounded-md px-8 py-2">Fake</span>
            <span className="bg-green-700 opacity-30 text-white rounded-md px-8 py-2">Real</span>
          </span>
          <hr className="mr-20 ml-20" />
          <span className="grid grid-cols-2 mx-12 place-items-center text-slate-400 text-2xl">
            <span>Accuracy : <span className="font-bold text-slate-300">86%</span></span>
            <span>Confidence : <span className="font-bold text-slate-300">65%</span></span>
          </span>
        </section>
      </main>
    </div>
  );
};

export default UploadPage;
