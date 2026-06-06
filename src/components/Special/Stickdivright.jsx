import Line from "./Line.jsx";
import { FaEnvelope } from "react-icons/fa";

export const Stickdivright = () => {
  return (
    <div className={`stick-div cflex stick-div-right`}>
      <a href="mailto:arkaive19@gmail.com">
        <FaEnvelope size={35} className="icon ud stagger" style={{ "--i": 16 }} />
      </a>
      <Line />
    </div>
  );
};

export default Stickdivright;
