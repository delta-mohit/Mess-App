"use server"
import { cookies } from "next/headers"
export default async function getCookie(){
    const check = cookies().has('accessToken');
    if(check){
        return true;
    }else{
        return false;
    }
}
