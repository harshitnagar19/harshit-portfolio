import React, { useState, useEffect } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import { styled } from '@mui/material/styles';

const BackToTopButton = styled('button')(({ theme }) => ({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  zIndex: 1000,
  '& svg': {
    fontSize: '3rem',
    color: '#eaeaea', // Tertiary color
  },
}));

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return visible ? (
    <BackToTopButton onClick={scrollToTop} aria-label="Back to top">
      <IoIosArrowDropupCircle />
    </BackToTopButton>
  ) : null;
}

export default BackToTop;
