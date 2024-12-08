import React, { } from "react";
import{
  FaBook,
  FaThList,
  FaFileInvoiceDollar,
  FaFileInvoice,
  FaUser
}from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar =({children}) =>{
  const menuItem=[
    {
      path:"/",
      name:"Dashboard",
      icon:<FaThList/>
    },
    {
      path:"/customer",
      name:"Customer",
      icon:<FaUser/>
    },
    {
      path:"/inventory",
      name:"Inventory",
      icon:<FaFileInvoice/>
    },
    {
      path:"/order",
      name:"Order",
      icon:<FaFileInvoiceDollar/>
    },
    {
      path:"/report",
      name:"Report",
      icon:<FaBook/>
    }
    
  ]
  return (
      <div className="container">
        <div className="sidebar">
          <div className="top_section">
          <h1 className="logo" style={{ fontFamily: "Audiowide, serif" }}>TVS</h1>
            </div>
            {
              menuItem.map((item,index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                 <div className="icon">{item.icon}</div>
                 <div className="link_text">{item.name}</div>
                </NavLink>
              ))
            } 
             
        </div>
        <main>{children}</main> 
      </div>
    );
};

export default Sidebar;
