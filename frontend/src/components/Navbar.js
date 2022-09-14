import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {FaBars,FaCaretDown} from "react-icons/fa";
import {Link} from "react-router-dom";
import {links} from "../utils/constants";
import CartButtons from "./CartButtons";
import {useProductsContext} from "../context/products_context";

const Navbar = () => {
  const {toggleSidebar, openSubmenu, closeSubmenu} = useProductsContext()
  const [showNav, setShowNav] = useState(true);
  const [navShade, setNavShade] = useState(false);
  const container = useRef();
  const displaySubmenu = (e) => {
    const page = e.currentTarget.querySelector('p').textContent;  
    const tempBtn = e.currentTarget.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, {center, bottom});
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("nav-link")) {
      closeSubmenu();
    }
  };

  let last = 0;
  const scroll = () => {
    const curr = window.pageYOffset;
    if (curr < 5) {
      setNavShade(false); //body.classList.remove("scroll-up");
    } else if (curr < 90 || (curr < last - 2 && container.current.classList.contains("scroll-down"))) {
      //pokazywanie
      setShowNav(true); // body.classList.remove("scroll-down");
      setNavShade(true); // body.classList.add("scroll-up");
    } else if (curr > last + 1 && !container.current.classList.contains("scroll-down")) {
      //chowanie
      setNavShade(false); // body.classList.remove("scroll-up");
      setShowNav(false); // body.classList.add("scroll-down");
    }
    last = curr;
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
    // eslint-disable-next-line
  }, [last]); //dodanie funkcji scroll zamyka menu

  return (
    <NavContainer className={`nav ${showNav ? "" : "scroll-down"} ${navShade ? "scroll-up" : ""}`} onMouseOver={handleSubmenu} ref={container}>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <h3 className="logo">DOVI<span>MED</span></h3>
          </Link>
          <button type='button' className='nav-toggle' onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const {id, text, url} = link;
            return (
              <li key={id} className="link-container nav-link" onMouseOver={displaySubmenu}>
                <div to={url} >
                  {/* {text} */}
                  <p className="nav-link">{text}</p>
                <FaCaretDown/>
                </div>
              </li>
            );
          })}
            <li>
              <Link className="simple" to='/products'>examinations</Link>
            </li>
            <li>
              <Link className="simple" to='/appointment/new/new'>appointment</Link>
            </li>
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 1;
  transition: all 300ms;
  background: white;
  &.scroll-down {
    transform: translate(0, -100%);
  }
  &.scroll-up {
    box-shadow: var(--dark-shadow);
    height: 3.5rem;
    /* background: transparent; */
  }

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin-right: 1rem; */
    img {
      width: 175px;
      /* margin-left: -1.2rem; */
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-med);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  p.nav-link{margin-bottom:0;}
  .cart-btn-wrapper {
    display: none;
  }
  .logo{
    font-family: 'Kaushan Script', cursive;
    font-size: 2.2rem;
    line-height: 3rem;
    margin-bottom: 5px;
    padding-right: 1rem;
    color: var(--clr-grey-2);
    text-shadow: 3px 3px 4px rgba(0,0,0,0.3);
    span {color:#0085D5}
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      width: 95vw;
      display: grid;
      grid-template-columns: auto 1fr 19.5rem;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        position: relative;
        margin-left: 0 0.2rem;
        color: var(--clr-grey-3);
      }
      a,div {
        color: var(--clr-grey-3);
        font-size: 1.05rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        margin: 0 0.4rem;
      }
      .link-container{
        padding-right: 1.2rem
      }
      .simple:hover{
        border-bottom: 2px solid var(--clr-med-7);
      }
      svg{
        position:absolute;
        font-size: 1.2rem;
        top: 13%;
        right: 0.1rem;
        padding-right: 0.5rem;
        pointer-events: none;
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Navbar;
