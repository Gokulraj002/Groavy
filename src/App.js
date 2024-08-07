import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Layout from './Component/Header/Layout';
import Homes from './Component/Home/Homes';
import NoPage from './Component/NoPage/NoPage';
import About from './Component/About/About';
import Service from './Component/Service/Service';
import Contact from './Component/Contact/Contact';
import Eligentpage from './Component/Projects/Eligent/Eligentpage';
import PrivacyPolicy from './Component/Policies/PrivacyPolicy';
import TermsAndConditions from './Component/Policies/TermsConditions';
import Blog from './Component/Media/Blogs/Blog';
import News from './Component/Media/News/News';
import TimberValley from './Component/Projects/TimberValley/TimberValley';
import ElegantBlog from './Component/Media/Blogs/ReadMoreBlogs/ElegantBlog';
import MahoganyBlog from './Component/Media/Blogs/ReadMoreBlogs/Mahogany';
import SandalwoodBlogs from './Component/Media/Blogs/ReadMoreBlogs/SandalwoodBlog3';
import FourthBlog from './Component/Media/Blogs/ReadMoreBlogs/FourthBlog';
import CareerHome from './Component/Careers/CareerHome';
import Analytics from './Analytics';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
      <Analytics />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homes />} />
            <Route path="about" element={<About />} />
            <Route path="elegantorchards" element={<Eligentpage />} />
            <Route path="timbervalley" element={<TimberValley />} />
            <Route path="service" element={<Service />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="news" element={<News />} />
            <Route path="careers" element={<CareerHome />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blogs/grow-your-future-benefits-of-owning-managing-farmland" element={<ElegantBlog />} />
            <Route path="blogs/elegantorchards-embraces-green-growth-with-mahoganytrees" element={<MahoganyBlog />} />
            <Route path="blogs/invest-in-sandalwood-on-your-farm-with-elegant-orchards-estate" element={<SandalwoodBlogs />} />
            <Route path="blogs/farmland-vs-mutual-funds-which-offers-better-investment-returns" element={<FourthBlog />} />
            <Route path="privacypolicies" element={<PrivacyPolicy />} />
            <Route path="termsandcondition" element={<TermsAndConditions />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
