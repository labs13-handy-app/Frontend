import React, {Component} from 'react';
import {Container, Nav, NavItem, NavLink} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

class MobileMenu extends Component {
  state = {isOpen: false};

  toggle = () => this.setState({isOpen: !this.state.isOpen});

  render() {
    return (
      <div className="mobile-wrapper">
        <div className="mobile-menu">
          <Container className="pos-ref">
            <i
              className="fas fa-times mobile-menu__close-bt"
              onClick={this.props.hideNav}
            />
          </Container>
        </div>
        <Nav vertical className={'mobile-nav'}>
          <NavItem className="nav-item-m">
            <NavLink href="/">home</NavLink>
          </NavItem>
          {/* ================================================================= */}
          {/* When the User is not logged in. */}
          {!localStorage.token && (
            <NavItem className="nav-item-m">
              <NavLink onClick={this.props.login}>
                login
              </NavLink>
            </NavItem>
          )}
          {/* ================================================================= */}
          {/*  When the User is logged in */}
          {localStorage.token && (
            <NavItem className="nav-item-m">
              <NavLink onClick={this.props.logout}>
                logout
              </NavLink>
            </NavItem>
          )}
        </Nav>

        <style>
          {`
            .mobile-wrapper {
              display: none;
            }
            .mobile-menu {
              display: none;
              z-index: 2;
              position: fixed;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              background-color: hsla(0, 9.1%, 2.2%, 0.7);
            }
            .mobile-menu .mobile-menu__close-bt {
              position: absolute;
              font-size: 1.6rem;
              color: white;
              right: 1.3rem;
              top: 1rem;
              cursor: pointer;
              z-index: 1;
            }

            .pos-ref {
              position: relative;
            }

            .mobile-nav {
              position: fixed;
              left: 0;
              width: 250px;
              padding-top: 1.6rem;
              align-items: strech;
              background-color: hsl(216, 13%, 15%);
              transition: all 1s;
              transform: translate(-100%);
              height: 100%;
              z-index: 2;
            }
            .nav-item-m {
              cursor: pointer;
              color: white;
              font-size: 14px;
              text-transform: capitalize;
            }
            .nav-item-m a {
              width: 100%;
              text-align: left;
            }
            .drop-menu {
              width: 100%;
            }
            .drop-item {
              width: 100%;
              text-align: left;
              padding: 0.5rem 1rem;
              color: white;
              background: inherit;
              border: none;
              font-size: 14px;
            }
            .drop-item:hover {
              background-color: transparent;
            }
            .drop-item:after {
              position: absolute;
              right: 1rem;
              top: 1rem;
            }
            .drop-menu  {
              display: block;
            }
          `}
        </style>
      </div>
    );
  }
}

export default class extends Component {
  dropNav = React.createRef();

  hamButton = React.createRef();

  over = () => {
    this.dropNav.current.style.display = 'block';
    this.opacityTiemOut = setTimeout(() => {
      this.dropNav.current.style.opacity = '1';
    });
  };
  out = () => {
    this.dropNav.current.style.transition = 'all .5s 1s';
    this.dropNav.current.style.opacity = '0';
  };
  onHide = () => {
    if (this.dropNav.current.style.opacity === '1') return;
    this.dropNav.current.style.display = 'none';
    this.dropNav.current.style.transition = 'all .5s';
  };

  hideNav = e => {
    document.body.style.overflow = 'visible';
    this.mobileMenu.style.display = 'none';
    this.hamButton.style.display = '';
    this.mobileNav.style.transform = `translateX(-100%)`;
  };

  showNav = e => {
    e.preventDefault();
    document.body.style.overflow = 'hidden';
    this.hamButton.style.display = 'none';
    this.menuWrapper.style.display = 'block';
    this.mobileMenu.style.display = 'block';
    setTimeout(() => {
      this.mobileNav.style.transform = 'translateX(0px)';
    }, 200);
  };
  fixedNav() {
    const nav = document.querySelector('.navi-menu');
    const navHeigth = parseInt(window.getComputedStyle(nav).height, 10);
    const scrollEl = document.scrollingElement;
    if (scrollEl.scrollTop > navHeigth) {
      nav.style.position = 'fixed';
      nav.classList.add('scroll-nav');
    } else {
      nav.style.position = 'static';
      nav.classList.remove('scroll-nav');
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.fixedNav);
    this.menuWrapper = document.querySelector('.mobile-wrapper');
    this.mobileMenu = document.querySelector('.mobile-menu');
    this.mobileNav = document.querySelector('.mobile-nav');
    this.hamButton = document.querySelector('.ham');
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.fixedNav);
  }
  render() {
    console.log(this.props);
    return (
      <div className="app-wrapper">
        <div className="navi-menu">
          <Container>
            <MobileMenu hideNav={this.hideNav} />

            <Nav className="nav-n">
              <NavItem className="nav-item-n logo">
                <NavLink href="/">handyApp</NavLink>
              </NavItem>
              <NavItem className="nav-item-n ham" onClick={this.showNav}>
                <NavLink href="">
                  <i className="fas fa-bars" />
                </NavLink>
              </NavItem>
              <NavItem className="nav-item-n">
                <NavLink href="/">home</NavLink>
              </NavItem>
              {/* ================================================================= */}
              {/* When the User is not logged in. */}
              {!localStorage.token && (
                <NavItem className="nav-item-n">
                  <NavLink onClick={this.props.login}>login</NavLink>
                </NavItem>
              )}
              {/* ================================================================= */}
              {/*  When the User is logged in */}
              {localStorage.token && (
                <NavItem className="nav-item-n">
                  <NavLink onClick={this.props.logout}>logout</NavLink>
                </NavItem>
              )}
            </Nav>
          </Container>
          <style>{`
         .app-wrapper {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
            'Segoe UI Emoji', 'Segoe UI Symbol';
          font-size: 14px;
          --brand-color: #71c55d;
          --gray-color-1: #777;
          --gray-color-2: #555;
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
      
          .scroll-nav {
            background: white;
            width: 100%;
            z-index: 4;
            box-shadow: #e1dfdf 1px 1px 11px;
          }
          .nav-n {
            align-items: center;
          }
          .nav-item-n {
            display: none;
            font-size: 14px;
            cursor: pointer;
            
          }
          .nav-item-n:not(.logo) {
            text-transform: capitalize;
          }
          .nav-item-n a {
            padding: 0.5rem 0.6rem;
            color: inherit;
          }
          .nav-item-n:not(.ham):not(.logo):hover {
            color: var(--brand-color);
          }
          .logo {
            font-family: 'Philosopher', sans-serif;
            font-size: 2em;
          }
          .logo:first-letter {
            color: var(--brand-color);
          }
          @media (min-width: 1024px) {
            .nav-item-n {
              display: block;
            }
          }
          .logo,
          .ham {
            display: block;
          }
          .ham {
            margin-left: auto;
            font-size: 1.4rem;
          }
          @media (min-width: 1024px) {
            .ham {
              display: none;
            }
            .logo {
              margin-right: auto;
            }
          }

          .drop {
            position: relative;
          }
          .drop__item {
            position: absolute;
            display: none;
            transition: all 0.5s;
            width: 200px;
            padding: 0.5rem 0;
            opacity: 0;
            box-shadow: 0px 0px 20px 0px #f1f1f1d1, 0px 0px 20px 0px #ffffff2b;
            z-index: 3;
          }
          .drop__item .nav {
            align-items: flex-start;
          }
          .drop__item a {
            padding: 0.65rem 1.3rem;
          }
          .caret:after {
            content: '';
            display: inline-block;
            vertical-align: middle;
            margin-left: 5px;
            width: 5px;
            height: 5px;
            border: none;
            border-left: 2px solid;
            border-bottom: 2px solid;
            transform: rotate(-45deg);
          }
        `}</style>
        </div>
      </div>
    );
  }
}
