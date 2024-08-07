// src/Analytics.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-T6X4MJSN59'; // Your Google Analytics 4 Measurement ID
const ADS_CONVERSION_ID = 'AW-16458676935'; // Your Google Ads Conversion ID

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize(GA_MEASUREMENT_ID);

    // Google Tag Manager
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l !== "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-5XWM5NKG");

    // Google Ads Conversion Tracking
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

    // AMP Analytics
    const scriptAMP = document.createElement('script');
    scriptAMP.async = true;
    scriptAMP.setAttribute('custom-element', 'amp-analytics');
    scriptAMP.src = "https://cdn.ampproject.org/v0/amp-analytics-0.1.js";
    scriptAMP.style.display = 'none';
    document.head.appendChild(scriptAMP);

    const ampAnalytics = document.createElement('amp-analytics');
    ampAnalytics.setAttribute('type', 'gtag');
    ampAnalytics.setAttribute('data-credentials', 'include');
    ampAnalytics.innerHTML = `
      <script type="application/json">
        {
          "vars": {
            "gtag_id": "${GA_MEASUREMENT_ID}",
            "config": {
              "${GA_MEASUREMENT_ID}": {
                "groups": "default"
              }
            }
          },
          "triggers": {}
        }
      </script>
    `;
    ampAnalytics.style.display = 'none'; 
    document.body.appendChild(ampAnalytics);

    // Facebook Pixel
    (function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
   
    window.fbq('init', '2207331599665801');
    window.fbq('track', 'PageView');

    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });

  }, [location]);

  return null;
};

export default Analytics;