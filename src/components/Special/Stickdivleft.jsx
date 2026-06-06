import Line from "./Line.jsx";
import { FaDiscord, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
export const Stickdivleft = () => {
  return (
    <div className={`stick-div cflex stick-div-left`}>
      <a
        href="https://discord.com/users/1365338832060420306"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDiscord
          size={35}
          className="icon ud stagger"
          style={{ "--i": 13 }}
        />
      </a>

      <a
        href="https://www.linkedin.com/in/arkaive-930b7a37b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin
          size={35}
          className="icon rl stagger"
          style={{ "--i": 14 }}
        />
      </a>

      <a
        href="https://instagram.com/arkaive19"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram
          size={35}
          className="icon rl stagger"
          style={{ "--i": 15 }}
        />
      </a>

      <a
        href="https://github.com/Arkaive19"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={35} className="icon du stagger" style={{ "--i": 16 }} />
      </a>

      <Line />
    </div>
  );
};

export default Stickdivleft;
