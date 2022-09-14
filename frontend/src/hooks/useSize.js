import { useEffect, useState } from 'react'

const useSize=()=>{
  const [width, setWidth] = useState(window.innerWidth)
  // innerHeight
  useEffect(() => {
    const update =()=>setWidth(window.innerWidth)
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
    };
  },[]); 
  return {width}
};

export default useSize