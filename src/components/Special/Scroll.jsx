import { useRef, useEffect } from "react";
const Scroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("play");
            observer.unobserve(entry.target); // important
          }
        });
      },
      { threshold: 0.15 },
    );

    const elements = ref.current.querySelectorAll(".scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="section-content">
      {children}
    </div>
  );
};

export default Scroll;
