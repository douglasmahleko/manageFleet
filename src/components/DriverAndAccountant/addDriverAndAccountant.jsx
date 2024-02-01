import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";


function AddDriverAndAccountant({backendActor}){
  
    const [accountant, setAccountant] = useState('')
    const [signedBy, setSignedBy] = useState('')
    const [purposeOfMoney, setPurposeOfMoney] = useState('')
    const [amountGiven, setAmountGiven] = useState('')
    const [driver, setDriver] = useState('')

    return(
        <div>
            <p style={{marginRight:"30vh"}}>Add the driver and accountant details</p>
            <form >
            <fieldset style={{height:"50vh"}}>
                <label>Accountant : </label>
                <input type='text' name = 'accountant' placeholder = "enter accountant" value = {accountant} onChange = {(e) => setAccountant(e.target.value)} style={{marginLeft:"33vh"}} /><br />
                <label>Signed By : </label>
                <input type='text' name = 'signedBy' placeholder = "enter signee" value = {signedBy} onChange = {(e) => setSignedBy(e.target.value)} style={{marginLeft:"34vh"}} /><br /> 
                <label>Purpose Of Money : </label>
                <input type='text' name = 'purposeOfMoney' placeholder = "enter purpose Of Money" value = {purposeOfMoney} onChange = {(e) => setPurposeOfMoney(e.target.value)} style={{marginLeft:"24vh"}} /><br />
                <label>Amount Given : </label>
                <input type='text' name = 'amountGiven' placeholder = "enter amount Given" value = {amountGiven} onChange = {(e) => setAmountGiven(e.target.value)} style={{marginLeft:"30vh"}} /><br />
                <label>Driver : </label>
                <input type='text' name = 'driver' placeholder = "enter driver" value = {driver} onChange = {(e) => setDriver(e.target.value)} style={{marginLeft:"40vh"}} /><br />
                <button>Submit</button>
            </fieldset>
            </form>
        </div>
    )
}
export default AddDriverAndAccountant