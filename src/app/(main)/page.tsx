"use client";
import GetStartedButton from "@/components/comps/getStartedButton";
import "./css.css";
import Image from "next/image";
import bgimg from "@/components/assets/bg_img_website.jpg";
import { useState } from "react";

export default function Home() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Pricing", path: "/pricing" },
  ];

  const paraText = ["Seeing Beyond the Illusion: AI-Driven Deepfake Defense"];

  const paraTextWords = paraText[0].split(" ");

  const details = [
    "We develop advanced AI tools to detect deepfake videos using models like EfficientNet, ResNet50, XceptionNet, and InceptionResNet, combined with LSTM for temporal analysis. Our mission is to ensure the authenticity of video content, helping users confidently identify manipulated media.",
  ];

  const detailsWords = details[0].split(" ");

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true); // Set the state to true on button click

    setTimeout(() => {
      setIsClicked(false);
    }, 5700);
  };

  return (
    <div className="relative select-none h-screen w-screen overflow-hidden">
      {/* <StarBG /> */}
      <Image
        src={bgimg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10 opacity-35 blur-lg"
      />
      <header className="flex font-semibold tracking-wide items-center gap-7 select-none justify-end mx-12 h-[10vh]">
        <ul className={`navAnimation flex gap-3`}>
          {navLinks.map((link, index) => (
            <a href={link.path} key={index} className="cursor-pointer">
              <li
                key={index}
                className="px-5 py-2 text-slate-300 rounded-lg hover:bg-zinc-700"
                style={{ animationDelay: `${1.5 + 0.1 * (index + 1)}s` }}
              >
                {link.name}
              </li>
            </a>
          ))}
        </ul>
      </header>
      <main>
        <span className="flex flex-col w-screen items-center">
          <h1 className="text-6xl font-bold tracking-wide text-slate-300 pb-7 pt-16 flex justify-center">
            <div
              className={`teamName-fl inline-block whitespace-nowrap ${
                isClicked ? "outAnimT-fl" : ""
              }`}
            >
              F
            </div>
            <div
              className={`teamNameDiv-rl overflow-hidden inline-block whitespace-nowrap ${
                isClicked ? "outAnimTdiv-rl" : ""
              }`}
            >
              <span className={`teamName-rl ${isClicked ? "outAnimT-rl" : ""}`}>
                ackBusters
              </span>
            </div>
          </h1>
          <p
            className={`paraText text-2xl font-semibold tracking-wide flex justify-center mb-10 text-slate-300 ${
              isClicked ? "outAnimParaText" : ""
            }`}
          >
            {paraTextWords.map((word, index) => (
              <span
                key={index}
                style={{ animationDelay: `${1.5 + 0.1 * (index + 1)}s` }}
              >
                {word}&nbsp;
              </span>
            ))}
          </p>
          <p
            className={`btnAnimation flex justify-center w-fit rounded-[30px] ${
              isClicked ? "outAnimBtn" : ""
            }`}
            onClick={handleClick}
          >
            <GetStartedButton />
          </p>
        </span>
        <p
          className={`detailsAnimation text-slate-300 text-lg py-8 px-14 w-screen flex overflow-hidden flex-wrap justify-center ${
            isClicked ? "outAnimDetails" : ""
          }`}
        >
          {detailsWords.map((word, index) => (
            <span
              key={index}
              style={{ animationDelay: `${4 + 0.1 * (index + 1)}s` }}
            >
              {word}&nbsp;
            </span>
          ))}
        </p>
      </main>
      <footer></footer>
    </div>
  );
}
