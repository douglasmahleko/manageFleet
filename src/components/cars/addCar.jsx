import React, { useState, useEffect } from "react";
import './addCar.css'

function AddCar(){

    const [plateNo, setPlateNo] = useState('')
    const [engineNo, setEngineNo] = useState('')
    const [nameOfCar, setNameOfCar] = useState('')
    const [type, setType] = useState('')
    const [dateCarBought, setDateCarBought] = useState("")
    const [audometer, setAudometer] = useState('')
    const [department, setDepartment] = useState('')
    const [status, setStatus] = useState('')
    const [mileageToDoService, setMileageToDoService] = useState('')

    return(
        <div>
            <p style={{marginRight:"30vh", paddingRight:"30px"}}>Add the car</p>
            <form style={{height:"68vh"}}>
            <fieldset style={{height:"68vh"}}>
                <label>Plate No : </label>
                <input type='text' name = 'plateNo' placeholder = "enter plate number" value = {plateNo} onChange = {(e) => setPlateNo(e.target.value)} style={{marginLeft:"30vh"}} /><br />
                <label>Engine No : </label>
                <input type='text' name = 'engineNo' placeholder = "enter engine number" value = {engineNo} onChange = {(e) => setEngineNo(e.target.value)} style={{marginLeft:"28vh"}} /><br /> 
                <label>Name of Car : </label>
                <input type='text' name = 'nameOfCar' placeholder = "enter name of car" value = {nameOfCar} onChange = {(e) => setNameOfCar(e.target.value)} style={{marginLeft:"25vh"}} /><br />
                <label>Type : </label>
                <input type='text' name = 'type' placeholder = "enter type of car" value = {type} onChange = {(e) => setType(e.target.value)} style={{marginLeft:"35vh"}} /><br />
                <label>Date the car was bought : </label>
                <input type='date' name = 'dateCarBought' placeholder = "enter date the car was bought" value={dateCarBought} onChange = {(e) => setDateCarBought(e.target.value)} style={{marginLeft:"13vh"}} /><br />
                <label>Audometer : </label>
                <input type='text' name = 'audometer' placeholder = "enter the cars audometer" value = {audometer} onChange = {(e) => setAudometer(e.target.value)} style={{marginLeft:"28vh"}} /><br />
                <label>Department : </label>
                <input type='text' name = 'department' placeholder = "enter department" value = {department} onChange = {(e) => setDepartment(e.target.value)} style={{marginLeft:"28vh"}} /><br />
                <label>status : </label>
                <input type='text' name = 'status' placeholder = "enter status" value = {status} onChange = {(e) => setStatus(e.target.value)} style={{marginLeft:"35vh"}} /><br />
                <label>mileage To Do Service : </label>
                <input type='text' name = 'mileageToDoService' placeholder = "enter mileage To Do Service" value = {mileageToDoService} onChange = {(e) => setMileageToDoService(e.target.value)} style={{marginLeft:"35vh"}} /><br />
                <button>Submit</button>
            </fieldset>
            </form>
        </div>
    )
}
export default AddCar
