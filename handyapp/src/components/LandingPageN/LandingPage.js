import React from 'react';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
//import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

function LandingPage(props) {
  if (localStorage.token && localStorage.account_type === 'homeowner') {
    const id = localStorage.getItem('userID');
    props.history.push(`/dashboard-homeowner/users/${id}/projects`);
  } else if (localStorage.token && localStorage.account_type === 'contractor') {
    props.history.push(`/dashboard-contractor/projects`);
  }
  return (
    <div className="app-wrapper">
      <Header />
      <Section1 />
      <Section2 />
      {/* <Section3 /> */}
      <Section4 />
      <Section5 />
      <style>{`
        .app-wrapper {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
            'Segoe UI Emoji', 'Segoe UI Symbol';
          font-size: 14px;
          --brand-color: #71c55d;
          --gray-color-1: #777;
          --gray-color-2: #555;
          // box-shadow: none;
        }
        a {
          color: inherit;
        }
        a:hover {
          text-decoration: none;
        }
        .jumbo-bg {
          background: transparent;
          background-image: url(https://bootstrapmade.com/demo/themes/eStartup/img/hero-bg.png);
          background-repeat: no-repeat;
          background-position: center bottom;
          background-size: 100%;
        }
        @media (min-width: 1024px) {
          .jumbo-bg {
            background-attachment: fixed;
            
          }
        }
      `}</style>
    </div>
  );
}

export default LandingPage;
