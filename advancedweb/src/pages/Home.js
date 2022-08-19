import React, { useState } from 'react'
import '../pages/Home.css'
function Dashboard() {
  const [isActive, setIsActive] = useState(true);
  const [isActive1, setIsActive1] = useState(false);

  const [isActive2, setIsActive2] = useState(false);

  const handleClick = () =>{
    setIsActive(true);
    setIsActive1(false);
    setIsActive2(false);
    };
    const handleClick1 = () =>{
      setIsActive(false);
      setIsActive1(true);
      setIsActive2(false);
      };
      const handleClick2 = () =>{
        setIsActive(false);
        setIsActive1(false);
        setIsActive2(true);
        };
  return (
    <div className='container  me-5 '>
      <div className="col-lg-12 row cardContainer">
        <div style={ {backgroundColor: isActive ?'#F1416C' : '', color: isActive ? 'white': '',}} className="col-lg-3 col-md-12 card hoverColor1" onClick={handleClick}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z" fill="currentColor"></path>
													<path opacity="0.3" d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z" fill="currentColor"></path>
													<path opacity="0.3" d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z" fill="currentColor"></path>
        </svg>
        <div className='mt-4 mb-2'><h4>Shopping Cart</h4></div>
        <div><small>Lands, Houses, Ranchos, Farms</small></div>

        </div>
        <div style={ {backgroundColor: isActive1 ?'#009ef7' : '', color: isActive1 ? 'white': '',}} className="col-lg-3 col-md-12 card hoverColor2" onClick={handleClick1}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path opacity="0.3" d="M18 21.6C16.3 21.6 15 20.3 15 18.6V2.40001C15 2.20001 14.6 1.99996 14.3 2.19996L13 3.59999L11.7 2.3C11.3 1.9 10.7 1.9 10.3 2.3L9 3.59999L7.70001 2.3C7.30001 1.9 6.69999 1.9 6.29999 2.3L5 3.59999L3.70001 2.3C3.40001 2.1 3 2.20001 3 3.40001V18.6C3 20.3 4.3 21.6 6 21.6H18Z" fill="currentColor"></path>
													<path d="M12 12.6H11C10.4 12.6 10 12.2 10 11.6C10 11 10.4 10.6 11 10.6H12C12.6 10.6 13 11 13 11.6C13 12.2 12.6 12.6 12 12.6ZM9 11.6C9 11 8.6 10.6 8 10.6H6C5.4 10.6 5 11 5 11.6C5 12.2 5.4 12.6 6 12.6H8C8.6 12.6 9 12.2 9 11.6ZM9 7.59998C9 6.99998 8.6 6.59998 8 6.59998H6C5.4 6.59998 5 6.99998 5 7.59998C5 8.19998 5.4 8.59998 6 8.59998H8C8.6 8.59998 9 8.19998 9 7.59998ZM13 7.59998C13 6.99998 12.6 6.59998 12 6.59998H11C10.4 6.59998 10 6.99998 10 7.59998C10 8.19998 10.4 8.59998 11 8.59998H12C12.6 8.59998 13 8.19998 13 7.59998ZM13 15.6C13 15 12.6 14.6 12 14.6H10C9.4 14.6 9 15 9 15.6C9 16.2 9.4 16.6 10 16.6H12C12.6 16.6 13 16.2 13 15.6Z" fill="currentColor"></path>
													<path d="M15 18.6C15 20.3 16.3 21.6 18 21.6C19.7 21.6 21 20.3 21 18.6V12.5C21 12.2 20.6 12 20.3 12.2L19 13.6L17.7 12.3C17.3 11.9 16.7 11.9 16.3 12.3L15 13.6V18.6Z" fill="currentColor"></path>
												</svg>
        <div className='mt-4 mb-2'><h4>Appartments</h4></div>
        <div><small>Flats, Shared Rooms, Duplex</small></div>
        </div>
        <div style={ {backgroundColor: isActive2 ?'#40CD89' : '', color: isActive2 ? 'white': '',}} className="col-lg-3 col-md-12 card hoverColor3" onClick={handleClick2}>
    
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.3" d="M14 12V21H10V12C10 11.4 10.4 11 11 11H13C13.6 11 14 11.4 14 12ZM7 2H5C4.4 2 4 2.4 4 3V21H8V3C8 2.4 7.6 2 7 2Z" fill="currentColor"></path>
            <path d="M21 20H20V16C20 15.4 19.6 15 19 15H17C16.4 15 16 15.4 16 16V20H3C2.4 20 2 20.4 2 21C2 21.6 2.4 22 3 22H21C21.6 22 22 21.6 22 21C22 20.4 21.6 20 21 20Z" fill="currentColor"></path>
          </svg>
        <div className='mt-4 mb-2'><h4>Sales Stats</h4></div>
        <div><small>40% Increased for FY20</small></div>
        </div>
        <div className=" col-lg-3 col-md-12 card">
          <div className="header"><h4>Sales Overview</h4></div>
          <div className="graph">
          <canvas id="myChart"></canvas>
          </div>
        </div>
        <div className=" col-lg-3 col-md-12 card"></div>
        <div className=" col-lg-3 col-md-12 card"></div>
      </div>
    </div>
  )
}

export default Dashboard
