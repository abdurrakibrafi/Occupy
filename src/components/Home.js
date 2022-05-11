import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Herosection from "../components/Herosection";
import Howwork from "../components/Howwork";
import Navbar from "../components/Navbar";
import Team from "../components/Team";
function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Howwork />
      <About />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
