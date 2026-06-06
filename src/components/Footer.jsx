import { FaDiscord, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer cflex section-content-s">
      <div className="foot-icons cflex">
        <a
          href="https://discord.com/users/1365338832060420306"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord
            size={35}
            className="icon ud stagger scroll"
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
            className="icon rl stagger scroll"
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
            className="icon rl stagger scroll"
            style={{ "--i": 15 }}
          />
        </a>

        <a
          href="https://github.com/Arkaive19"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            size={35}
            className="icon du stagger scroll"
            style={{ "--i": 16 }}
          />
        </a>

        <a href="mailto:arkaive19@gmail.com">
          <FaEnvelope
            size={35}
            className="icon ud stagger scroll"
            style={{ "--i": 17 }}
          />
        </a>
      </div>
      <div className="foot-line du stagger scroll" style={{ "--i": 18 }}></div>
    </div>
  );
};

export default Footer;
