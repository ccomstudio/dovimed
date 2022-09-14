import React,{ useState,useEffect } from "react"
import { useFormContext } from "../context/form_context";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const {setWarn,check} = useFormContext();
  const {id, label, errorMessage, required, pattern,...inputProps } = props;
  const warning = (focused||check)&&!(pattern && new RegExp(pattern.slice(1, -1)).test(props.value))

  useEffect(() => {setWarn(warning)},[warning,setWarn])

  return (
    <div className='formInput'>
    <label>{label}</label>
    <input className={warning?"warning":""}
      {...inputProps}
      onBlur={() => setFocused(true)}
      // onFocus={() =>
      //   inputProps.name === "confirmPassword" && setFocused(true)
      // }
      // wybrany={focused.toString()}  //walidacja css
    />
    <span className={warning?"warning":""}>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
