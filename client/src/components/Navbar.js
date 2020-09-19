import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../sass/components/navbar.scss';
import { selectService } from '../actions';
import { connect } from 'react-redux';
import { Menu, Close } from '../components/svgs';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Navbar(props) {
  /*  window.addEventListener('scroll', () => {
    //console.log(window.scrollY);

    let winHeight = window.innerHeight;
    const navbarList = document.getElementsByClassName('navbar')[0];

    //var a = window.scrollY / winHeight;
    if (window.scrollY >= winHeight * 0.65) {
      navbarList.style.backgroundColor = `#005b96`;
    } else {
      navbarList.style.backgroundColor = `transparent`;
    }
  });
 */
  const [page, setpage] = useState(0);
  const [open, setopen] = useState(0);
  const [showmenudiv, setshowmenudiv] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const link = location.pathname;
    switch (link) {
      case '/':
        setpage(0);
        break;
      case '/kontakt':
        setpage(1);
        break;
      case '/konfigurator':
        setpage(2);
        break;
      case '/povezave':
        setpage(3);
        break;
      case '/storitve':
        setpage(4);
        break;
      default:
        return undefined;
    }
  }, [location]);

  useEffect(() => {
    if (window.innerWidth <= 900) {
      setshowmenudiv(true);
    }
  }, []);

  useEffect(() => {
    const li = document.getElementsByTagName('LI');
    if (li !== undefined) {
      li[page].classList.add('currentLink');
      for (var i = 0; i < li.length; i++) {
        if (i !== page) {
          li[i].classList.remove('currentLink');
        }
      }
      if (props.services.selected !== undefined) {
        li[4].classList.add('currentLink');
        for (var x = 0; x < li.length; x++) {
          if (x !== 4) {
            li[x].classList.remove('currentLink');
          }
        }
      }
    }
  });

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      if (newWidth <= 900) {
        setshowmenudiv(true);
      } else {
        setshowmenudiv(false);
      }
    };

    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  const history = useHistory();

  return (
    <div className="navbar">
      <div className="navbar__imgdiv" onClick={() => history.push('/')}>
        <img src="/images/zdpilogo.png" alt="logo" />
      </div>
      {showmenudiv && (
        <div className="openclose">
          {open === 1 ? (
            <div onClick={() => setopen(2)}>
              <Close />
            </div>
          ) : open === 2 ? (
            <div onClick={() => setopen(1)}>
              <Menu />
            </div>
          ) : (
            <div onClick={() => setopen(1)}>
              <Menu />
            </div>
          )}
        </div>
      )}
      <ul
        className={
          open === 1 && showmenudiv
            ? 'openMenu'
            : open === 2 && showmenudiv
            ? 'closeMenu'
            : open === 2 && showmenudiv
            ? 'closeMenuRedirect'
            : 'ulclass'
        }
      >
        <li className="currentLink">
          <Link
            to="/"
            onClick={() => {
              setpage(0);
              props.selectService(undefined);
              setopen(3);
            }}
          >
            Domov
          </Link>
        </li>
        <li>
          <Link
            to="/kontakt"
            onClick={() => {
              setpage(1);
              props.selectService(undefined);
              setopen(3);
            }}
          >
            Kontakt
          </Link>
        </li>
        <li>
          <Link
            to="/konfigurator"
            onClick={() => {
              setpage(2);
              props.selectService(undefined);
              setopen(3);
            }}
          >
            Konfigurator
          </Link>
        </li>
        <li>
          <Link
            to="/povezave"
            onClick={() => {
              setpage(3);
              props.selectService(undefined);
              setopen(3);
            }}
          >
            Povezave
          </Link>
        </li>
        <li
          onClick={() => {
            props.selectService(undefined);
            setpage(4);
            setopen(3);
          }}
        >
          <Link to="/storitve">Storitve</Link>
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = ({ services }) => {
  return {
    services,
  };
};

export default connect(mapStateToProps, { selectService })(Navbar);
