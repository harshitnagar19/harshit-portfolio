import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";
import { styled } from '@mui/system';
import './Skills.css'
import { HiArrowRight } from "react-icons/hi";
import { skillsData } from '../data/skillsData'
import { skillsImage } from '../utils/skillsImage'
import purpleThemegirl from '../assets/about/purpleTheme-girl.svg'

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
    aboutimg1:  purpleThemegirl,
}
const ViewAllButton = styled('button')({
    color: theme.tertiary,
    backgroundColor: theme.primary,
    transition: 'color 0.2s',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    '&:hover': {
        color: theme.secondary,
        backgroundColor: theme.primary,
    },
});

const ArrowIcon = styled(HiArrowRight)({
    color: theme.tertiary,
    backgroundColor: theme.secondary70,
    width: '40px',
    height: '40px',
    padding: '0.5rem',
    fontSize: '1.05rem',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    '&:hover': {
        color: theme.tertiary,
        backgroundColor: theme.secondary,
    }
});

function Skills() {


 
    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }

   

    return (
        <div className="skills w-full dark:bg-grid-white/[0.4] bg-grid-black/[0.4]  flex items-center justify-center" style={{ backgroundColor: theme.secondary }}>
            <div className="skillsHeader">
                <h2 style={{ color: theme.primary }}>Skills</h2>
            </div>
            <div className="skillsContainer ">
                <div className="skill--scroll">
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{ color: theme.tertiary }}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
            
        </div>
    )
}

export default Skills
