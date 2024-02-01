import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";

function CreateTable({tableHeader, data,backendActor}){
    const [tableHead, setTableHead] = useState(tableHeader)
    let tableHeadLength = tableHead.length
    console.log("The header i s" + tableHead)
    console.log("The data is " + data.length)
    console.log("The header length is " + tableHeadLength)
    const [dat, setDat] = useState(data)
    return(
        <div>
            <div>
                <table >
                    <tr>
                        {
                            tableHead.map((head) => (
                                <th> {head} </th>
                            ))
                        }                        
                    </tr>
                    <tr>
                        <td>abc 123</td>
                        <td>cd40</td>
                        <td>Nissan Hardbody np300</td>
                        <td>company use</td>
                        <td>harare mbare</td>
                        <td>22/10/22</td>
                        <td>22/10/21</td>
                        <td>25000000 km</td>
                        <td>IT Department</td>
                        <td>not in use</td>
                        <td><Link to = "#">Edit</Link> <Link to = "#">Delete</Link><Link to = "#">More</Link></td>
                    </tr>
                    <tr>
                        <td>abc 123</td>
                        <td>cd40</td>
                        <td>Nissan Hardbody np300</td>
                        <td>customer use</td>
                        <td>harare mbare</td>
                        <td>22/10/22</td>
                        <td>22/10/21</td>
                        <td>25000000 km</td>
                        <td>IT Department</td>
                        <td>in use</td>
                        <td><Link to = "#">Edit</Link> <Link to = "#">Delete</Link> <Link to = "#">More</Link></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default CreateTable