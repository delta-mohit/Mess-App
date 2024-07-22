import Navbar from '@/components/Navbar';
import react from 'react';
import Suggest from '@/components/Suggest';
const Suggestion = ()=>{
    const details = {
      name : "",
      message : "Suggest Food Items"
  };
    return(
        <>
        <Navbar details={details}/>
        <Suggest/>
        </>
    );
};

export default Suggestion;