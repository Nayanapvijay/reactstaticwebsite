import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Acheivements from "./components/Acheivements"
import Gallery from "./components/Gallery"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {
  

  return (
    <>
      <Header/>
      <div id="Home">
      <Home/>
      </div>
      <div id="About"className="my-4">
      <About/>
      </div>
      <div id="Acheivements" className="my-4">
        <Acheivements/>
      </div>
      <div id="Gallery" className="my-4">
        <Gallery/>
      </div>
      <div id="Contact" className="my-4">
<Contact/>
      </div>
      <div id="Footer" >
        <Footer/>
      </div>

    </>
  )
}

export default App
