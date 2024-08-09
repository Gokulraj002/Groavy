import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const WhatsAppWidget = () => {
  const location = useLocation();
  useEffect(() => {
    // Remove the existing script if already added
    const existingScript = document.getElementById('wa-widget');
    if (existingScript) {
      existingScript.remove();
    }
    // Create a new script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://d2jyl60qlhb39o.cloudfront.net/integration-plugin.js';
    script.id = 'wa-widget';
    script.setAttribute('widget-id', 'A0bVBx');
    // Append the script to the body
    document.body.appendChild(script);
    return () => {
      if (script) {
        script.remove();
      }
    };
  }, [location]);
  return null;
};

export default WhatsAppWidget;




