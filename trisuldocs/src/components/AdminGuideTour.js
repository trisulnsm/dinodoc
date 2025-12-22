import React, { useState, useEffect } from 'react';

const TOUR_KEY = 'admin_system_requirements_tour_seen';

export default function AdminGuideTour() {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);

  // 🔐 Read ONCE
  useEffect(() => {
    if (localStorage.getItem(TOUR_KEY) !== 'true') {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const steps = [
    {
      text: 'LEFT SIDE MENU: Use this to navigate admin sections.',
      arrow: 'left',
      position: 'left',
    },
    {
      text: 'RIGHT SIDE MENU: Table of Contents to jump within the page.',
      arrow: 'right',
      position: 'right',
    },
  ];

  const current = steps[step];

  const handleNext = () => {
    if (step === steps.length - 1) {
      localStorage.setItem(TOUR_KEY, 'true');
      setVisible(false);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <>
      <div className="tour-scrim" />
      <div
        className={`tour-bubble tour-pos-${current.position}`}
        data-arrow={current.arrow}
      >
        <p>{current.text}</p>
        <button onClick={handleNext}>
          {step === steps.length - 1 ? 'Got it' : 'Next'}
        </button>
      </div>
    </>
  );
}

