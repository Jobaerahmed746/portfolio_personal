import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Resume from './Components/Resume/Resume'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import MyProjects from './Components/MyProjects/MyProjects'
import Services from './Components/Services/Services'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Resume/>
      <Services/>
      <MyProjects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App




