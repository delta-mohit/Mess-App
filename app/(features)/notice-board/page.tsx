import React from "react";
import Notice from "@/components/Notice"
import Navbar from "@/components/Navbar";
const page = () => {
  return(
    <>
    <Navbar details={{name:"", message: "NOTICE BOARD"}}></Navbar>
    {/* Display Notices below */}
    <div className="w-full space-y-10 mt-10" >
      <Notice></Notice>
      <div className="divider"></div>
      <Notice></Notice>
      <div className="divider"></div>
      <Notice></Notice>
      <div className="divider"></div>
      <Notice></Notice>
      <div className="divider"></div>
      <Notice></Notice>
    </div>
    
    </>
  )

};

export default page;
