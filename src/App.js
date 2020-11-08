import React from 'react'
import NavBar from './Navbar'
import Hero from './HeroSection'
import Portfolio from './PortfolioSection'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import './style.css'


const App=()=>{
    return(
        <div>
            <NavBar/>
            <Hero/>
            <Portfolio/>
            <About/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App;


