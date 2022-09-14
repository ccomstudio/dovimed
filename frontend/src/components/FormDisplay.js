import React,{useEffect,useRef} from "react";
import { useCartContext } from "../context/cart_context";
import { useFormContext } from "../context/form_context";
import Forms from "./Forms";


const FormDisplay = ({index, position}) => {
  const ref=useRef();
  const {page, setPage, inputs, leave, setLeave, formData, validation, visited, setVisited, setSize,size, warn, setWarn,check, setCheck} = useFormContext();
  const { addAppointment } = useCartContext()

  useEffect(() => {
    let height=ref.current.getBoundingClientRect().height
    if(size<height) {setSize(height);setWarn(false)}
  },[warn,size,setSize,setWarn])

  return (
    <article ref={ref} className={`form-container ${position} ${position === "active" && leave === true ? "in" : ""}` } >
      <div className='header'>
        {/* <h4>{inputs[index].step}</h4> */}
      </div>
      <div className='body'>
        <Forms inputs={inputs[index]}/>
      </div>
      <div className='footer'>
        <button
          className={`btn ${index === 0 ? "hidden" : ""}`}
          disabled={index === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
            setLeave(true);
          }}>
          Prev
        </button>
        <button
          className={`btn ${!validation[index] ? "grey" : ""}`}
          onClick={() => {
            if (!check) setCheck(true)
            if (index === inputs.length - 1 && validation[index]) {
              setCheck(false)
              addAppointment(Date.now()/1000|0,formData)
              setPage((curr) => curr + 1);
            } else if (validation[index]) {
              setCheck(false)
              setPage((curr) => curr + 1);
              if (visited === page) setVisited((curr) => curr + 1);
              setLeave(false);
            } 
          }}>
          {index === inputs.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </article>
  );
};


export default FormDisplay;
