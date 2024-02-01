import React, { useState, useEffect } from "react";
import CreateTable from '../createTable'

function ShowDrivers({backendActor}){   
    const [stories, setStories] = useState([])
    const [search, setSearch] = useState("")
    const [getting, setGetting] = useState(false); 
    const tableHeader = ["email", "licenseNo", "experience", "classLicense", "level", "ratings"]
    return(
        <div>
            <div>
                <p>The drivers</p>
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
export default ShowDrivers