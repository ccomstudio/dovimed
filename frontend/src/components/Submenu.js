import React, {useState, useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {useProductsContext} from "../context/products_context";

const Submenu = () => {
  let {
    isSubmenuOpen, closeSubmenu,
    page: {text, links},
    location, packages
  } = useProductsContext();
  if(text==="packages") links=packages
  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");
  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const {center, bottom} = location;
    if (isSubmenuOpen) {
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom+3}px`;
    } /* else {
      submenu.style.left = null;
      submenu.style.top = null;
    } */
    
    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
    if(text==="packages"){
      setColumns("col-2")
    }
    // eslint-disable-next-line
  }, [isSubmenuOpen, text, location, links]); // isSubmenuOpen wyłącza transition
  return (
    <Wrapper className={`${isSubmenuOpen ? 'show' : ''}`} ref={container} onMouseLeave={closeSubmenu}>
      <section>
        <h4>{text}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const {url, icon, label, name,image} = link;
            return (
              <Link key={index} to={url||`/packages/${index+1}`}>
                {icon||<div><img src={image} alt={name}/></div>}
                {label||name}
              </Link>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

export default Submenu;

const Wrapper = styled.aside`
  background: var(--clr-grey-11);
  box-shadow: var(--dark-shadow);
  position: fixed;
  /* top: 4rem; */
  /* left: 50%; */
  transform: translateX(-50%) scale(0);
  z-index: 3;
  /* display: none; */
  padding: 1rem 1.7rem;
  border-radius: var(--radius);
  transition: var(--transition), opacity 0.3s ease-in;
  opacity: 0;
  transform-origin: 50% 0%;
  
::before {
  content: '';
  display: block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid var(--clr-white);
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
}

&.show {
  /* display: block; */
  opacity: 1;
  transform: translateX(-50%) scale(1);
}

.submenu-center {
  display: grid;
  gap: 1rem 2rem;
}
.col-2 {
  grid-template-columns: repeat(2, auto);
}
.col-3 {
  grid-template-columns: repeat(3, auto);
}
.col-4 {
  grid-template-columns: repeat(4, auto);
}
h4 {
  margin-bottom: 1.1rem;
  font-size: 1.05rem;
  color: var(--clr-med-4);
  padding-left: 0.5rem;
  /* text-align: center; */
}
.submenu-center a {
  color: var(--clr-grey-4);
  /* width: 8rem; */
  font-size: 0.95rem;
  display: block;
  text-transform: capitalize;
  display: flex;
  align-items: center;
}
.submenu-center svg {
  font-size: 1.1rem;
  margin-right: 0.5rem;
}
.submenu-center div {
  height: 3rem;
  width: 4.5rem;
  margin-right: 0.5rem;
  overflow: hidden;
}
.submenu-center img{
  height: 3rem;
  width:100%;
  object-fit: cover;
}
`;
