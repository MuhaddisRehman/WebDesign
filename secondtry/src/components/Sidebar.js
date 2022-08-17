
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../components/Sidebar.css';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from './SidebarData';
import {IconContext} from 'react-icons'

function Sidebar() {
    const [sidebar, setSidebar]=useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return (
    <>
    <IconContext.Provider value={{color:"white"}}>
        <div className="navbar sticky-top">
            <NavLink to="#" className='menu-bars' >
                <FaIcons.FaBars onClick ={showSidebar}/>
            </NavLink>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-itmes" onClick={showSidebar}>
                <li className="navbar-toggle">
                    <Link to="#" className='menu-bars'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {SidebarData.map ((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <NavLink to={item.path} >
                                {item.icon}
                                <span>{item.title}</span>
                            </NavLink>
                        </li>
                    );
                }
                )
                }
            </ul>
        </nav>
        </IconContext.Provider>
    </>
  )
}

export default Sidebar