import React from "react";
import {Link} from "react-router-dom";
import {useProductsContext} from "../context/products_context";
import {FaBriefcase, FaTimes} from "react-icons/fa";
import {links} from "../utils/constants";
import styled from "styled-components";
import CartButtons from "./CartButtons";

const Sidebar = () => {
  const {isSidebarOpen, toggleSidebar,packages} = useProductsContext();
  return (
    <SidebarContainer>
      <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
        <div className='sidebar-header'>
          <h3 className="logo">DOVI<span>MED</span></h3>
          <button className='close-btn' type='button' onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map(({id, text, url, links}) => {
            if(text==="packages") links=packages
            return (
              <li key={id}>
                <article className='main'>
                  {text}
                </article>
                <div className='sidebar-sublinks'>
                  {links.map((link, index) => {
                    const {url, icon, label,name} = link;
                    return (
                      <Link className='sublink' key={index} to={url||`/packages/${index+1}`} onClick={toggleSidebar}>
                        {icon||<FaBriefcase />}
                        {label||name}
                      </Link>
                    );
                  })}
                </div>
              </li>
            );
          })}
          <li>
            <Link className='main' to='/products' onClick={toggleSidebar}>
              Examinations
            </Link>
          </li>
          <li>
            <Link className='main' to='/appointment/new/new' onClick={toggleSidebar}>
              Appointment
            </Link>
          </li>
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.2rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-skin-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  /* .logo {
    justify-self: center;
    height: 45px;
  } */
  .logo{
    font-family: 'Kaushan Script', cursive;
    line-height: 3rem;
    margin-bottom: 5px;
    padding-right: 1rem;
    color: var(--clr-grey-2);
    text-shadow: 3px 3px 4px rgba(0,0,0,0.3);
    span {color:#0085D5}
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a, .links article {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }
  .links .main {
    margin-top: 1.5rem;
    padding: 0.5rem 1.5rem 0.5rem;
    font-weight: bold;
    color: var(--clr-med-4);
    width: 50%;
  }
  .links .sublink {
    padding: 0 1.7rem;
    font-size: 0.95rem;
  }

  .links a:hover {
    padding-left: 2rem;
    background: var(--clr-med-8);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
    background: var(--clr-med-9);
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
  .sidebar-sublinks {
    display: grid;
    text-align: center;
    grid-template-columns: 1fr 1fr;
    row-gap: 0.25rem;
  }
  .sidebar-sublinks a {
    display: block;
    color: var(--clr-grey-1);
    text-transform: capitalize;
    display: flex;
    align-items: center;
  }
  .sidebar-sublinks svg {
    color: var(--clr-grey-5);
    margin-right: 1rem;
  }
`;

export default Sidebar;
