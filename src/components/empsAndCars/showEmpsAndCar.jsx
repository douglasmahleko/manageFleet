import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import CreateTable from '../createTable'

function ShowEmpsAndCar({backendActor}){
    const [stories, setStories] = useState([])
    const [search, setSearch] = useState("")
    const [getting, setGetting] = useState(false);
    const tableHeader = ["employee", "supervisor", "tasks", "status", "importance"]
    
    return(
        <div>
            <div>
                <p style={{marginRight:"30vh", paddingRight:"50px"}}>The Driver And HR Officer </p>
                <form>
                    <label>SearchValue</label>
                    <input name="search" value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="enter the value" />
                    <button>Search</button>
                </form>            
            </div>
            <div>
                <CreateTable data={stories} tableHeader={tableHeader} />
            </div>
        </div>
    )
}
export default ShowEmpsAndCar