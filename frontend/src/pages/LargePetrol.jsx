import React,{ useState, useEffect} from "react"
import axios from "axios" 
import Card from "../components/card"

const Largepetrol = (props)=>{
     const[response,setResponse] = useState('')
     const distance = props.match.params.distance;
  useEffect(()=>{
    axios.get(`https://asia-south1-electrek-308100.cloudfunctions.net/app/largepetrol/${distance}`)
    .then(res=>{setResponse(res.data)
        console.log(res)})
    .catch(err=>console.log(err))
},[distance])
    return( 
       <Card {...props} mode={"Large petrol"} distance={distance} response={response}/>
   
)
}
export default Largepetrol;

