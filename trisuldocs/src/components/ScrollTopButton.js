import React, { useEffect, useState } from 'react';

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#064e3b',
          color: 'white',
          border: 'none',
          fontSize: '32px',
          fontWeight: 'bold',
          cursor: 'pointer',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          transition: 'all 0.3s ease',
          transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        }}
      >
        <span
          style={{
            transition: 'transform 0.3s ease',
            transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
          }}
        >
          ⌃
        </span>
      </button>
    )
  );
}