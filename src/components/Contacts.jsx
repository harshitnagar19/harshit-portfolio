import React, { useState } from 'react';
import { Snackbar, IconButton, SnackbarContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import { styled } from '@mui/material/styles'; // Correct import for MUI v5
import contactsPurple from '../assets/contacts/contactsPurple.svg'
import './Contacts.css'

import {
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
    FaYoutube,
    FaInstagram,
    FaGitlab,

} from 'react-icons/fa';
import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';


import { socialsData } from '../data/socialsData';
import { contactsData } from '../data/contactsData';



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
    contactsimg: contactsPurple
}

const Input = styled('input')(() => ({
    border: `4px solid ${theme.primary80}`,
    backgroundColor: theme.secondary,
    color: theme.tertiary,
    fontFamily: 'var(--primaryFont)',
    fontWeight: 500,
    transition: 'border 0.2s ease-in-out',
    '&:focus': {
        border: `4px solid ${theme.primary600}`,
    },
}));

// Styled Message Field (Similar to Input)
const Message = styled('textarea')(() => ({
    border: `4px solid ${theme.primary80}`,
    backgroundColor: theme.secondary,
    color: theme.tertiary,
    fontFamily: 'var(--primaryFont)',
    fontWeight: 500,
    transition: 'border 0.2s ease-in-out',
    '&:focus': {
        border: `4px solid ${theme.primary600}`,
    },
}));

const StyledLabel = styled('label')(() => ({
    backgroundColor: theme.secondary,
    color: theme.primary,
    fontFamily: 'var(--primaryFont)',
    fontWeight: 600,
    fontSize: '0.9rem',
    padding: '0 5px',
    transform: 'translate(25px,50%)',
    display: 'inline-flex',
}));

const SubmitButton = styled('button')(() => ({
    backgroundColor: theme.primary,
    color: theme.secondary,
    transition: '250ms ease-in-out',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '5px',
    '&:hover': {
        transform: 'scale(1.08)',
        color: theme.secondary,
        backgroundColor: theme.tertiary,
    },
}));

const SocialIcon = styled('div')(() => ({
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '21px',
    backgroundColor: theme.primary,
    color: theme.secondary,
    transition: '250ms ease-in-out',
    cursor: 'pointer',
    '&:hover': {
        transform: 'scale(1.1)',
        color: theme.secondary,
        backgroundColor: theme.tertiary,
    },
}));

const DetailsIcon = styled('div')(() => ({
    backgroundColor: theme.primary,
    color: theme.secondary,
    borderRadius: '50%',
    width: '45px',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '23px',
    transition: '250ms ease-in-out',
    flexShrink: 0,
    cursor: 'pointer',
    '&:hover': {
        transform: 'scale(1.1)',
        color: theme.secondary,
        backgroundColor: theme.tertiary,
    },
}));



function Contacts() {
    const [open, setOpen] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');



    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

   
    
    const handleContactForm = (e) => {
        e.preventDefault();

        if (name && email && message) {
            if (isEmail(email)) {
                const responseData = {
                    name: name,
                    email: email,
                    message: message,
                };

                axios.post(contactsData.sheetAPI, responseData).then((res) => {
                    console.log('success');
                    setSuccess(true);
                    setErrMsg('');

                    setName('');
                    setEmail('');
                    setMessage('');
                    setOpen(false);
                });
            } else {
                setErrMsg('Invalid email');
                setOpen(true);
            }
        } else {
            setErrMsg('Enter all the fields');
            setOpen(true);
        }
    };

    return (
        <div
            className='contacts w-full dark:bg-grid-white/[0.4] bg-grid-black/[0.4]  flex items-center justify-center'
            id='contacts'
            style={{ backgroundColor: theme.secondary }}
        >
            <div className='contacts--container'>
                <h1 style={{ color: theme.primary }}>Contacts</h1>
                <div className='contacts-body'>
                    <div className='contacts-form'>
                        <form onSubmit={handleContactForm}>
                            <div className='input-container'>
                                <StyledLabel htmlFor='Name'>
                                        Name
                                </StyledLabel>
                            
                                <Input 
                                    placeholder='Enter Your Name Here'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type='text'
                                    className='form-input'
                                    name='Name' />
                            </div>
                            <div className='input-container'>
                            <StyledLabel htmlFor='Email'> 
                                    
                                
                                    Email
                                </StyledLabel>
                               
                                <Input  placeholder='Example@gmail.com'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type='email'
                                    name='Email'
                                    className="form-input" 
                                />

                            </div>
                            <div className='input-container'>
                            <StyledLabel htmlFor='Email'> 
                                    Message
                           </StyledLabel>
                               
                                <Message 
                                 placeholder='Type your message....'
                                 value={message}
                                 onChange={(e) => setMessage(e.target.value)}
                                 type='text'
                                 name='Message'
                                  multiline 
                                  rows={4} 
                                  className={`form-message `}
                                  />

                            </div>

                            <div className='submit-btn'>
                                    <SubmitButton  type='submit'> 
                                    <p>{!success ? 'Send' : 'Sent'}</p>
                                    <div className='submit-icon'>
                                        <AiOutlineSend
                                            className='send-icon'
                                            style={{
                                                animation: !success
                                                    ? 'initial'
                                                    : 'fly 0.8s linear both',
                                                position: success
                                                    ? 'absolute'
                                                    : 'initial',
                                            }}
                                        />
                                        <AiOutlineCheckCircle
                                            className='success-icon'
                                            style={{
                                                display: !success
                                                    ? 'none'
                                                    : 'inline-flex',
                                                opacity: !success ? '0' : '1',
                                            }}
                                        />
                                    </div>
                                    </SubmitButton>
                               
                            </div>
                        </form>
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            open={open}
                            autoHideDuration={4000}
                            onClose={handleClose}
                        >
                            <SnackbarContent
                                action={
                                    <React.Fragment>
                                        <IconButton
                                            size='small'
                                            aria-label='close'
                                            color='inherit'
                                            onClick={handleClose}
                                        >
                                            <CloseIcon fontSize='small' />
                                        </IconButton>
                                    </React.Fragment>
                                }
                                style={{
                                    backgroundColor: theme.primary,
                                    color: theme.secondary,
                                    fontFamily: 'var(--primaryFont)',
                                }}
                                message={errMsg}
                            />
                        </Snackbar>
                    </div>

                    <div className='contacts-details'>
                        <a
                            href={`mailto:${contactsData.email}`}
                            className='personal-details'
                        >
                            <DetailsIcon>
                                <FiAtSign />
                                </DetailsIcon>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.email}
                            </p>
                        </a>
                        <a
                            href={`tel:${contactsData.phone}`}
                            className='personal-details'
                        >
                            <DetailsIcon>
                                <FiPhone />
                                </DetailsIcon>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.phone}
                            </p>
                        </a>
                        <div className='personal-details'>
                        <DetailsIcon>
                                <HiOutlineLocationMarker />
                                </DetailsIcon>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.address}
                            </p>
                        </div>

                        <div className='socialmedia-icons'>
                            {socialsData.twitter && (
                                <SocialIcon>
                                <a
                                    href={socialsData.twitter}
                                    target='_blank'
                                    rel='noreferrer'
                                    
                                >
                                    <FaTwitter aria-label='Twitter' />
                                </a>
                                </SocialIcon>
                            )}
                            {socialsData.github && (
                                 <SocialIcon>
                                <a
                                    href={socialsData.github}
                                    target='_blank'
                                    rel='noreferrer'
                                   
                                >
                                    <FaGithub aria-label='GitHub' />
                                </a>
                                </SocialIcon>
                            )}
                            {socialsData.linkedIn && (
                                <SocialIcon>
                                <a
                                    href={socialsData.linkedIn}
                                    target='_blank'
                                    rel='noreferrer'
                                    
                                >
                                    <FaLinkedinIn aria-label='LinkedIn' />
                                </a>
                                </SocialIcon>
                            )}
                            {socialsData.instagram && (
                                <SocialIcon>
                                <a
                                    href={socialsData.instagram}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <FaInstagram aria-label='Instagram' />
                                </a>
                                </SocialIcon>
                            )}

                            {socialsData.youtube && (
                                <SocialIcon>
                                <a
                                    href={socialsData.youtube}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <FaYoutube aria-label='YouTube' />
                                </a>
                                </SocialIcon>
                            )}



                            {socialsData.gitlab && (
                                <SocialIcon>
                                <a
                                    href={socialsData.gitlab}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <FaGitlab aria-label='GitLab' />
                                </a>
                                </SocialIcon>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={theme.contactsimg}
                alt='contacts'
                className='contacts--img'
            />
        </div>
    );
}

export default Contacts;
