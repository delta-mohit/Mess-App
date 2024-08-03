import React from 'react'
import Navbar from '@/components/Navbar';
import Person from '@/components/Person';
import Dada from '@/components/Dada';
const Messstaff = () => {
  const details = {
      name: '',
      message : 'MESS STAFF'
    };
  return (
    <>
    {/* This is Navbar */}
    <Navbar details = {details}/>
    {/* Warden */}
    <div className="warden mt-12">
      <p className='text-center text-purple-700 text-3xl font-semibold'>MESS WARDEN</p>
      <div className='grid grid-cols-1 justify-items-center mt-8'>
        <div className='w-3/4'>
          <div className='flex flex-col justify-center items-center shadow-xl shadow-slate-500 p-4'>
            <img src='/static/images/image.png' className='w-3/4 h-auto'></img>
            <p className='text-center text-xl font-medium mb-4'>Prof. Mahendra Reddy Vanteru</p>
            <p>mahendra@iitkgp.ac.in</p>
          </div>
        </div>
      </div>
    </div>
    {/* General Secretary */}
    <div className="gsec mt-20">
      <p className='text-center text-purple-700 text-3xl font-semibold '>GENERAL SECRETARY</p>
      <div className='grid grid-cols-2 gap-5 justify-items-center mt-8'>
        <Person name='Mohit Saini' contact='+91 8209052781'/>
        <Person name='Mohit Saini' contact='+91 8209052781'/>
      </div>
    </div>
    {/* Secretary  */}
    <div className="secys mt-20">
      <p className='text-center text-purple-700 text-3xl font-semibold'>SECRETARY</p>
      <div className='grid grid-cols-2 gap-5 justify-items-center mt-8'>
        <Person name='Mohit Saini' contact='+91 8209052781'/>
        <Person name='Mohit Saini' contact='+91 8209052781'/>
        <Person name='Mohit Saini' contact='+91 8209052781'/>
        <Person name='Mohit Saini' contact='+91 8209052781'/>
      </div>
    </div>
    {/* Manager & Supervisor  */}
    <div className="manager-supervsior mt-20">
      <p className='text-center text-purple-700 text-3xl font-semibold'>Manager & Supervisor</p>
      <div className='grid grid-cols-2 gap-5 justify-items-center mt-8'>
        <Person name='Mohit Saini' contact='+91 8209052781'/>
        <Person name='Mohit Saini' contact='+91 8209052781'/>
      </div>
    </div>
    {/* Mess Staff  */}

    <div className="workers mt-20">
      <p className='text-center text-purple-700 text-3xl font-semibold'>MESS STAFF</p>
      <div className='mt-8'>
        <Dada/>
      </div>
    </div>

    </>
  )
}

export default Messstaff;