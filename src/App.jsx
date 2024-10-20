import { useEffect } from "react"
import AppStore from "./components/AppStore/AppStore"
import Banner from "./components/Banner/Banner"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import Testimonial from "./components/Testimonial/Testimonial"
import Aos from "aos"
import "aos/dist/aos.css"


const App = () => {

  useEffect(()=>{
    Aos.init({
      offset: 100,
      duration:500,
      easing: "ease-in-out-sine",
      delay: 100,
    });
    Aos.refresh();
  }, [])
  return (
    <>
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
    <Navbar/>
    <Hero/>
    <Services/>
    <Banner/>
    <AppStore/>
    <Testimonial/>
    <Footer/>
    </div>
    </>
  )
}

export default App
   