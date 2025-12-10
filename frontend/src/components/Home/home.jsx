import Hero from "./Hero.jsx";
import Services from "./Sevices.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Clients from "./Clients.jsx";
import Newsletter from "./Newsletter.jsx";
import Footer from "./Footer.jsx";


const Home = () => {
  return (
    <div className="mt-10">
      <Hero />  
      <Services />
      <About />
      <Projects />
      <Clients />
      <Newsletter />
      <Footer/>
    </div>
  );
};

export default Home;
