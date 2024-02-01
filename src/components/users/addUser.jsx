import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function AddUser({backendActor}){

    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [sname, setSurname] = useState('')
    const [sex, setSex] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [adress, setAdress] = useState('')
    const [duty, setDuty] = useState('')
    const [resume, setResume] = useState('')

    return(
        <div>
             <p style={{marginRight:"60vh", paddingLeft:"20vh"}}>Add the user</p>
            <form>
            <fieldset style={{height:"90vh"}}>
                <label>Id No :</label>
                <input type='text' name = 'idNo' placeholder = "enter id" value = {id} onChange = {(e) => setId(e.target.value)} style={{marginLeft:"43vh"}} /><br />
                <label>Title :</label>
                <input type='text' name = 'title' placeholder = "enter title" value = {title} onChange = {(e) => setTitle(e.target.value)} style={{marginLeft:"44vh"}} /><br />
                <label>Name : </label>
                <input type='text' name = 'name' placeholder = "enter name" value = {name} onChange = {(e) => setName(e.target.value)} style={{marginLeft:"41vh"}} /><br />
                <label>Surname : </label>
                <input type='text' name = 'surname' placeholder = "enter surname" value = {sname} onChange = {(e) => setSurname(e.target.value)} style={{marginLeft:"38vh"}} /><br />
                <label>Sex : </label>
                <input type='text' name = 'sex' placeholder = "enter sex" value = {sex} onChange = {(e) => setSex(e.target.value)} style={{marginLeft:"44vh"}} /><br />
                <label>Contact : </label>
                <input type='text' name = 'contact' placeholder = "enter contact" value = {contact} onChange = {(e) => setContact(e.target.value)} style={{marginLeft:"40vh"}} /><br />
                <label>Email : </label>
                <input type='text' name = 'email' placeholder = "enter email" value = {email} onChange = {(e) => setEmail(e.target.value)} style={{marginLeft:"43vh"}} /><br />
                <label>Adress : </label>
                <input type='text' name = 'adress' placeholder = "enter email" value = {adress} onChange = {(e) => setAdress(e.target.value)} style={{marginLeft:"41vh"}} /><br />
                <label>Duty : </label>
                <input type='text' name = 'duty' placeholder = "enter duty" value = {duty} onChange = {(e) => setDuty(e.target.value)} style={{marginLeft:"44vh"}} /><br />
                <label>Resume : </label>
                <input type='text' name = 'resume' placeholder = "enter resume" value = {resume} onChange = {(e) => setResume(e.target.value)} style={{marginLeft:"40vh"}} /><br />
                <button>Submit</button>
            </fieldset>
            </form>
        </div>
    )
}
export default AddUser