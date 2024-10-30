import react from 'react';
import Fullmenu from '@/components/fullMenu';
import Navbar from '@/components/Navbar';
const FullMenu = () =>{
    return (
        <div>
        <Navbar details={{name: "", message: "Full Menu"}}></Navbar>
        <Fullmenu></Fullmenu>
        </div>
       
    );
};

export default FullMenu;