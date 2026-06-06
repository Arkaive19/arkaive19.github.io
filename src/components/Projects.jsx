import { useState } from "react";
import {
  FaTerminal,
  FaUser,
  FaCode,
  FaGhost,
  FaGamepad,
  FaReact,
  FaGlobe,
  FaIdCard,
  FaBookmark,
} from "react-icons/fa";

import dotfiles from "../assets/dotfiles.webp";
import sorter from "../assets/sorter.webp";
import love from "../assets/love.webp";
import misc from "../assets/misc.webp";
import hkse from "../assets/hkse.webp";
import eww from "../assets/eww.webp";
import bookmarklet from "../assets/bookmarklet.webp";

const optionsData = [
  {
    title: "Eww widgets",
    subtitle: "Widgets made with Elkowars Wacky Widgets EWW",
    icon: FaBookmark,
    bg: eww,
  },
  {
    title: "Terminal-Sorter",
    subtitle: "Terminal-based sorting visualizer",
    icon: FaTerminal,
    bg: sorter,
  },
  {
    title: "Arkaive19",
    subtitle: "Personal profile and experiments",
    icon: FaUser,
    bg: misc,
  },
  {
    title: "dotfiles",
    subtitle: "Linux configuration and setup",
    icon: FaCode,
    bg: dotfiles,
  },
  {
    title: "hkse",
    subtitle: "Hollow Knight cipher encoder",
    icon: FaGhost,
    bg: hkse,
  },
  {
    title: "9-Lives",
    subtitle: "Lua game project",
    icon: FaGamepad,
    bg: love,
  },
  {
    title: "Bookmarklets-Collection",
    subtitle: "Browser bookmarklets collection",
    icon: FaBookmark,
    bg: bookmarklet,
  },
];

export default function ImageAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="Projects section-content-s cflex" id="Projects">
        <h1 className="scroll ud stagger" style={{ "--i": 1 }}>
          Some of my projects
        </h1>
        <div className="options cflex">
          {optionsData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`cflex option scroll du stagger ${
                  activeIndex === index ? "active" : ""
                }`}
                style={{ backgroundImage: `url(${item.bg})`, "--i": index }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="icon-label cflex">
                  <div className="icon-project cflex">
                    <Icon className="icon-options" />
                  </div>

                  <div className="info">
                    <div className="main">{item.title}</div>
                    <div className="sub">{item.subtitle}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
