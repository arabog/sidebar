import "./navbar.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../sidebarData/SidebarData"
import { IconContext } from "react-icons"


function Navbar() {
          const [ sidebar, setSidebar ] = useState(false)

          const showSidebar =() => setSidebar(!sidebar)

          return (
                    <div>
                              <IconContext.Provider value={{color: "#fff"}}>

                                        <div className="navbar">
                                                  <Link  to="#" className="menu-bars">
                                                            <FaIcons.FaBars onClick={showSidebar} />
                                                  </Link>
                                        </div>


                                        <nav className={sidebar ? "nav-menu active" : 'nav-menu'}>
                                                  <ul className="nav-menu-items" onClick={showSidebar}>
                                                            <li className="navbar-toggle">
                                                                      <Link to="#" className="menu-bars">
                                                                                <AiIcons.AiOutlineClose />
                                                                      </Link>
                                                            </li>

                                                            {
                                                                      SidebarData.map((item, index) => {
                                                                                return (
                                                                                          <li key ={index} className= {item.cName} >
                                                                                                    <Link to = {item.path} > 
                                                                                                              {item.icon}

                                                                                                              <span>{item.title}</span>
                                                                                                    </Link>
                                                                                          </li>
                                                                                )
                                                                      })
                                                            }
                                                  </ul>
                                        </nav>

                              </IconContext.Provider>
                    </div>

          )
}

export default Navbar

// npm install react-icons --save

// https://react-icons.github.io/react-icons/

/* import { FaBars } from "react-icons/fa";
 { <FaBars /> }

// or
import * as FaIcons from "react-icons/fa";
{ <FaIconsFaBars /> } */