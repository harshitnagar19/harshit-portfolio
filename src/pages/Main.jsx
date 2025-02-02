import React from 'react'

// import { Navbar, Footer, Landing, About, Skills, Education, Experience, Contacts, Projects, Achievement } from '../../components'
import Navbar from '../components/Navbar'
import Landing from "../components/Landing"
import About from '../components/About'
import Education from '../components/Education'
import { headerData } from '../data/headerData'
import Skills from '../components/Skills'
import { Helmet } from 'react-helmet'
function Main() {
    return (

        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>         
              <Navbar />
            <Landing />
            <About />      
            <Education />
             <Skills />
           {/*  <Experience />
            <Projects />
            <Achievement />            
            <Contacts />
            <Footer /> */}
        </div>
    )
}

export default Main
