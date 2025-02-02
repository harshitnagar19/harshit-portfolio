import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './utils/ScrollToTop';
import Main from './pages/Main';
import ProjectPage from "./pages/ProjectPage"
import BackToTop from './utils/BackToTop';

function App() {

  return (
    <div>
      <BrowserRouter>
          <ScrollToTop/>
        <Routes>
          
            <Route path="/" element={<Main />} />

            <Route path="/projects" exact element={<ProjectPage/>} />    
        </Routes>
      </BrowserRouter>
        <BackToTop />
    </div>
  )
}

export default App
