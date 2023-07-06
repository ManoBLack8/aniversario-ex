import React, { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-276768194-1';
      script.async = true;
      document.body.appendChild(script);
    };

    const initGoogleAnalytics = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'UA-276768194-1');
    };

    loadScript();
    initGoogleAnalytics();
  }, []);

  return null; // ou renderize algum conteúdo se necessário
};

export default GoogleAnalytics;
