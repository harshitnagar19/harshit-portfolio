import React from 'react';
import { styled } from '@mui/material/styles'; // Correct import for MUI v5
import { Fade } from 'react-awesome-reveal';
import expImgWhite from '../../assets/experience/expImgWhite.svg'
import expImgBlack from '../../assets/experience/expImgBlack.svg'
import { motion } from "framer-motion";
import './Experience.css'

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

const ExperienceCardStyled = styled('div')(() => ({
    backgroundColor:theme.primary30,
    "&:hover": {
        backgroundColor:theme.primary50,
    },
  }));

function ExperienceCard({id, company, jobtitle, startYear, endYear}) {

    return (
        <Fade bottom>
            <ExperienceCardStyled key={id} className={`experience-card `}>
                <div className="expcard-img" style={{backgroundColor: theme.primary}}>
                    <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
                </div>
                <div className="experience-details">
                    <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: theme.tertiary}}>{jobtitle}</h4>
                    <h5 style={{color: theme.tertiary80}}>{company}</h5>
                </div>
            </ExperienceCardStyled>
            
        </Fade>   
    )
}

export default ExperienceCard
