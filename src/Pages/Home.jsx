import Banner from "../Component/Banner";
import Footer from "../Component/Footer";
import ImageLoop from "../Component/ImageLoop";
import Navbar from "../Component/Navbar";
import MyService from "../Section/MyService";
import About from "./About";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <ImageLoop/>
      <About/>
      <Projects/>
      <MyService/>
      <Footer/>
    </div>
  )
}

export default Home;