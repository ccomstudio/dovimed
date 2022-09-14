import React from "react";
import { Wrapper } from "../styles/Stepper";

const Stepper = ({inputs, page, setPage, setLeave, visited}) => {
  const choice=(index) => {
    if(index>visited) return;
    if(index<page){setLeave(true)}  //animacja
    else {setLeave(false)}
    setPage(index)
  }
  
  return (
    <Wrapper className='stepWrapper'>
      {inputs.map((item, index) => (
        <div key={index} className={"stepBlock" + (page === index ? " selected" : "")+(index > visited ? " notVisited" : "")}>
          <div className='circleWrapper' onClick={()=>choice(index)}>
            <div className={'circle'}>{index + 1}</div>
          </div>
          <div className="box">
            <div className="label">{item.step}</div>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default Stepper;

