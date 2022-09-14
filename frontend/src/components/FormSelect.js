import React,{useState,useEffect} from "react";
import { useFormContext } from "../context/form_context";
import { useProductsContext } from "../context/products_context";

const FormSelect = (props) => {
  const [focused, setFocused] = useState(false);
  const {setWarn,check} = useFormContext();
  const {products,packages} = useProductsContext();
  const {id, label, errorMessage, list, required, pattern,...inputProps} = props;
  const warning = (focused||check)&&!(pattern && new RegExp(pattern.slice(1, -1)).test(props.value))

  useEffect(() => {setWarn(warning)},[warning,setWarn]) //dla pozycji footera
  
  const productNames=products.map((prod)=>`${prod.name}${prod.age?` (${prod.age})`:''}`)
  .sort((a, b) => {return a.localeCompare(b)}) //posortowana lista produktów
  const packageNames=packages.map((pack)=>`${pack.name} (package)`)
  const names=[...productNames,...packageNames]
  return (
    <div className='formInput'>
    <label>{label}</label>
    <select
      className={`option ${warning?"warning":""}`}
      {...inputProps} 
      onBlur={() => setFocused(true)} 
      // wybrany={focused.toString()}  //walidacja css
      onFocus={() => setFocused(false)}>
        <option value=''>-- select one --</option>
        {names.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
    </select>
    <span className={warning?"warning":""}>{errorMessage}</span>
    </div>
  );
};

export default FormSelect;




















// z wypenionym polem

// const FormSelect = (props) => {
//   const [focused, setFocused] = useState(false);
//   const {id, label, errorMessage, list, value, ...inputProps} = props;
//   const {id: productID} = useParams();
//   const {products} = useProductsContext();
//   const product=products.find(prod=>{return+productID===prod.id})
//   const name=product?.name
//   let names=null
//   if(!name) {names=products.map((prod) => {
//       return `${prod.name}${prod.age ? ` (${prod.age})` : ""}`;
//     })
//     .sort((a, b) => {
//       return a.localeCompare(b);
//     });}
//     return (
//     <div className='formInput'>
//       <label>{label}</label>
//       <select {...inputProps} onBlur={() => setFocused(true)} wybrany={focused.toString()}>
//         <option className='option' value={name?name:''}>{name?name:'-- select one --'}</option>
//         {names&&names.map((item, i) => (
//           <option className='option' key={i} value={item}>
//             {item}
//           </option>
//         ))}
//       </select>
//       <span>{errorMessage}</span>
//     </div>
//   );
// };

// export default FormSelect;
