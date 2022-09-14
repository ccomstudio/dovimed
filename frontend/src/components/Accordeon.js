import React, {useState} from "react";
import AccordeonProduct from "./AccordeonProduct";
import styled from "styled-components";

function Accordeon({packProducts}) {
  const [opened, setOpened] = useState([]); //lista otwartych
  const toggle = (i) => {
    if (opened.length === 1) setOpened([]); //zamyka wcześniejsze
    // if (opened.length > 1) setOpened((state) => {state.shift();return state;}); //zamyka nadwyżkę
    if (opened.includes(i)) return setOpened(opened.filter((el) => el !== i)); //zamyka ten sam
    setOpened((opened) => [...opened, i]); //dodaje nowy
  };
  const allID = packProducts.map((el) => el.id);
  return (
    <Wrapper className='section-center section'>
      <div className='title'>
        <header className="title-box">
          <h3>Included Examinations</h3>
        </header>
        <div className='underline'></div>
      </div>
        <article className="items">
          <div>
            <span className="view" onClick={() => (opened.length > 1 ? setOpened([]) : setOpened(allID))}>{opened.length > 1 ? "hide" : "show"} all</span>
          </div>
          {packProducts.map((product) => {
            return <AccordeonProduct key={product.id} opened={opened} toggle={toggle} {...product}></AccordeonProduct>;
          })}
        </article>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  margin: auto;
  .title {
    text-align: left;
  }
  .title-box{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    color: var(--clr-grey-2);
  }
  .underline {
    margin-left: 0;
  }
  .items {
    margin-top: 2rem;
background: var(--clr-skin-10);
padding: 1rem 2rem 2rem;
border-radius:var(--radius);
  }
  .items>div{
    margin-bottom: 1rem;
    text-align: right;
  }
  .items .view{
    cursor: pointer;
    border-bottom: solid 2px var(--clr-med-6);
    margin-right: 1.5rem;
  }
  .view {font-size:1.2rem; font-weight:bold}
`;

export default Accordeon;
