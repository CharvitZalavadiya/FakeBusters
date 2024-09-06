"use client";

import "./aboutusCard.css";
import czImg from "@/components/assets/team/cz.jpg";
import kbImg from "@/components/assets/team/kb.jpg";
import dpImg from "@/components/assets/team/dp.jpg";
import kpImg from "@/components/assets/team/kp.jpeg";
import hbImg from "@/components/assets/team/hb.jpeg";
import akImg from "@/components/assets/team/ak.jpg";
import Image from "next/image";

const AboutusCard = () => {
  const teamArr = [
    {
      title: "Krishn Patel",
      body: "Contribute to Develop the Model",
      photo: kpImg,
    },
    {
      title: "Dev Patel",
      body: "Contribute to Develop the Model",
      photo: dpImg,
    },
    {
      title: "Kevin Barochiya",
      body: "Contribute to train the model with dataset",
      photo: kbImg,
    },
    {
      title: "Harvi Bhanvadiya",
      body: "Contribute to Research about the field",
      photo: hbImg,
    },
    {
      title: "Aditi Kakadiya",
      body: "Contribute to make the idea commercial",
      photo: akImg,
    },
    {
      title: "Charvit Zalavadiya",
      body: "Come up with Developing the Website",
      photo: czImg,
    },
  ];

  return (
    /* From Uiverse.io by SouravBandyopadhyay */
    <>
      <ul className="grid gap-10 grid-cols-3">
        {teamArr.map((det, index) => (
          <li key={index}>
            <div className="notification select-none">
              <div className="notiglow"></div>
              <div className="notiborderglow"></div>
              <div className="notiphoto">
                <Image
                  src={det.photo}
                  alt={det.title}
                  width={100}
                  height={100}
                  className="team-photo"
                />
                <div className="notititle">{det.title}</div>
              </div>
              <div className="notibody">{det.body}</div>
            </div>
          </li>
        ))}
      </ul>
      {/* <div className="notification select-none">
      <div className="notiglow"></div>
      <div className="notiborderglow"></div>
      <div className="notititle">Krishn Patel</div>
      <div className="notibody">Contribute to Develop the Model</div>
    </div> */}
    </>
  );
};

export default AboutusCard;
