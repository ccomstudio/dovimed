import React,{useEffect} from "react";
import { useFormContext } from "../context/form_context";
import { useProductsContext } from "../context/products_context";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import { useParams } from "react-router-dom";

function Forms({inputs}) {
  const {formData, setFormData} = useFormContext();
  const {products, packages} = useProductsContext();
  const {type,id} = useParams();
  let selectedProduct,selectedPackage
  if(type==="product") {selectedProduct=products.find((prod)=>+prod.id===+id)}
  else if(type==="package") {selectedPackage=packages.find((prod)=>prod.id===+id)}
  const visitName=(selectedProduct&&`${selectedProduct.name}${selectedProduct.age?` (${selectedProduct.age})`:''}`)||(selectedPackage&&`${selectedPackage.name} (package)`)
  useEffect(() => {   //uzupełnianie pola select
    if(visitName) setFormData({...formData, list: visitName})},   
  // eslint-disable-next-line
  [setFormData,visitName])  //  umieszczenie formData blokuje formularz
  
  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };
  return (
    <div className='sign-up-container' >
      {inputs.fields.map((input) => !input?.list.length ? (
              <FormInput key={input.id} {...input} value={formData[input.name]} onChange={onChange}/>
            ) : (
              <FormSelect key={input.id} {...input} value={formData[input.name]} onChange={onChange}/>
            )
      )}
    </div>
  );
}

export default Forms;
