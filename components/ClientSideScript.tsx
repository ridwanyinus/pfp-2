'use client';

import { useEffect } from 'react';
import schemaData from '@/components/schema';

const ClientSideScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default ClientSideScript;
