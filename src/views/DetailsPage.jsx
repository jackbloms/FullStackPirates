import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import './../App.css'

const DetailsPage = () => {
    const [pirate, setPirate] = useState()
    const [isPegLeg, setIsPegLeg] = useState()
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pirate/${id}`)
            .then(res=>setPirate(res.data))
            .catch(err=>console.log(err))
    }, [])

    return (
        <div>
            {
                pirate?
                <div>
                    <h1>{pirate.pirateName}</h1>
                    <img src={pirate.imageURL} alt="pirate pics" className="bigPhoto"></img>
                    <h2>{pirate.catchPhrase}</h2>
                    <h3>About</h3>
                    <h4>Position: {pirate.crewPosition}</h4>
                    <h4>Treasures: {pirate.treasureChests}</h4>        
                    <h4>Peg Leg: {pirate.isPegLeg?"Yes":"No"}</h4>
                    <h4>Eye Patch: {pirate.isEyePatch?"Yes":"No"}</h4>
                    <h4>Hand Hook: {pirate.isHandHook?"Yes":"No"}</h4>
                </div>:
                <h1>Something is wrong</h1>
            }
        </div>
    )
}

export default DetailsPage