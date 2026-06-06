import Term from "../components/Term/Terminal.jsx";

const timelineData = [
  {
    year: "2021",
    title: "Started Learning Web Development",
    description: "Began learning HTML, CSS, and JavaScript.",
  },
  {
    year: "2022",
    title: "Built First React App",
    description: "Created several frontend projects using React.",
  },
  {
    year: "2023",
    title: "Freelance Projects",
    description: "Worked with clients on responsive web applications.",
  },
  {
    year: "2024",
    title: "Full Stack Development",
    description: "Learned Node.js, Express, and databases.",
  },
  {
    year: "2025",
    title: "Current",
    description: "Building modern web applications and expanding skills.",
  },
];

export const About = () => {
  return (
    <div className="About cflex section-content-s" id="About">
      <div className="timeline stagger ud scroll" style={{ "--i": 1 }}>
        <div className="tm-line"></div>

        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="tm-point"></div>

            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Term></Term>
    </div>
  );
};

export default About;
