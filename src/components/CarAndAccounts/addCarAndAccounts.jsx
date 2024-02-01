import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './carAndAcc.css'

function AddCarAndAccounts({backendActor}){
    const [visible0, setVisible0] = useState(0)
    const [email, setEmail] = useState('')
    const [plateNo, setPlateNo] = useState('')
    const [garage, setGarage] = useState('')
    const [company, setCompany] = useState('')
    const [fuelCardType, setFuelCardType] = useState('')
    const [fuelCardPaymentDay, setFuelCardPaymentDay] = useState('')
    const [fuelCardAmount, setFuelCardAmount] = useState('')
    const [dateOfService, setDateOfService] = useState('')
    const [costOfService, setCostOfService] = useState('')
    const [datePaidCarInsur, setDatePaidCarInsur] = useState('')
    const [amountPaidOfInsur, setAmountPaidOfInsur] = useState('')
    const [expiryDateOfInsur, setExpiryDateOfInsur] = useState('')
    const [zinaraPaidDate, setZinaraPaidDate] = useState('')
    const [zinarPaymentsAmount, setZinarPaymentsAmount] = useState('')
    const [zinarExpiryDate, setZinarExpiryDate] = useState('')
    const [datePaidRadioInsur, setDatePaidRadioInsur] = useState('')
    const [amountPaidOfRadioInsur, setAmountPaidOfRadioInsur] = useState('')
    const [expiryDateOfRadioInsur, setExpiryDateOfRadioInsur] = useState('')
    
    return(
        <section >
            <div className="btns flexSB">
                <i><button onClick={() => setVisible0(0)}>get carsInsurance</button></i>   
                <i><button onClick={() => setVisible0(1)}>get carsServices</button></i>   
                <i><button onClick={() => setVisible0(2)}>get carsFuels</button> </i>  
                <i><button onClick={() => setVisible0(3)}>get carsZinaras</button> </i>
            </div>
                <div >
                <div className={ visible0 == 2 ? "show" : "hide"}>
                <p style={{marginRight:"55vh", paddingLeft:"70px"}}>Add Car And fuel details</p>
                    <form >
                        <fieldset>
                            <label>The car : </label>
                            <input type='text' name = 'plateNo' placeholder = "enter car" value = {plateNo} onChange = {(e) => setPlateNo(e.target.value)} style={{marginLeft:"48vh"}}/><br />
                            <label>Accountant : </label>
                            <input type='email' name = 'email' placeholder = "enter accountant" value = {email} onChange = {(e) => setEmail(e.target.value)} style={{marginLeft:"44vh"}}/><br />
                            <label>Fuel Card Type : </label>
                            <input type='text' name = 'fuelCardType' placeholder = "enter fuel Card Type" value = {fuelCardType} onChange = {(e) => setFuelCardType(e.target.value)} style={{marginLeft:"40vh"}}/><br /> 
                            <label>fuel Card Payment Day : </label>
                            <input type='text' name = 'fuelCardPaymentDay' placeholder = "enter fuel Card Payment Day" value = {fuelCardPaymentDay} onChange = {(e) => setFuelCardPaymentDay(e.target.value)} style={{marginLeft:"31vh"}}/><br />
                            <label>fuel Card Amount : </label>
                            <input type='text' name = 'fuelCardAmount' placeholder = "enter fuel Card Amount" value = {fuelCardAmount} onChange = {(e) => setFuelCardAmount(e.target.value)} style={{marginLeft:"38vh"}}/><br />
                            <button className="primary-btn">Submit</button>
                        </fieldset>
                    </form>
                </div>
                <div className={ visible0 == 1 ? "show" : "hide"}>
                <p style={{marginRight:"55vh", paddingLeft:"70px"}}>Add Car And Service details</p>
                    <form >
                        <fieldset>
                            <label>The car : </label>
                            <input type='text' name = 'plateNo' placeholder = "enter car" value = {plateNo} onChange = {(e) => setPlateNo(e.target.value)} style={{marginLeft:"38vh"}} /><br />
                            <label>Accountant : </label>
                            <input type='email' name = 'email' placeholder = "enter accountant" value = {email} onChange = {(e) => setEmail(e.target.value)} style={{marginLeft:"34vh"}} /><br />
                            <label>The Garage : </label>
                            <input type='text' name = 'garage' placeholder = "enter garage" value = {garage} onChange = {(e) => setGarage(e.target.value)} style={{marginLeft:"33vh"}} /><br />
                            <label>The Company : </label>
                            <input type='text' name = 'company' placeholder = "enter company" value = {company} onChange = {(e) => setCompany(e.target.value)} style={{marginLeft:"31vh"}} /><br />
                            <label>date Of Service : </label>
                            <input type='date' name = 'dateOfService' placeholder = "enter date Of Service" value = {dateOfService} onChange = {(e) => setDateOfService(e.target.value)} style={{marginLeft:"30vh"}} /><br />
                            <label>cost Of Service : </label>
                            <input type='text' name = 'costOfService' placeholder = "enter cost Of Service" value = {costOfService} onChange = {(e) => setCostOfService(e.target.value)} style={{marginLeft:"31vh"}}/><br />
                            <button className="primary-btn">Submit</button>
                        </fieldset>
                    </form>
                </div>
                <div className={ visible0 == 3 ? "show" : "hide"}>
                <p style={{marginRight:"55vh", paddingLeft:"70px"}}>Add Car And ZINARA details</p>
                    <form >
                        <fieldset>
                            <label>The car : </label>
                            <input type='text' name = 'plateNo' placeholder = "enter car" value = {plateNo} onChange = {(e) => setPlateNo(e.target.value)} style={{marginLeft:"41vh"}} /><br />
                            <label>Accountant : </label>
                            <input type='email' name = 'email' placeholder = "enter accountant" value = {email} onChange = {(e) => setEmail(e.target.value)} style={{marginLeft:"37vh"}} /><br />
                            <label>zinara Paid Date : </label>
                            <input type='date' name = 'zinaraPaidDate' placeholder = "enter zinara Paid Date" value = {zinaraPaidDate} onChange = {(e) => setZinaraPaidDate(e.target.value)} style={{marginLeft:"31vh"}} /><br />
                            <label>zinara Payment Amount : </label>
                            <input type='zinarExpiryDate' name = 'zinarPaymentsAmount' placeholder = "enter zinara Payments Amount" value = {zinarPaymentsAmount} onChange = {(e) => setZinarPaymentsAmount(e.target.value)} style={{marginLeft:"23vh"}} /><br />
                            <label>zinara Expiry Date : </label>
                            <input type='datet' name = 'zinarExpiryDate' placeholder = "enter zinara Expiry Date" value = {zinarExpiryDate} onChange = {(e) => setZinarExpiryDate(e.target.value)} style={{marginLeft:"30vh"}} /><br />
                            <button className="primary-btn">Submit</button>
                        </fieldset>
                    </form>
                </div>
                <div className={ visible0 == 0 ? "show" : "hide"}>
                <p style={{marginRight:"50vh", paddingLeft:"70px"}}>Add Car And Insurance details</p>
                    <form >
                        <fieldset>
                            <label>The car : </label>
                            <input type='text' name = 'plateNo' placeholder = "enter car" value = {plateNo} onChange = {(e) => setPlateNo(e.target.value)} style={{marginLeft:"50vh"}} /><br />
                            <label>Accountant : </label>
                            <input type='email' name = 'email' placeholder = "enter accountant" value = {email} onChange = {(e) => setEmail(e.target.value)} style={{marginLeft:"46vh"}} /><br />
                            <label>date Paid Car Insur : </label>
                            <input type='date' name = 'datePaidCarInsur' placeholder = "enter date Paid Car Insur" value = {datePaidCarInsur} onChange = {(e) => setDatePaidCarInsur(e.target.value)} style={{marginLeft:"37vh"}} /><br />
                            <label>Amount Paid Of Insur : </label>
                            <input type='text' name = 'amountPaidOfInsur' placeholder = "enter amountPaidOfInsur" value = {amountPaidOfInsur} onChange = {(e) => setAmountPaidOfInsur(e.target.value)} style={{marginLeft:"35vh"}}/><br />
                            <label>expiry Date Of Insur : </label>
                            <input type='date' name = 'expiryDateOfInsur' placeholder = "enter expiry Date Of Insur" value = {expiryDateOfInsur} onChange = {(e) => setExpiryDateOfInsur(e.target.value)} style={{marginLeft:"37vh"}} /><br />
                            <label>date Paid Radio Insur : </label>
                            <input type='date' name = 'datePaidRadioInsur' placeholder = "enter accountant" value = {datePaidRadioInsur} onChange = {(e) => setDatePaidRadioInsur(e.target.value)} style={{marginLeft:"35vh"}} /><br />
                            <label>amount Paid Of Radio Insur : </label>
                            <input type='email' name = 'amountPaidOfRadioInsur' placeholder = "enter amount Paid Of Radio Insur" value = {amountPaidOfRadioInsur} onChange = {(e) => setAmountPaidOfRadioInsur(e.target.value)} style={{marginLeft:"28vh"}} /><br />
                            <label>expiry Date Of Radio Insur : </label>
                            <input type='date' name = 'expiryDateOfRadioInsur' placeholder = "enter expiryDateOfRadioInsur" value = {expiryDateOfRadioInsur} onChange = {(e) => setExpiryDateOfRadioInsur(e.target.value)} style={{marginLeft:"30vh"}} /><br />
                            <button className="primary-btn">Submit</button>
                        </fieldset>
                    </form>
                </div>
                
        </div>
        </section>
    )
}
export default AddCarAndAccounts