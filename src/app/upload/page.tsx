"use client";

import Image from "next/image";
import uploadImage from "@/components/assets/upload.png";
import backImg from "@/components/assets/back.png";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import "./upload.css";
import { UserButton } from "@clerk/nextjs";

const UploadPage = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Pricing", path: "/pricing" },
  ];

  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Reference to the file input
  const [fileName, setFileName] = useState<string>(""); // State to store the file name

  const handleBackBtn = () => {
    router.push("/");
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger click on the hidden file input
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const maxSizeInMB = 10; // Maximum allowed file size in MB
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024; // Convert MB to bytes

    if (file) {
      if (file.type.startsWith("video/")) {
        // Check if the file is a video
        if (file.size > maxSizeInBytes) {
          alert(`File size should be less than ${maxSizeInMB}MB.`);
          return; // Stop further processing if the file is too large
        }
        setFileName(file.name); // Set the file name in state
        console.log("Video file uploaded:", file);
      } else {
        alert("Please upload a valid video file.");
      }
    }
  };

  return (
    <div>
      <header className="flex font-semibold tracking-wide items-center justify-between select-none mx-12 h-[10vh]">
        <button onClick={handleBackBtn}>
          <Image
            src={backImg}
            alt="Back Image"
            width={40}
            height={40}
            className="rounded-full p-2 bg-zinc-800 hover:cursor-pointer hover:bg-zinc-900"
          />
        </button>
        <UserButton />
        <ul className="flex gap-3 w-fit">
          {navLinks.map((link, index) => (
            <a href={link.path} key={index} className="cursor-pointer">
              <li
                key={index}
                className="px-5 py-2 rounded-lg hover:bg-zinc-700"
              >
                {link.name}
              </li>
            </a>
          ))}
        </ul>
      </header>
      <main className="grid grid-cols-2">
        <section
          className="uploadSection h-[70vh] flex flex-col justify-center items-center border border-slate-600 rounded-lg  mx-12 my-12 hover:cursor-pointer"
          onClick={handleUploadClick} // Trigger the upload input on click
        >
          {!fileName && ( // Only show the image if no file is uploaded
            <Image
              src={uploadImage}
              alt="Upload Image"
              width={50}
              height={50}
            />
          )}
          {fileName ? (
            <span className="px-16">{fileName}</span> // Show file name if a file is uploaded
          ) : (
            <span>Upload your video file here</span> // Default text
          )}
          <input
            type="file"
            ref={fileInputRef}
            accept="video/*" // Accept only video files
            className="hidden" // Hide the input element
            onChange={handleFileChange} // Handle file change
          />
        </section>
        <section className="my-12 flex flex-col gap-12">
          <span className="flex gap-16 text-4xl font-semibold text-neutral-300">
            Result
            <span className="flex gap-20 text-xl">
              <span className="bg-red-700 rounded-md px-8 py-2">Fake</span>
              <span className="bg-green-700 rounded-md px-8 py-2">Real</span>
            </span>
          </span>
          <span className="grid grid-cols-1 gap-6 text-4xl font-semibold text-neutral-300">
            Data
            <span className="text-lg opacity-80 font-normal grid grid-cols-2">
              <span className="grid">
                Accuracy
                <span className="font-bold text-2xl text-white">86</span>
              </span>
              <span className="grid">
                Confidence
                <span className="font-bold text-2xl text-white">76</span>
              </span>
            </span>
          </span>
        </section>
      </main>
    </div>
  );
};

export default UploadPage;
