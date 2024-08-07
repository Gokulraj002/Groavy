import React, { Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import Loader from './Component/Loader';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS
 
const App = React.lazy(() => import('./App'));
 
const root = ReactDOM.createRoot(document.getElementById('root'));
 
const AppWithLoaderDelay = () => {
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Duration of animations in milliseconds
      once: true, // Whether animations should happen only once
    });
 
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // 800 milliseconds = 0.8 seconds
 
    return () => clearTimeout(timer);
  }, []);
 
  return (
    <Suspense fallback={<Loader />}>
      {isLoading ? <Loader /> : <App />}
    </Suspense>
  );
};
 
root.render(<AppWithLoaderDelay />);
 
 