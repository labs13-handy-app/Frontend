import React from 'react';
import HeaderImage from '../../../img/HeaderImage.svg';

const Header = () => {
  return (
    <header>
      <div className="intro-logo jumbo-bg">
        {/* <h2>Welcome to handyApp</h2> */}
        <h3>Find the people with the skills you need...</h3>
        <img className="header-img" src={HeaderImage} alt="" />
        <div className="intro-button">
          <div className="intro-button">
            <a href="#/">Get Started</a>
          </div>
        </div>
        {/* <div className="company-icons">
          <span className="company-icons__item">
            <i className="fab fa-apple" />
            app store
          </span>
          <span className="company-icons__item">
            <i className="fab fa-google-play" />
            google play
          </span>
          <span className="company-icons__item">
            <i className="fab fa-windows" />
            windows
          </span>
        </div> */}
      </div>

      <style>{`
        header {
          margin-bottom: 1rem;
          height: 100vh;
        }
        .intro-logo {
          display: flex;
          position: absolute;
          top: 5em;
          bottom: 0;
          left: 0;
          right: 0;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          text-align: center;
        }

        .intro-logo h2 {
          font-size: 1.8em;
          font-weight: 900;
          font-family: 'Philosopher', sans-serif;
          color: var(--brand-color);
          border: 1px solid red; 
        }
        @media (min-width: 768px) {
          .intro-logo h2 {
            font-size: 3.5em;
            margin-top:10px;
          }
        }
        .intro-logo h3 {
          font-size: 1rem;
          font-weight: 500;
          color: var(--gray-color-1);
          // color: var(--brand-color);
          margin-bottom: 3em;
        }

        .intro-logo img {
          max-width: 95%;
          height: auto;
        }
        .company-icons__item + .company-icons__item {
          margin-left: 1rem;
        }
        @media (min-width: 575px) {
          .company-icons__item + .company-icons__item {
            margin-left: 2rem;
          }
        }
        .company-icons__item i {
          margin-right: 5px;
        }
        .intro-button {
          margin-top: 2.3em;
          margin-bottom: 3em;
        }
        .intro-button a {
          padding: 0.65em 2.6em;
          border-radius: 20px;
          color: var(--brand-color);
          border: 1.8px solid var(--brand-color);
          background: white;
          transition: all 0.5s;
        }
        .intro-button a:hover {
          background-color: var(--brand-color);
          color: white;
        }

        .company-icons {
          color: var(--gray-color-2);
          font-size: 0.95em;
        }
        .company-icons__item {
          transition: all 0.5s;
        }
        .company-icons__item:hover {
          color: var(--brand-color);
          cursor: pointer;
        }
        .header-img {
          width: 668px;
          height: 398px;
     
          // border: 1px solid red;
        }
      `}</style>
    </header>
  );
};

export default Header;
