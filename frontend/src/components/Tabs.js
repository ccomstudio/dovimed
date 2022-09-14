import React, { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import styled from "styled-components";

function Tabs({features}) {
  const jobs = features;
  const [value, setValue] = useState(0);
  const { subject, list } = jobs[value];
  return (
    <Wrapper className="">
      <div className="tabs section-center section">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`tab-btn ${index === value ? 'active-btn':''}`}
              >
                {item.subject}
              </button>
            );
          })}
        </div>
        <article className="tab-info">
          <h3>{subject}</h3>
          {list.map((duty, index) => {
            return (
              <div key={index} className="tab-desc">
                <FaAngleDoubleRight className="tab-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  background: var(--clr-grey-10);

@media screen and (min-width: 992px) {
  .section {
    width: 95vw;
  }
}

.underline {
  width: 5rem;
  height: 0.25rem;
  margin-bottom: 1.25rem;
  background: var(--clr-skin-5);
  margin-left: auto;
  margin-right: auto;
}
.title {
  margin-bottom: 4rem;
  text-align: center;
}

/*
=============== 
Tabs
===============
*/

.tabs {

}
.btn-container {
  display: flex;
}
.tab-btn:first-child {
  border-top-left-radius: 0.5rem;
}
.tab-btn:last-child {
  border-top-right-radius: 0.5rem;
}
.tab-btn {
  background: var(--clr-grey-5);
  border-color: transparent;
  text-transform: uppercase;
  padding: 1rem 0.5rem;
  font-size: 1.25rem;
  letter-spacing: var(--spacing);
  /* margin: 0 0.5rem; */
  transition: var(--transition);
  cursor: pointer;
  line-height: 1;
  outline-color: var(--clr-skin-10);
}
.tab-btn:hover {
  color: var(--clr-med-6);
}
.active-btn {
  color: var(--clr-med-6);
  background: var(--clr-white);
}
.tab-info{
  padding: 2rem 1.5rem; 
  background: var(--clr-white);
  border-radius: 0.5rem;
  border-top-left-radius: 0rem;
}

.tab-info h3 {
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  color: var(--clr-grey-5);
  background: var(--clr-grey-9);
  display: inline-block;
  padding: 0.375rem 0.75rem;
  border-radius: var(--radius);
}
.tab-date {
  letter-spacing: var(--spacing);
}
.tab-desc {
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2rem;
  align-items: center;
  margin-bottom: 1.25rem;
}
.tab-desc p {
  margin-bottom: 0;
  color: var(--clr-grey-3);
}
.tab-icon {
  color: var(--clr-grey-5);
}
@media screen and (min-width: 992px) {
  .tabs {
    display: grid;
    grid-template-columns: auto 1fr;
  }
  .btn-container {
    flex-direction: column;
    justify-content: flex-start;
  }
  .tab-btn {
    flex: 0 0 0;
  }
  .tab-btn:last-child {
    border-top-right-radius: 0rem;
    border-bottom-left-radius: 0.5rem;
  }
}
.btn {
  text-transform: uppercase;
  background: var(--clr-skin-5);
  color: var(--clr-skin-9);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  font-weight: 700;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
  display: block;
  width: 12rem;
  text-align: center;
  margin: 0 auto;
  margin-top: 3rem;
}
.btn:hover {
  color: var(--clr-skin-1);
  background: var(--clr-skin-8);
}

`;

export default Tabs;