import React, { useState, useEffect } from "react";
import CreateTable from '../createTable'

function ShowDriverAndHR({backendActor}){
    const [stories, setStories] = useState([])
    const [search, setSearch] = useState("")
    const [getting, setGetting] = useState(false);
    const tableHeader = ["hr", "punishment", "driver", "offense","judgement"]
    
    return(
        <div>
            <div>
                <p style={{marginRight:"5vh", paddingRight:"50px"}}>The Driver And HR Officer </p>
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
export default ShowDriverAndHR