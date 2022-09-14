import React, { useState, useContext } from 'react'
import useFetch from '../hooks/useFetch'
import { inputs_url} from '../utils/constants'

const FormContext = React.createContext()

export const FormProvider = ({ children }) => {
  const initialForm={
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    list: "",
    date: "",
  }
  const [formData, setFormData] = useState(initialForm);
  const {loading, error, data:inputs} =useFetch(inputs_url)
  const [page, setPage] = useState(0);  //który aktualnie formularz
  const [visited, setVisited] = useState(0);  //formularze już przejrzane
  const [leave, setLeave] = useState(false); //uruchamia animacje
  // if (inputs.length) inputs[2].fields[1].pattern=formData.password; //gdy te same passwordy
  const [validation, setValidation] = useState(Array(inputs.length).fill(false));
  const [size, setSize] = useState(0)
  const [warn, setWarn] = useState(false)
  const [check, setCheck] = useState(false)
  const resetForm=()=>{setFormData(initialForm);setValidation([]);setPage(0);setVisited(0)}

  return (
    <FormContext.Provider value={{inputs, loading, error,page, setPage,visited, setVisited,leave, setLeave,formData, setFormData,validation, setValidation,size, setSize,warn, setWarn,check, setCheck, resetForm}}>{children}</FormContext.Provider>
  )
}
export const useFormContext = () => {
  return useContext(FormContext)
}
