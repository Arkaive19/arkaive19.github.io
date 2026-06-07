import Navigation from "../components/Navigation.jsx";
import Stickdivleft from "./Special/Stickdivleft.jsx";
import Stickdivright from "./Special/Stickdivright.jsx";
import Hero from "../components/Hero.jsx";
import Projects from "./Projects.jsx";
import Scroll from "./Special/Scroll.jsx";
import Footer from "./Footer.jsx";
import About from "./About.jsx";
import Special from "./Special.jsx";
export const Content = () => {
  return (
    <div className={`content`}>
      <Navigation />
      <div className="content-cnt">
        <Stickdivleft />
        <div className="section-cnt cflex">
          <Hero />
          <Scroll>
            <Projects />
            <About />
            <Special/>
            <Footer></Footer>
          </Scroll>
        </div>
        <Stickdivright />
      </div>
    </div>
  );
};

export default Content;
