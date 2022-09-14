import styled from "styled-components";

// form stepper

export const Wrapper = styled.div`
&.stepWrapper{
  display: flex;
  justify-content: center;
  margin: 1.5rem 0 1rem;
  position: relative;
  text-align: center;
  padding-left: 0.8rem;
}
.circle{
  display: grid;
  align-content: center;
  width: 2rem;
  height: 2rem;
  line-height: 1.8rem;
  background-color: var(--clr-med-4);
  color: white;
  border-radius: 50%;
  cursor: pointer;
  margin-bottom: 0.3rem;
}
.circle:hover,.selected .circle:hover{border: solid white;}
.selected .circle{
  color:var(--clr-grey-3);
  background-color: white;
  border: solid var(--clr-med-4);
}
/* .stepBlock{margin: auto;} */
.stepBlock .circleWrapper{
  position: relative;
  padding: 0 2.5rem;

}
.stepBlock:not(:first-child) .circleWrapper::after{
  content: '';
  width: 100%;
  height: 3px;
  background-color: var(--clr-med-4);
  position: absolute;
  top: 0;
  bottom: 0;
  left: -50%;
  margin: auto;
  z-index: -1;
}
/* .stepBlock.selected .circleWrapper::after{height: 2px;} 
.stepBlock.selected ~ .stepBlock .circleWrapper::after{height: 2px;} */

.notVisited .circle{background-color: gray; border: solid gray; cursor: auto;}
.stepBlock.notVisited .circleWrapper::after{background-color: gray;}
.box{width: 8rem;}
.label{width: 6.6rem;color:var(--clr-grey-4);font-size:0.97rem; text-transform:capitalize}
`