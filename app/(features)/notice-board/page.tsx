import React from "react";
import Notice from "@/components/Notice"
import Navbar from "@/components/Navbar";
import axios from "axios";
import { baseURL } from "@/app/constants";
import { accessToken } from "@/custom-functions/getTokenFromCookies";
const page = async () => {
  let response;
  let notices = [];
  try{
    response = await axios.get(`${baseURL}/api/noticeboard`,{
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    notices = response?.data.data;
  }catch(e){
    console.log("Error in getting notices");
  }
  return(
    <>
    <Navbar details={{name:"", message: "NOTICE BOARD"}}></Navbar>
    {/* Display Notices below */}
    <div className="w-full space-y-10 mt-10" >
      {notices.map((notice:any,index:any)=>(
        <div key={index}>
        <Notice item={notice}/>
        <div className="divider"></div>
        </div>
      ))}
    </div>
    
    </>
  )

};

export default page;
