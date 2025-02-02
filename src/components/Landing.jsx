import React ,{useState} from 'react';
import { Button } from '@mui/material';  // Updated import for MUI v5
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { styled } from '@mui/system';  // Updated import for MUI v5
import Image from "./harshit_image(1)(1).png";
import './Landing.css';
import { socialsData } from '../data/socialsData';
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { FlipWords } from './ui/flip-words';
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import { headerData } from '../data/headerData';

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

const ResumeBtn = styled(Button)(() => ({
    color: theme.primary,
    borderRadius: '30px',
    textTransform: 'inherit',
    textDecoration: 'none',
    width: '150px',
    fontSize: '1rem',
    fontWeight: '500',
    height: '50px',
    fontFamily: 'var(--primaryFont)',
    border: `3px solid ${theme.primary}`,
    transition: '100ms ease-out',
    '&:hover': {
        backgroundColor: theme.tertiary,
        color: theme.secondary,
        border: `3px solid ${theme.tertiary}`,
    },
}));

const ContactBtn = styled(Button)(() => ({
    backgroundColor: theme.primary,
    color: theme.secondary,
    borderRadius: '30px',
    textTransform: 'inherit',
    textDecoration: 'none',
    width: '150px',
    height: '50px',
    fontSize: '1rem',
    fontWeight: '500',
    fontFamily: 'var(--primaryFont)',
    border: `3px solid ${theme.primary}`,
    transition: '100ms ease-out',
    '&:hover': {
        backgroundColor: theme.secondary,
        color: theme.tertiary,
        border: `3px solid ${theme.tertiary}`,
    },
}));
function Landing() {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }


    const words = ["Full Stack Developer", "Web Developer"];
   

    // const classes = useStyles();

    return (
        <div className='landing'>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: theme.primary }}
                >
                    <div className='lcl--content'>
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='GitHub'
                                />
                            </a>
                        )}
                        {socialsData.twitter && (
                            <a
                                href={socialsData.twitter}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaTwitter
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Twitter'
                                />
                            </a>
                        )}
                        {socialsData.youtube && (
                            <a
                                href={socialsData.youtube}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaYoutube
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='YouTube'
                                />
                            </a>
                        )}
                    </div>
                </div>

                {/* start */}
                <div className="landing--img">
                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 landing-image group/card  dark:hover:shadow-sm dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  rounded-sm   ">
                            <CardItem translateZ="100" className="landing-image">
                                <img
                                    src={Image}
                                    className=" h-full w-full object-cover rounded-sm group-hover/card:shadow-sm landing-image "
                                    style={{
                                        opacity: `${drawerOpen ? '0' : '1'}`,
                                        borderColor: theme.secondary,
                                    }}
                                />
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                </div>

                {/* //end */}

                <div
                    style={{ backgroundColor: theme.secondary }}
                    className='landing--container-right dark:bg-grid-white/[0.4] bg-grid-black/[0.4]  flex items-center justify-center'
                >

                    <div
                        className='lcr--content '
                        style={{ color: theme.tertiary }}
                    >

                        <h6> <FlipWords words={words} className={"bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 px-5 py-2 rounded-md text-md text-bold"} /></h6>
                        <HeroHighlight>
                            <motion.h1
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: [20, -5, 0],
                                }}
                                transition={{
                                    duration: 0.9,
                                    ease: [0.4, 0.0, 0.2, 1],
                                }}
                                
                            >

                                <Highlight className="ml-4 px-5 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500">
                                  Harshit Nagar 
                                </Highlight>
                            </motion.h1>
                        </HeroHighlight>
                        <p>{headerData.desciption}</p>

                        <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                   <ResumeBtn>Download CV</ResumeBtn>
                                </a>
                            )}
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <ContactBtn>Contact</ContactBtn>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
