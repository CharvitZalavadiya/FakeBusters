"use client";

import Image from "next/image";
import uploadImage from "@/components/assets/upload.png";
import backImg from "@/components/assets/back.png";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

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
    <div className="text-slate-300">
      {/* {showPopup === 1 && <Popup1 onClose={handlePopupClose} />}
      {showPopup === 2 && <Popup2 onClose={handlePopupClose} />}
      {showPopup === 3 && <Popup3 onClose={handleFinalPopupClose} />} */}
      <header className="flex font-semibold tracking-wide items-center justify-between select-none mx-12 h-[10vh]">
      {/* <StarBG /> */}
        <button onClick={handleBackBtn}>
          <Image
            src={backImg}
            alt="Back Image"
            width={40}
            height={40}
            className="rounded-full p-2 bg-zinc-800 hover:cursor-pointer hover:bg-zinc-900"
          />
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
        <section
          className="h-[70vh] flex flex-col justify-center items-center border-2 border-slate-600 rounded-lg text-slate-500 mx-12 my-12 hover:cursor-pointer"
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
            <span className="text-slate-300 px-16">{fileName}</span> // Show file name if a file is uploaded
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
          <span className="grid grid-cols-2 place-items-center text-4xl font-semibold">
            <span className="bg-red-700 opacity-80 text-white rounded-md px-8 py-2">
              Fake
            </span>
            <span className="bg-green-700 opacity-30 text-white rounded-md px-8 py-2">
              Real
            </span>
          </span>
          <hr className="mr-20 ml-20" />
          <span className="grid grid-cols-1 mx-20 gap-12 text-slate-400 text-2xl">
            <span>
              Accuracy : <span className="font-bold text-slate-300"></span>
            </span>
            <span>
              Confidence : <span className="font-bold text-slate-300"></span>
            </span>
          </span>
        </section>
      </main>
    </div>
  );
};

export default UploadPage;
