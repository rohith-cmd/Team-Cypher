import React,{ useState, useEffect} from "react"
import Card from "../components/card"
import axios from "axios"


const Bike = (props)=>{
     const[response,setResponse] = useState('')
     const distance = props.match.params.distance;
  useEffect((prop)=>{
    axios.get(`https://asia-south1-electrek-308100.cloudfunctions.net/app/bike/${distance}`)
    .then(res=>{setResponse(res.data)
        console.log(res)})
    .catch(err=>console.log(err))
},[distance])
    return( 
       <div>
            <Card {...props} mode={"Bike"} distance={distance} response={response}/>
       </div>
)
}
export default Bike