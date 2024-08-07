// src/schemas/HomeSchema.js
export const realEstateAgentSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Groavy Buildcon - Real Estate Company",
    "image": "https://www.groavy.com/static/media/logo%20size.9f4e86d3a280099f4b58.png",
    "@id": "",
    "url": "https://www.groavy.com/",
    "telephone": "6366829999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "183, 2nd Floor, North, Sahakara Nagar Main Rd, opposite Reliance Trends, G Block, Sahakar Nagar, Byatarayanapura",
      "addressLocality": "Bengaluru",
      "postalCode": "560092",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.063612,
      "longitude": 77.590278
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:30",
      "closes": "18:30"
    },
    "sameAs": [
      "https://www.facebook.com/GroavyBuildcon/",
      "https://x.com/groavy37933",
      "https://www.instagram.com/groavy.buildcon/",
      "https://www.youtube.com/@groavybuildcon",
      "https://www.linkedin.com/company/103567741/admin/dashboard/",
      "https://www.groavy.com/"
    ]
  };
  