import React, {useState} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const CreatePirate = () => {
    const [pirateName, setPirateName] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [treasureChests, setTreasureChests] = useState(3)
    const [catchPhrase, setCatchPhrase] = useState("")
    const [crewPosition, setCrewPosition] = useState("")
    const [isPegLeg, setIsPegLeg] = useState(true)
    const [isEyePatch, setIsEyePatch] = useState(true)
    const [isHookHand, setIsHookHand] = useState(true)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/pirate`, {pirateName, imageURL, treasureChests, catchPhrase, crewPosition, isPegLeg, isEyePatch, isHookHand})
            .then(res=>navigate("/pirates"))
            .catch(err=>{
                const errResponse = err.response.data.errors
                const tempErrArr = []
                for(const eachKey in errResponse){
                    tempErrArr.push(errResponse[eachKey].message)
                }
                setErrors(tempErrArr)
            })
    }

    return (
        <div>
            <h1>Add Pirate</h1>
            <Link to={`/pirates`} className="btn btn-primary">Crew Board</Link>
            <form onSubmit={handleSubmit}>
            <div>
                <label className="form-label">Pirate Name:</label>
                <input type="text" name="pirateName" value={pirateName} onChange={e=>setPirateName(e.target.value)} className="form-control"/>
            </div>
            <div>
                <label className="form-label">Image URL:</label>
                <input type="text" name="imageURL" value={imageURL} onChange={e=>setImageURL(e.target.value)} className="form-control"/>
            </div>
            <div>
                <label className="form-label"># of Treasure Chests:</label>
                <input type="int" name="treasureChests" value={treasureChests} onChange={e=>setTreasureChests(e.target.value)}/>
            </div>
            <div>
                <label className="form-label">Pirate Catch Phrase:</label>
                <textarea name="catchPhrase" value={catchPhrase} onChange={e=>setCatchPhrase(e.target.value)} className="form-control"></textarea>
            </div>
            <div>
                <label className="form-label">Crew Position:</label>
                <select name="crewPosition" value={crewPosition} onChange={e=>setCrewPosition(e.target.value)}>
                    <option selected>Choose...</option>
                    <option>Captain</option>
                    <option>First Mate</option>
                    <option>Quarter Master</option>
                    <option>Boatswain</option>
                    <option>Powder Monkey</option>
                </select>
            </div>
            <div className="form-check">
                <label className="form-check-label">Peg Leg?</label>
                <input type="checkbox" name="isPegLeg" checked={isPegLeg} onChange={e=>setIsPegLeg(e.target.checked)}/>
            </div>
            <div className="form-check">
                <label className="form-check-label">Eye Patch?</label>
                <input type="checkbox" name="isEyePatch" checked={isEyePatch} onChange={e=>setIsEyePatch(e.target.checked)}/>
            </div>
            <div className="form-check">
                <label className="form-check-label">Hook Hand?</label>
                <input type="checkbox" name="isHookHand" checked={isHookHand} onChange={e=>setIsHookHand(e.target.checked)}/>
            </div>
            <button type="submit" className="btn btn-primary">Create Pirate</button>
            </form>
            {
                errors.map((err, i)=>{
                    return(
                        <p style={{color: "red"}} key={i}>{err}</p>
                    )
                })
            }
        </div>
    )
}

export default CreatePirate