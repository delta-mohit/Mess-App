import axios from 'axios';
import {baseURL} from '@/app/constants'
import storeToken from "@/custom-functions/storeToken";
export default async function getUserInfo(rollNumber, password){
    let response;
    const data={
        rollNumber : rollNumber,
        password : password
    }
    let code;
    try{
        response = await axios.post(`${baseURL}/api/user/login`,data);
        code = response.status;
    } catch(e){
        console.log('There is some error in getting User Info from backend');
        code = e.response.status;
    }
    if(code == 200){ //if the crediantials are correct then only it returns true and this condition is true
        await storeToken(response.data.data.token);
    }
    return code;
}