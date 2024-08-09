import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-T6X4MJSN59'; // Your Google Analytics 4 Measurement ID
const ADS_CONVERSION_ID = 'AW-16458676935'; // Your Google Ads Conversion ID
const GTM_ID = 'GTM-5XWM5NKG'; // Your Google Tag Manager ID

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics only if not already initialized
    if (!window.gaInitialized) {
      ReactGA.initialize(GA_MEASUREMENT_ID);
      window.gaInitialized = true;
    }

    // Initialize Google Tag Manager only if not already initialized
    if (!window.gtmInitialized) {
      (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l !== "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", GTM_ID);
      window.gtmInitialized = true;
    }

    // Initialize Google Ads Conversion Tracking only if not already initialized
    if (!window.adsInitialized) {
      const scriptGAds = document.createElement('script');
      scriptGAds.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${ADS_CONVERSION_ID}');
        gtag('event', 'conversion', {
          'send_to': '${ADS_CONVERSION_ID}/qXdsCKHd8r0ZEMf1jag9',
          'value': 1.0,
          'currency': 'INR'
        });
      `;
      scriptGAds.style.display = 'none';
      document.head.appendChild(scriptGAds);
      window.adsInitialized = true;
    }

    

    // Track page view with Google Analytics
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });

  }, [location]);

  return null;
};

export default Analytics;
