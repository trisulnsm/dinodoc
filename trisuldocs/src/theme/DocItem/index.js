import React, { useState, useEffect } from 'react';
import DocItem from '@theme-original/DocItem';
import AdminGuideTour from '@site/src/components/AdminGuideTour';
import { useLocation } from '@docusaurus/router';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const TOUR_KEY = 'admin_system_requirements_tour_seen';

export default function DocItemWrapper(props) {
  const location = useLocation();
  const [showTour, setShowTour] = useState(false);

  // 🔑 Run ONCE per page load
  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) return;

    const hasSeen = localStorage.getItem(TOUR_KEY) === 'true';
    const isTargetPage = location.pathname.endsWith('/system-requirements');

    if (isTargetPage && !hasSeen) {
      setShowTour(true);
    }
  }, []); // ❗ empty dependency array

  return (
    <>
      {showTour && (
        <AdminGuideTour onFinish={() => setShowTour(false)} />
      )}

      <DocItem {...props} />
    </>
  );
}

