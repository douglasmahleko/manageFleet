import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function AddCarAndDriver({backendActor}){
  
    const [email, setEmail] = useState('')
    const [initialOdometerOnStartingJourney, setInitialOdometerOnStartingJourney] = useState('')
    const [destination, setDestination] = useState('')
    const [plateNo, setPlateNo] = useState('')
    const [finalOdometerOnFinishingJourney, setFinalOdometerOnFinishingJourney] = useState('')
    const [dateAndTime, setDateAndTime] = useState('')
    const [comments, setComments] = useState('')
    const [purpose, setPurpose] = useState('')

    return(
        <div >
            <p style={{marginRight:"40vh"}}>Add Car And Driver details</p>
            <form style={{height:"70vh"}}>
            <fieldset style={{height:"70vh"}}>
                <label>Driver : </label>
                <input type='text' name = 'email' placeholder = "enter Driver" value = {email} onChange = {(e) => setEmail(e.target.value)} style={{marginLeft:"52vh"}} /><br />
                <label>Destination : </label>
                <input type='text' name = 'destination' placeholder = "enter destination" value = {destination} onChange = {(e) => setDestination(e.target.value)} style={{marginLeft:"46vh"}} /><br /> 
                <label>The car : </label>
                <input type='text' name = 'plateNo' placeholder = "enter plateNo" value = {plateNo} onChange = {(e) => setPlateNo(e.target.value)} style={{marginLeft:"50vh"}} /><br />
                <label>DateAndTime : </label>
                <input type='text' name = 'dateAndTime' placeholder = "enter dateAndTime" value = {dateAndTime} onChange = {(e) => setDateAndTime(e.target.value)} style={{marginLeft:"43vh"}} /><br />
                <label>Comments : </label>
                <input type='text' name = 'comments' placeholder = "enter comments" value = {comments} onChange = {(e) => setComments(e.target.value)} style={{marginLeft:"47vh"}} /><br />
                <label>Purpose : </label>
                <input type='text' name = 'purpose' placeholder = "enter purpose" value = {purpose} onChange = {(e) => setPurpose(e.target.value)} style={{marginLeft:"50vh"}} /><br />
                <label>initial Odometer On Starting Journey : </label>
                <input type='text' name = 'initialOdometerOnStartingJourney' placeholder = "enter initial Odometer On Starting Journey" value = {initialOdometerOnStartingJourney} onChange = {(e) => setInitialOdometerOnStartingJourney(e.target.value)} style={{marginLeft:"17vh"}} /><br />
                <label>finalOdometerOnFinishingJourney : </label>
                <input type='text' name = 'finalOdometerOnFinishingJourney' placeholder = "enter final Odometer On Finishing Journey" value = {finalOdometerOnFinishingJourney} onChange = {(e) => setFinalOdometerOnFinishingJourney(e.target.value)} style={{marginLeft:"20vh"}} /><br />
                <button>Submit</button>
            </fieldset>
            </form>
        </div>
    )
}
export default AddCarAndDriver