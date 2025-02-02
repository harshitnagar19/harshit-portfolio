import React, { useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Fade } from 'react-awesome-reveal';
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';
import { FaUser, FaFolderOpen } from 'react-icons/fa';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import './Navbar.css';

const theme = {
    type: 'dark',
    primary: '#823ae0',
    secondary: '#212121',
    tertiary: '#eaeaea',
};

const NavbarContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: theme.secondary,
});

const NavMenuIcon = styled(IoMenuSharp)({
    fontSize: '2.5rem',
    color: theme.tertiary,
    cursor: 'pointer',
    transition: 'color 0.3s',
    '&:hover': {
        color: theme.primary,
    },
});

const CustomDrawer = styled(Drawer)({
    '& .MuiDrawer-paper': {
        width: '14em',
        backgroundColor: theme.secondary,
        padding: '1.8em',
        borderTopRightRadius: '40px',
        borderBottomRightRadius: '40px',
    },
});

const DrawerItem = styled('div')({
    margin: '1rem auto',
    borderRadius: '50px',
    background: theme.secondary,
    color: theme.primary,
    width: '85%',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 30px',
    border: '2px solid',
    borderColor: theme.primary,
    transition: '0.3s',
    '&:hover': {
        background: theme.primary,
        color: theme.secondary,
    },
});

function Navbar() {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);

    return (
        <NavbarContainer>
            <h1 style={{ color: theme.tertiary }}>Harshit Nagar</h1>

            <NavMenuIcon onClick={handleDrawerOpen} />

            <CustomDrawer anchor="left" open={open} onClose={handleDrawerClose}>
                <IconButton
                    onClick={handleDrawerClose}
                    sx={{ position: 'absolute', right: 20, top: 20, color: theme.primary }}
                >
                    <CloseIcon fontSize="large" />
                </IconButton>

                <br />
                <div onClick={handleDrawerClose}>
                    <Fade left>
                        <NavLink to="/" smooth spy duration={2000}>
                            <DrawerItem>
                                <IoHomeSharp size={24} />
                                <span>Home</span>
                            </DrawerItem>
                        </NavLink>
                    </Fade>

                    <Fade left>
                        <NavLink to="/#about" smooth spy duration={2000}>
                            <DrawerItem>
                                <FaUser size={24} />
                                <span>About</span>
                            </DrawerItem>
                        </NavLink>
                    </Fade>

                    <Fade left>
                        <NavLink to="/#resume" smooth spy duration={2000}>
                            <DrawerItem>
                                <HiDocumentText size={24} />
                                <span>Resume</span>
                            </DrawerItem>
                        </NavLink>
                    </Fade>

                    <Fade left>
                        <NavLink to="/#services" smooth spy duration={2000}>
                            <DrawerItem>
                                <BsFillGearFill size={24} />
                                <span>Services</span>
                            </DrawerItem>
                        </NavLink>
                    </Fade>

                    <Fade left>
                        <NavLink to="/#blog" smooth spy duration={2000}>
                            <DrawerItem>
                                <FaFolderOpen size={24} />
                                <span>Blog</span>
                            </DrawerItem>
                        </NavLink>
                    </Fade>

                    <Fade left>
                        <NavLink to="/#contacts" smooth spy duration={2000}>
                            <DrawerItem>
                                <MdPhone size={24} />
                                <span>Contact</span>
                            </DrawerItem>
                        </NavLink>
                    </Fade>
                </div>
            </CustomDrawer>
        </NavbarContainer>
    );
}

export default Navbar;
