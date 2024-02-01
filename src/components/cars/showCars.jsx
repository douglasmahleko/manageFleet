import React, { useState, useEffect } from "react";
import CreateTable from '../createTable'

function ShowCars({backendActor}){
    const [stories, setStories] = useState([])
    const [search, setSearch] = useState("")
    const tableHeader = ["engineNo", "plateNo", "dateCarBought",
                                            "mileageToDoService", "addedBy", "statusOfCar",
                                            "audometerOnBuying", "carName", "carType",
                                            "department"]
    const [getting, setGetting] = useState(false);
    
    useEffect(() => {
        getCars();
      }, []);

    const getCars = async () => {
        try {
          const messages = await backendActor.getCarsData();
          setStories(messages);
          console.log( "the messages " + messages)
          console.log( "the stories " + stories)
        } catch (error) {
          console.log("Error on getting topics ", error);
        }
      };
    return(
        <div>
            <div>
                <p style={{marginRight:"60vh", paddingLeft:"20vh"}}>All the cars</p>
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
export default ShowCars