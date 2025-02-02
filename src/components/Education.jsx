import React from 'react';


import './Education.css'
import EducationCard from './EducationCard';
import eduPurple from "../assets/education/eduPurple.svg"
import { educationData } from '../data/educationData'

function Education() {

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
    eduimg: eduPurple,
}
    return (
        <div className="education w-full dark:bg-grid-white/[0.4] bg-grid-black/[0.4]  flex items-center justify-center" id="education" style={{ backgroundColor: theme.secondary }}>
            <div className="education-body">
                <div className="line-styling pb-[8rem]">
                    <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                    <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                    <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
                </div>
                <div className='flex flex-row justify-center items-center'>
                <div className="education-description">
                    <h1 style={{ color: theme.primary }}>Education</h1>
                    {educationData.map(edu => (
                        <EducationCard
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                            percentage={edu.percentage}
                        />
                    ))}
                </div>
                <div className="education-image">
                    <img src={theme.eduimg} alt="" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Education
