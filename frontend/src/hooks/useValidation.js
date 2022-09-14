import React, {useState} from 'react'

const useValidation=(pattern)=>{
  const [focused, setFocused] = useState(false);

  const warning = focused&&!(pattern && new RegExp(pattern.slice(1, -1)).test(props.value))

  return {setFocused,warning}
};

export default useValidation