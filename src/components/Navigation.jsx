import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/pfp.webp";
import resume from "../assets/resume.pdf"
const Navigation = () => {
  const navbarRef = useRef(null);
  const [open, setOpen] = useState(false);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;
      const navbar = navbarRef.current;
      if (!navbar) return;

      navbar.style.top = currentScroll > lastScrollTop ? "-100px" : "0";
      currentScroll > 0
        ? navbar.classList.add("shadow")
        : navbar.classList.remove("shadow");
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={navbarRef} className="nav-bar">
      <div className="nav-sub-cnt-left">
        <a href="#home">
          <img
            src={logo}
            alt="Logo"
            className="nav-img ud stagger"
            style={{ "--i": 6 }}
          />
        </a>
      </div>

      <button
        className={`nav-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-sub-cnt-right ${open ? "show" : ""}`}>
        <a href="#Home" className="nav ud stagger" style={{ "--i": 1 }}>
          <h3 className="nav-text">Home</h3>
        </a>
        <a href="#Projects" className="nav ud stagger" style={{ "--i": 2 }}>
          <h3 className="nav-text">Projects</h3>
        </a>
        <a href="#About" className="nav ud stagger" style={{ "--i": 3 }}>
          <h3 className="nav-text">About</h3>
        </a>
        {/* <a href="#contact" className="nav ud stagger" style={{ "--i": 4 }}>
          <h3 className="nav-text">Contact</h3>
        </a> */}
   <a
  href={resume}
  target="_blank"
  rel="noopener noreferrer"
  className="nav ud stagger"
  style={{ "--i": 5 }}
>
  <button className="btn-alt">Resume</button>
</a>
      </div>
    </header>
  );
};

export default Navigation;
