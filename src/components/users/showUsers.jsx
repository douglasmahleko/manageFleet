import React, { useState, useEffect } from "react";
import CreateTable from '../createTable'

function ShowUsers({backendActor}){
    const [stories, setStories] = useState([])
    const [search, setSearch] = useState("")
    const [getting, setGetting] = useState(false);
    const tableHeader = ["name","surname","email",
                        "idNo","contact","title","sex",
                        "dob","duty","userHistory","address",
                        "addedBy"]

    return(
        <div>
            <div>
                <p style={{marginRight:"60vh", paddingLeft:"20vh"}}>All the users</p>
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
export default ShowUsers