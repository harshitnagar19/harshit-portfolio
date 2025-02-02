import React from 'react'

// import { Navbar, Footer, Landing, About, Skills, Education, Experience, Contacts, Projects, Achievement } from '../../components'
import Navbar from '../components/Navbar'
import Landing from "../components/Landing"
import About from '../components/About'
// import { headerData } from '../../data/headerData'
import { Helmet } from 'react-helmet'
import resume from "../assets/pdf/resume.pdf"
function Main() {
    const headerData = {
        name: 'Harshit Nagar',
        title: "Full Stack Developer",
        desciption: "There wasn't a bird in the sky, but that was not what caught her attention. It was the clouds. The deep green that isn't the color of clouds, but came with these. She knew what was coming and she hoped she was prepared. ",
        image: 'https://raw.githubusercontent.com/PhantomScript/asset-container/main/developer-portfolio/landingImg.png',
        resumePdf: resume
    }
    return (

        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>         
              <Navbar />
            <Landing />
            <About />      
            {/*  <Education />
            <Skills />
            <Experience />
            <Projects />
            <Achievement />            
            <Contacts />
            <Footer /> */}
        </div>
    )
}

export default Main
