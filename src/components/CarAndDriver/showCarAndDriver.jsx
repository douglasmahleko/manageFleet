import React, { useState, useEffect } from "react"; 
import CreateTable from '../createTable'

function ShowCarAndDriver({backendActor}){
    const [stories, setStories] = useState([])
    const tableHeader = ["email","plateNo","destination","dateAndTime","purpose","importance",
    "initialOdometerOnStartingJourney","finalOdometerOnFinishingJourney","comments"]
    const [search, setSearch] = useState("")
    const [getting, setGetting] = useState(false);
    
    useEffect(() => {
        getCars();
      }, []);

    const getCars = async () => {
        try {
          const messages = await backendActor.getCarsAndDriversData();
          setStories(messages);
          console.log( "the messages " + messages)
          console.log( "the messages " + backendActor)
          console.log( "the stories " + stories)
          stories.map(story => console.log("the story " + story))
        } catch (error) {
          console.log("Error on getting topics ", error);
        }
      };

    return(
        <div>
            <div>
                <p style={{marginRight:"30vh", paddingRight:"10px"}}>The Cars And Driver </p>
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
export default ShowCarAndDriver