import Navbar from '@/components/Navbar';
import react from 'react';
import Suggest from '@/components/Suggest';
const Suggestion = ()=>{
    const details = {
      name : "",
      message : "Suggest Dish"
  };
    return(
        <>
        <Navbar details={details}/>
        {/* <Suggest/> */}
        <div className='h-96 w-auto flex items-center justify-center'>
            <p className='text-5xl font-semibold text-purple-700'>Coming Soon....</p>
        </div>
        </>
    );
};

export default Suggestion;