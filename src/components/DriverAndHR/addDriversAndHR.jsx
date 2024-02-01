import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function AddDriverAndHR({backendActor}){
  
    const [hr, setHR] = useState('')
    const [punishment, setPunishment] = useState('')
    const [judgement, setJudgement] = useState('')
    const [offense, setOffense] = useState('')
    const [driver, setDriver] = useState('')

    return(
        <div >
            <p style={{marginRight:"40vh"}}>Add Add Driver And HR details</p>
            <form style={{height:"50vh"}}>
            <fieldset style={{height:"50vh"}}>
                <legend>Enter details</legend>
                <label>HR Officer : </label>
                <input type='text' name = 'hr' placeholder = "enter hr" value = {hr} onChange = {(e) => setHR(e.target.value)} style={{marginLeft:"30vh"}} /><br />
                <label>Punishment : </label>
                <input type='text' name = 'punishment' placeholder = "enter punishment" value = {punishment} onChange = {(e) => setPunishment(e.target.value)} style={{marginLeft:"29vh"}} /><br /> 
                <label>Judgement : </label>
                <input type='text' name = 'judgement' placeholder = "enter judgement" value = {judgement} onChange = {(e) => setJudgement(e.target.value)} style={{marginLeft:"30vh"}} /><br />
                <label>Offense : </label>
                <input type='text' name = 'offense' placeholder = "enter offense" value = {offense} onChange = {(e) => setOffense(e.target.value)} style={{marginLeft:"34vh"}} /><br />
                <label>Driver : </label>
                <input type='text' name = 'driver' placeholder = "enter driver" value = {driver} onChange = {(e) => setDriver(e.target.value)} style={{marginLeft:"36vh"}} /><br />
                
                <button>Submit</button>
            </fieldset>
            </form>
        </div>
    )
}
export default AddDriverAndHR