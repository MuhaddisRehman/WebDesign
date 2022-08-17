import React from 'react'
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";



export const SidebarData = [ 
    {
        title:"Portfolio",
        path:"/Portfolio", 
        icon:<FaIcons.FaMicrosoft/>,
        cName:"nav-text"
    }
    ,
    {
        title:"About",
        path:"/About",
        icon:<BsIcons.BsFillPersonFill/>,
        cName:"nav-text"
    },
    {
        title:"Contact",
        path:"/Contact",
        icon:<GrIcons.GrMail/>,
        cName:"nav-text"
    }



]
