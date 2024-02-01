import { Link } from 'react-router-dom'
import React, { useState } from "react"; 
import  "./navBar.css"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { GrUserWorker } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";
import { PiGameController } from "react-icons/pi";
import { GiHumanPyramid } from "react-icons/gi";

function NavBar(){
    const [sideNav, setSideNav] = useState(false)
    return(
            <div>
                <header>
                    <nav className="flexSB">
                        <ul className="flexSB">
                                <li><Link to="addCar">Add Car</Link></li> 
                                <li><Link to="addDriverAndAccountant">Add Driver and Accountant</Link></li> 
                                <li><Link to="addCarAndAccounts">Add Car And Accounts</Link></li> 
                                <li><Link to="addUser">Add User</Link></li> 
                                <li><Link to="addCarAndDriver">Add Car And Driver</Link></li> 
                                <li><Link to="addEmpsAndCars" >Add Employes And Cars</Link></li> 
                                <li><Link to="addDriverAndHR" >Add Driver And HR</Link></li> 
                            
                        </ul>
                    </nav>
                    
                </header>
                
                <div className='n-wrapper'>
                    <div className='n-container'>
                        <div onClick={() => setSideNav(!sideNav)} className='icon'>
                            <AiOutlineMenu size={35} />
                        </div>
                    </div>
                    {
                        sideNav ? (
                            <div className="nav-bar" onClick={() => setSideNav(!sideNav)}>

                            </div>
                        ) : (
                            ""
                        )
                    }
                    <div className={sideNav ? "side-bar-closed" : "side-bar-open"}>
                    {/* <AiOutlineClose size={25} onClick={() => setSideNav(!sideNav)} className='close' /> */}
                        <div className="nav">
                        <h2>More <span>Control</span> </h2>
                            <nav>
                                <ul>
                                    <li><Link to="showCars"> <FaHome size={30} className='icon' /> Home</Link></li> 
                                    <li><Link to="showUsers"> <FaUsers size={30} className='icon' /> Show Users</Link></li> 
                                    <li><Link to="showCarsAndAccountas"> <FaCarSide size={30} className='icon' /> Show Cars And Accounts</Link></li> 
                                    <li><Link to="showDriverAndAccounts"> <MdAccountBalance size={30} className='icon' /> Show Driver And Accounts</Link></li> 
                                    <li><Link to="showEmpsAndCar"> <GrUserWorker size={30} className='icon' /> Show Employes And Car</Link></li> 
                                    <li><Link to="showCarAndDriver"> <PiGameController size={30} className='icon' /> Show Car And Driver</Link></li> 
                                    <li><Link to="showDriverAndHR"> <GiHumanPyramid size={30} className='icon' /> Show Driver And HR</Link></li> 
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default NavBar
