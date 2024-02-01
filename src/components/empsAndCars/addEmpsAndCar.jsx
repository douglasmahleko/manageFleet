import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function AddEmpsAndCars({backendActor}){
  
    const [supervisor, setSupervisor] = useState('')
    const [status, setStatus] = useState('')
    const [task, setTask] = useState('')
    const [deadLine, setDeadLine] = useState('')
    const [importance, setImportance] = useState('')
    const [employee, setEmployee] = useState('')

    return(
        <div >
            <p style={{marginRight:"40vh", paddingLeft:"10vh"}}>Add the Employes and Car details</p>
            <form style={{height:"55vh"}}>
            <fieldset style={{height:"55vh"}}>
                <label>Supervisor : </label>
                <input type='text' name = 'supervisor' placeholder = "enter supervisor" value = {supervisor} onChange = {(e) => setSupervisor(e.target.value)} style={{marginLeft:"27vh"}} /><br />
                <label>Status : </label>
                <input type='text' name = 'status' placeholder = "enter status" value = {status} onChange = {(e) => setStatus(e.target.value)} style={{marginLeft:"33vh"}} /><br /> 
                <label>Task : </label>
                <input type='text' name = 'task' placeholder = "enter task" value = {task} onChange = {(e) => setTask(e.target.value)} style={{marginLeft:"35vh"}} /><br />
                <label>deadLine : </label>
                <input type='text' name = 'deadLine' placeholder = "enter deadLine" value = {deadLine} onChange = {(e) => setDeadLine(e.target.value)} style={{marginLeft:"30vh"}} /><br />
                <label>Importance : </label>
                <input type='text' name = 'importance' placeholder = "enter importance" value = {importance} onChange = {(e) => setImportance(e.target.value)} style={{marginLeft:"28vh"}} /><br />
                <label>Employee : </label>
                <input type='text' name = 'employee' placeholder = "enter employee" value = {employee} onChange = {(e) => setEmployee(e.target.value)} style={{marginLeft:"30vh"}} /><br />
                <button>Submit</button>
            </fieldset>
            </form>
        </div>
    )
}
export default AddEmpsAndCars