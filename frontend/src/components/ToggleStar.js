import React from 'react'
import { useCartContext } from '../context/cart_context'
import { BsStar, BsStarFill } from "react-icons/bs";


const ToggleStar=({id, inCart, isExamination})=>{
  const { toggleStar } = useCartContext()
  return <p onClick={() => toggleStar(id,isExamination)}>{inCart?<BsStarFill className="star"/>:<BsStar className="star"/>}</p>

};

export default ToggleStar