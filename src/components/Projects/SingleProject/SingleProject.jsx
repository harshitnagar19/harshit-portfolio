import React from 'react';
import { styled } from '@mui/material/styles'; // Correct import for MUI v5
import { FaPlay, FaCode } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';

import placeholder from '../../../assets/placeholder.png';
import './SingleProject.css';

const iconBtn = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 50,
    border: `2px solid ${theme.tertiary}`,
    color: theme.tertiary,
    transition: 'all 0.2s',
    '&:hover': {
        backgroundColor: theme.secondary,
        color: theme.primary,
        transform: 'scale(1.1)',
        border: `2px solid ${theme.secondary}`,
    },
}));

const icon = styled('div')(() => ({
    fontSize: '1.1rem',
    transition: 'all 0.2s',
    '&:hover': {},
}));

function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
    // const useStyles = makeStyles((t) => ({
    //     iconBtn: {
    //         display: 'flex',
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         width: 40,
    //         height: 40,
    //         borderRadius: 50,
    //         border: `2px solid ${theme.tertiary}`,
    //         color: theme.tertiary,
    //         transition: 'all 0.2s',
    //         '&:hover': {
    //             backgroundColor: theme.secondary,
    //             color: theme.primary,
    //             transform: 'scale(1.1)',
    //             border: `2px solid ${theme.secondary}`,
    //         },
    //     },
    //     icon: {
    //         fontSize: '1.1rem',
    //         transition: 'all 0.2s',
    //         '&:hover': {},
    //     },
    // }));

    // const classes = useStyles();

    return (
        <Fade bottom>
            <div
                key={id}
                className='singleProject'
                style={{ backgroundColor: theme.primary400 }}
            >
                <div className='projectContent'>
                    <h2
                        id={name.replace(' ', '-').toLowerCase()}
                        style={{ color: theme.tertiary }}
                    >
                        {name}
                    </h2>
                    <img src={image ? image : placeholder} alt={name} />
                    <div className='project--showcaseBtn'>
                        <iconBtn>
                        <a
                            href={demo}
                            target='_blank'
                            rel='noreferrer'
                            aria-labelledby={`${name
                                .replace(' ', '-')
                                .toLowerCase()} ${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-demo`}
                        >
                            <icon>
                            <FaPlay
                                id={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-demo`}
                                aria-label='Demo'
                            />
                            </icon>
                        </a>
                        </iconBtn>
                        <iconBtn>
                        <a
                            href={code}
                            target='_blank'
                            rel='noreferrer'
                            aria-labelledby={`${name
                                .replace(' ', '-')
                                .toLowerCase()} ${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-code`}
                        >
                            <icon>
                            <FaCode
                                id={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-code`}
                                aria-label='Code'
                            />
                            </icon>
                        </a>
                        </iconBtn>
                    </div>
                </div>
                <p
                    className='project--desc'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary,
                    }}
                >
                    {desc}
                </p>
                <div
                    className='project--lang'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary80,
                    }}
                >
                    {tags.map((tag, id) => (
                        <span key={id}>{tag}</span>
                    ))}
                </div>
            </div>
        </Fade>
    );
}

export default SingleProject;
