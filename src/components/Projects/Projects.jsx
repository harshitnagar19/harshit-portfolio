import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { projectsData } from '../../data/projectsData';
import SingleProject from './SingleProject/SingleProject';
import { styled } from '@mui/material/styles';
import "./projects.css"
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
    tertiary50: '#eaeaea80'
};

const ViewAllButton = styled('button')(() => ({
    color: theme.tertiary,
    backgroundColor: theme.primary,
    transition: 'color 0.2s',
    '&:hover': {
        color: theme.secondary,
        backgroundColor: theme.primary,
    }
}));

const ArrowButton = styled(HiArrowRight)(() => ({
    color: theme.tertiary,
    backgroundColor: theme.secondary70,
    width: '40px',
    height: '40px',
    padding: '0.6rem',
    fontSize: '1.05rem',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    '&:hover': {
        color: theme.tertiary,
        backgroundColor: theme.secondary,
    }
}));

function Projects() {
    return (
        <>
            {projectsData.length > 0 && (
                <div className="projects w-full dark:bg-grid-white/[0.4] bg-grid-black/[0.4] flex items-center justify-center" id="projects" style={{ backgroundColor: theme.secondary }}>
                    <div className="projects--header">
                        <h1 style={{ color: theme.primary }}>Projects</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--bodyContainer">
                            {projectsData.slice(0, 3).map((project) => (
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
                        </div>

                        {projectsData.length > 3 && (
                            <div className="projects--viewAll">
                                <Link to="/projects">
                                    <ViewAllButton>
                                        View All
                                        <ArrowButton />
                                    </ViewAllButton>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default Projects;
