import React, {useState } from 'react'
import { Helmet } from 'react-helmet'
import { Grid } from "@mui/material";
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'; // Correct import for MUI v5
import { AiOutlineHome } from "react-icons/ai";

import './ProjectPage.css'
import  SingleProject  from '../components/Projects/SingleProject/SingleProject';
import { projectsData } from '../data/projectsData'
import { headerData } from '../data/headerData'
import Footer from '../components/Footer';
import Contacts from '../components/Contacts';


const theme = {
  type: 'dark',
  primary: '#823ae0',
  primary400: '#9456e5',
  primary600: '#762ad9',
  primary80: '#823ae0cc',
  primary50: '#823ae080',
  primary30: '#823ae04d',
  secondary: '#212121',
  secondary70: '#212121b3',
  secondary50: '#21212180',
  tertiary: '#eaeaea',
  tertiary80: '#eaeaeacc',
  tertiary70: '#eaeaeab3',
  tertiary50: '#eaeaea80',
}

const SearchInput = styled('input')(() => ({
  color: theme.tertiary,
  width: '40%',
  height: '2.75rem',
  outline: 'none',
  border: 'none',
  borderRadius: '20px',
  padding: '0.95rem 1rem',
  fontFamily: "'Noto Sans TC', sans-serif",
  fontWeight: 500,
  fontSize: '0.9rem',
  backgroundColor: theme.secondary,
  boxShadow: theme.type === 'dark'
      ? 'inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060'
      : 'inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030',
  '::placeholder': {
      color: theme.tertiary80,
  },
  '@media (max-width: 600px)': {
      width: '350px',
  },
}));

const HomeIcon = styled(AiOutlineHome)(() => ({
  color: theme.secondary,
  position: 'absolute',
  top: 25,
  left: 25,
  padding: '7px',
  borderRadius: '50%',
  fontSize: '2rem',
  cursor: 'pointer',
  boxShadow: theme.type === 'dark'
      ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050'
      : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
      color: theme.tertiary,
      transform: 'scale(1.1)',
  },
  '@media (max-width: 600px)': {
      fontSize: '1.8rem',
  },
}));


function ProjectPage() {

    const [search, setSearch] = useState('')

  
    const filteredArticles = projectsData.filter((project) => {
        const content = project.projectName + project.projectDesc + project.tags
        return content.toLowerCase().includes(search.toLowerCase())
    })

  
    return (
        <div className="projectPage" style={{backgroundColor: theme.secondary}}>
            <Helmet>
                <title>{headerData.name} | Projects</title>
            </Helmet>
            <div className="projectPage-header" style={{backgroundColor:theme.primary}}>
                <Link to="/">
                <HomeIcon />
                </Link>
                <h1 style={{color: theme.secondary}}>Projects</h1>
            </div>
           <div className="projectPage-container">
               <div className="projectPage-search">
                   <SearchInput type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search project..."  />
               </div>
               <div className="project-container">
                   <Grid className="project-grid" container direction="row" alignItems="center" justifyContent="center">
                        {filteredArticles.map(project => (
                            <SingleProject
                                theme={theme}
                                key={project.id}
                                id={project.id}
                                name={project.projectName}
                                desc={project.projectDesc}
                                tags={project.tags}
                                code={project.code}
                                demo={project.demo}
                                image={project.image} 
                            />
                        ))}
                   </Grid>
               </div>
           </div> 
           <Contacts/>
           <Footer/>   
        </div>
    )
}

export default ProjectPage
