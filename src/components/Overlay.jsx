import { useEffect, useState } from "react";
import logo from "../assets/vite.svg";

export const Overlay = ({ onFinish }) => {
  const [visible, setVisible] = useState(false);
  const [hexAnimated, setHexAnimated] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const timing = {
    appear: 50,
    draw: 600,
    disappear: 1400,
    finish: 2000,
  };
  useEffect(() => {
    const loadTimer = setTimeout(() => setVisible(true), timing.appear);
    const animTimer = setTimeout(() => setHexAnimated(true), timing.draw);
    const unloadTimer = setTimeout(() => setFadeOut(true), timing.disappear);
    const finishTimer = setTimeout(() => onFinish?.(), timing.finish);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(animTimer);
      clearTimeout(unloadTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);
  let classList = [visible && "visible", fadeOut && "fade-out"]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={`overlay cflex ${classList}`}>
      <div className="logo-wrapper">
        <svg
          className="hex-border"
          viewBox="0 0 160 160"
          width="160"
          height="160"
        >
          <polygon
            points="80,150 21,115 21,45 80,10 139,45 139,115 80,150"
            style={{
              strokeDashoffset: hexAnimated ? 0 : 412,
              strokeDasharray: 420,
              stroke: "var(--accent)",
              strokeWidth: 4,
              fill: "none",
              transition: "stroke-dashoffset 1.2s cubic-bezier(0.77,0,0.175,1)",
            }}
          />
        </svg>
        <img src={logo} alt="Logo" className="landing-logo" />
      </div>
    </div>
  );
};

export default Overlay;
