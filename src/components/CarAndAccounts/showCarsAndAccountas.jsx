import React, { useState, useEffect } from "react";
import CreateTable from '../createTable'
import './carAndAcc.css'

function ShowCarsAndAccountas({backendActor}){
    const [stories, setStories] = useState([])
    const [visible0, setVisible0] = useState(0)
    const [search, setSearch] = useState("")
    const [getting, setGetting] = useState(false);
    const tableHeader0 =["email","plateNo","datePaidCarInsur","amountPaidOfInsur","expiryDateOfRadioInsur",
                            "datePaidRadioInsur","expiryDateOfInsur","amountPaidOfRadioInsur"]
    const tableHeader1=["email", "plateNo", "dateOfService", "costOfService", "servicedAt"]
    const tableHeader2=["email", "plateNo", "fuelCardPaymentDay", "fuelCardType", "fuelCardAmount"]
    const tableHeader3=["email", "plateNo", "zinaraPaymentDate", "zinaraExpiryDate", "zinarPaymentsAmount"]
    function getTable({data, title, table}){
        return(
            <div>
                <div>
                <p style={{marginRight:"30vh", paddingRight:"50px"}}> The Cars And {title} </p>
                    <form>
                        <label>SearchValue</label>
                        <input name="search" value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="enter the value" />
                        <button>Search</button>
                    </form> 
                </div>
                <div>
                    <CreateTable data={data} tableHeader={table} />
                </div>
            </div>
        )
    }
    
    return(
        <div>
            <div className="btns flexSB">
                <i><button onClick={() => setVisible0(0)}>get carsInsurance</button></i>   
                <i><button onClick={() => setVisible0(1)}>get carsServices</button></i>   
                <i><button onClick={() => setVisible0(2)}>get carsFuels</button> </i>  
                <i><button onClick={() => setVisible0(3)}>get carsZinaras</button> </i>
            </div>
            <div className={ visible0 == 0 ? "show" : "hide"}>
                <div >
                    <p style={{marginRight:"55vh", paddingLeft:"70px"}}> The Cars And Insurance </p>
                        <form>
                            <label>SearchValue</label>
                            <input name="search" value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="enter the value" />
                            <button>Search</button>
                        </form> 
                </div>
                <div>
                        <CreateTable data={stories} tableHeader={tableHeader0} />
                </div>
            </div>
            <div className={visible0 == 1 ? "show" : "hide"}>
                <div >
                    <p style={{marginRight:"55vh", paddingLeft:"70px"}}> The Cars And Services </p>
                        <form>
                            <label>SearchValue</label>
                            <input name="search" value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="enter the value" />
                            <button>Search</button>
                        </form> 
                </div>
                <div>
                        <CreateTable data={stories} tableHeader={tableHeader1} />
                </div>
            </div>
            <div className={visible0 == 2 ? "show" : "hide"}>
                <div >
                    <p style={{marginRight:"55vh", paddingLeft:"70px"}}> The Cars And Fuel </p>
                        <form>
                            <label>SearchValue</label>
                            <input name="search" value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="enter the value" />
                            <button>Search</button>
                        </form> 
                </div>
                <div>
                        <CreateTable data={stories} tableHeader={tableHeader2} />
                </div>
            </div>
            <div className={visible0 == 3 ? "show" : "hide"}>
                <div >
                    <p style={{marginRight:"55vh", paddingLeft:"70px"}}> The Cars And Zinara </p>
                        <form>
                            <label>SearchValue</label>
                            <input name="search" value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="enter the value" />
                            <button>Search</button>
                        </form> 
                </div>
                <div>
                        <CreateTable data={stories} tableHeader={tableHeader3} />
                </div>
            </div>
        </div>
    )
}
export default ShowCarsAndAccountas