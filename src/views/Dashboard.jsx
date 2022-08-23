import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../App.css'
import {Link} from 'react-router-dom'

const Dashboard = () => {
    const [pirates, setPirates] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pirates`)
            .then(res=>setPirates(res.data))
            .catch(err=>console.log(err))
    }, [])

    const handleDelete=(deleteId)=>{
        axios.delete(`http://localhost:8000/api/pirate/${deleteId}`)
        .then(res=>{
            const filteredList = pirates.filter(eachPirate=>eachPirate._id !== deleteId)
            setPirates(filteredList)
        })
        .catch(err=>console.log(err))
    }

    return (
        <div>
            <h1>Pirate Crew</h1>
            <Link to={`/pirate/new`} className="btn btn-primary">Add Pirate</Link>

            {
                pirates.map((eachPirate, i)=>{
                    return(
                        <div>
                            <h3 key={i}>{eachPirate.pirateName}</h3>
                            <img src={eachPirate.imageURL} alt="pirate pics" className="photo"></img>
                            <Link to={`/pirate/${eachPirate._id}`} className="btn btn-primary">View Pirate</Link>
                            <button onClick={e=>handleDelete(eachPirate._id)} className="btn btn-danger">Walk the plank</button>
                        </div>
                    )
                })
            }
        </div>
        
    )
}

export default Dashboard