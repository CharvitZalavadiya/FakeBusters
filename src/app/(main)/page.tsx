import GetStartedButton from "@/components/comps/getStartedButton";
import "./css.css";
import Image from "next/image";
import bgimg from "@/components/assets/bg_img_website.jpg"

export default function Home() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
  ];
  return (
    <div className="relative">
      <Image
        src={bgimg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10 opacity-35 blur-lg"
      />
      <header className="flex font-semibold tracking-wide items-center gap-7 select-none justify-end mx-12 h-[10vh]">
        <ul className="flex gap-3">
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
      <main>
        <span>
          <h1 className="text-6xl font-bold tracking-wide text-slate-300 pb-7 pt-16 flex justify-center">
            Fake Busters
          </h1>
          <p className="text-2xl font-semibold tracking-wide flex justify-center mb-10 text-slate-300">
          Seeing Beyond the Illusion: AI-Driven Deepfake Defense
          </p>
          <p className="flex justify-center">
            <GetStartedButton />
          </p>
        </span>
        <p className="text-slate-300 text-lg py-8 px-36 whitespace-break-spaces text-center">
        We develop advanced AI tools to detect deepfake videos using models like EfficientNet, ResNet50, XceptionNet, and InceptionResNet, combined with LSTM for temporal analysis. Our mission is to ensure the authenticity of video content, helping users confidently identify manipulated media.
        </p>
      </main>
      <footer></footer>
    </div>
  );
}
