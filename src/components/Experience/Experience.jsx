import React from 'react';


import './Experience.css';

import { experienceData } from '../../data/experienceData'
import ExperienceCard from './ExperienceCard';
import expPurple from '../../assets/experience/expPurple.svg'

function Experience() {

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
        expimg: expPurple,
    }
    
    
    return (
        <div className="experience w-full dark:bg-grid-white/[0.4] bg-grid-black/[0.4]  flex items-center justify-center" id="experience" style={{backgroundColor: theme.secondary}}> 
             <div className="experience-body">
                 <div className="experience-image">
                     <img src={theme.expimg} alt="image loading..." />
                 </div>
                 <div className="experience-description">
                    <h1 style={{color:theme.primary}}>Experience</h1>
                    {experienceData.map(exp =>(
                        <ExperienceCard 
                            key={exp.id}
                            id={exp.id}
                            jobtitle={exp.jobtitle}
                            company={exp.company}
                            startYear={exp.startYear}
                            endYear={exp.endYear}/>
                    ))}
                 </div>
             </div>
        </div>
    )
}

export default Experience
