import React from 'react';
import { styled } from '@mui/material/styles'; // Correct import for MUI v5
import { Fade } from 'react-awesome-reveal';


import eduImgWhite from '../assets/education/eduImgWhite.svg'
import eduImgBlack from '../assets/education/eduImgBlack.svg'
import './Education.css'

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


const EducationCardStyle = styled('div')(() => ({
    backgroundColor: theme.primary30,
    '&:hover': {
        backgroundColor: theme.primary50,
    },
}));

function EducationCard({ id, institution, course, startYear, endYear ,percentage }) {

    return (
        <Fade bottom className=" w-full dark:bg-grid-purple/[0.4] bg-grid-purple/[0.4]  flex items-center justify-center">
            <EducationCardStyle key={id} className={`education-card `}>
            
                <div className="educard-img" style={{backgroundColor: theme.primary}}>
                    <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
                </div>
                <div className="education-details pb-8">
                    <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: theme.tertiary}}>{course}</h4>
                    <h5 style={{color: theme.tertiary80}}>{institution}</h5>
                    <h5 style={{color: theme.tertiary80}}>Passed with : {percentage}</h5>
                </div>
            
            </EducationCardStyle>
        </Fade>        
    )
}

export default EducationCard
