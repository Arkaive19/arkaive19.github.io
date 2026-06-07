import { useState, useRef, useEffect } from "react";

const Term = () => {
  const welcomeMsg = [
    "###██╗#█████╗#██████╗#██╗##██╗####██╗██╗##",
    "##██╔╝██╔══██╗██╔══██╗██║███╔╝###██╔╝╚██╗#",
    "#██╔╝#███████║██████╔╝████╔═╝###██╔╝##╚██╗",
    "#╚██╗#██╔══██║██╔══██╗██╔██╗###██╔╝###██╔╝",
    "##╚██╗██║##██║██║##██║██║╚██╗##╚═╝###██═╝##",
    "> for advanced users only",
    "> makeshift terminal interface",
    "> type 'help' to get started",
  ];

  const [value, setValue] = useState("");
  const [outputArr, setOutputArr] = useState(welcomeMsg);
  const outputRef = useRef(null);

  useEffect(() => {
    if (outputRef.current)
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }, [outputArr]);

  function output(msg) {
    setOutputArr((prev) => {
      if (msg === "__CLEAR__") return Array(prev.length).fill("");
      return [...prev, msg];
    });
  }

  const commands = {
    clear: () => output("__CLEAR__"),
    cls: () => output("__CLEAR__"),

    title: () => welcomeMsg.forEach((e) => output(e)),

    help: () => {
      output("Commands:");
      output("├── about");
      output("├── achievements");
      output("├── clear | cls");
      output("├── contact");
      output("├── date");
      output("├── education");
      output("├── experience");
      output("├── heck");
      output("├── help");
      output("├── ls");
      output("├── projects");
      output("├── pwd");
      output("├── resume");
      output("├── skills");
      output("├── socials");
      output("├── stats");
      output("├── techstack");
      output("├── title");
      output("└── whoami");
      output("");
      output("Use: help <command>");
    },

    heck: () => output("hecc 😈"),

    "help clear": () => {
      output("Usage: clear | cls");
      output("╰─ Clears terminal output");
    },

    "help about": () => {
      output("Usage: about");
      output("╰─ Shows information about me");
    },

    "help skills": () => {
      output("Usage: skills");
      output("╰─ Lists my technical skills");
    },

    "help projects": () => {
      output("Usage: projects");
      output("╰─ Shows featured projects");
    },

    "help experience": () => {
      output("Usage: experience");
      output("╰─ Shows experience timeline");
    },

    "help education": () => {
      output("Usage: education");
      output("╰─ Shows education history");
    },

    "help contact": () => {
      output("Usage: contact");
      output("╰─ Displays contact information");
    },

    "help socials": () => {
      output("Usage: socials");
      output("╰─ Displays social links");
    },

    "help resume": () => {
      output("Usage: resume");
      output("╰─ Opens/downloads resume");
    },

    "help achievements": () => {
      output("Usage: achievements");
      output("╰─ Shows notable achievements");
    },

    "help techstack": () => {
      output("Usage: techstack");
      output("╰─ Shows technologies I use");
    },

    "help stats": () => {
      output("Usage: stats");
      output("╰─ Shows developer statistics");
    },

    "help date": () => {
      output("Usage: date");
      output("╰─ Shows current date/time");
    },

    "help whoami": () => {
      output("Usage: whoami");
      output("╰─ Shows current user");
    },

    "help pwd": () => {
      output("Usage: pwd");
      output("╰─ Shows current directory");
    },

    "help ls": () => {
      output("Usage: ls");
      output("╰─ Lists directory contents");
    },

    "help title": () => {
      output("Usage: title");
      output("╰─ Prints welcome banner");
    },

    "help heck": () => {
      output("Usage: heck");
      output("╰─ ???");
    },

    about: () => {
      output("Hi, I'm Arkaive.");
      output("Frontend Developer from Nepal.");
      output("React enthusiast.");
      output("Building clean UIs and weird side projects.");
    },

    skills: () => {
      output("JavaScript");
      output("TypeScript");
      output("React");
      output("HTML");
      output("CSS");
      output("Node.js");
      output("MongoDB");
      output("Git");
    },

    projects: () => {
      output("📌 Portfolio Terminal");
      output("📌 React UI Experiments");
      output("📌 Bookmarklet Collection");
    },

    experience: () => {
      output("Frontend Development");
      output("Personal Projects");
      output("Open Source Contributions");
    },

    education: () => {
      output("Grade 11");
      output("Currently studying Computer Science related subjects");
    },

    contact: () => {
      output("Email: arkaive19@gmail.com");
      output("Discord: arkaive");
      output("Location: Nepal");
    },

    socials: () => {
      output("GitHub: github.com/arkaive");
      output("LinkedIn: linkedin.com/in/arkaive");
    },

    resume: () => {
      output("Opening resume...");
    },

    achievements: () => {
      output("⚡ Built multiple React projects");
      output("⚡ Strong frontend focus");
      output("⚡ Active learner and builder");
    },

    techstack: () => {
      output("Frontend : React, TypeScript");
      output("Styling  : CSS, SCSS");
      output("Backend  : Node.js");
      output("Database : MongoDB");
      output("Tools    : Git, VSCode");
    },

    stats: () => {
      output("Level          : Grade 11");
      output("Favorite Stack : React + TS");
      output("Editor         : VSCode");
      output("Theme          : Dark");
    },

    date: () => {
      output(new Date().toString());
    },

    whoami: () => {
      output("visitor");
    },

    pwd: () => {
      output("/home/arkaive");
    },

    ls: () => {
      output("about.txt");
      output("projects/");
      output("skills.json");
      output("resume.pdf");
      output("contact.md");
    },
  };

  function handleOutput() {
    const command = value.trim().toLowerCase();
    output(`> ${command}`);

    if (command in commands) {
      commands[command]();
    } else output("Err: try help");
    setOutputArr((prev) => [...prev, "\u200B"]);
  }

  function handleSubmit() {
    handleOutput();
    setValue("");
  }

  return (
    <>
    <div
      className="console-card card cflex ud stagger scroll"
      style={{ "--i": 8 }}
    >
      <form
        className="cflex console-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="console-output" ref={outputRef}>
          {outputArr.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>

        <div className="console-interface cflex">
          <button>&gt;</button>

          <input
            type="text"
            className="console-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </form>
    </div>
    </>
  );
};

export default Term;
