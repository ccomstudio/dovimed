import React, {useEffect} from "react";
import {Wrapper} from "../styles/FormStyles";
import {Error, Loading, PageHero} from "../components";
import FormDisplay from "../components/FormDisplay";
import Stepper from "../components/Stepper";

import { useFormContext } from "../context/form_context";

const AppointmentForm = () => {
  const{inputs, loading, error, page, setPage, validation, setValidation, formData, setLeave, visited, size,setCheck, resetForm}=useFormContext()

  useEffect(() => {   //validacja na samym przycisku
    if (!inputs.length) return;
    const val = [...validation];
    const errorField = inputs[page]?.fields.find((input) => {
      return input.pattern && !new RegExp(input.pattern.slice(1, -1)).test(formData[input.name]);
    });
    if (!errorField && !validation[page]) {
      val[page] = true;
      setValidation(val);
      setCheck(null)
    } else if (errorField && validation) {
      val[page] = false;
      setValidation(val);
    }
    // eslint-disable-next-line
  }, [formData, page, inputs, setCheck,setValidation]); //validation zapętla

  useEffect(() => {  //czyszczenie po opuszczeniu strony
    return () => {
      resetForm()
    }
    // eslint-disable-next-line
  }, []) //dodanie resetForm czyści formularz

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <main>
      <PageHero title='Make Appointment' />
      <Wrapper className='page'>
        <Stepper inputs={inputs} page={page} setPage={setPage} setLeave={setLeave} visited={visited} />
        <form className='form' style={{height: `${size+10}px`}} onSubmit={handleSubmit}>
          {inputs.map((_, index) => {
            let position;
            if (index === page) {
              position = "active";
            } else if (index > page) {
              position = "pending";
            } else {
              position = "sent";
            }
            return <FormDisplay key={index} index={index} position={position} />;
          })}
          <div className={"final"+(page===0?" hidden":"")}>
            <h4>Your form has been submitted.</h4>
            <h4>We will contact you shortly.</h4>
          </div>
        </form>
      </Wrapper>
    </main>
  );
};
export default AppointmentForm;


  /* <div className="progressbar">
<div
  style={{ width: `${100/((page+1)*inputs.length)}%` }}
></div>
</div> */
