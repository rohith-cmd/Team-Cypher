const express = require("express");
const bodyParser = require("body-parser");
const Axios  = require("axios");

const app = express();

let distance = 0 ;
let time = 0;
app.use(bodyParser.json());

function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay; 
}

const coordinates = [];
const api_key="5b3ce3597851110001cf62480ea60abd2df64b34940b1ad1aabcc95a";

const  getsearch = async (place)=>{
   await Axios.get(`https://api.openrouteservice.org/geocode/search?api_key=${api_key}&text=${place}&boundary.country=IN&size=1`)
    .then(res=>coordinates.push(res.data.features[0].geometry.coordinates))
    .catch(err=>console.log(err))
}



const clacultateDistance  = async (coordinates)=>{
    const api = "5b3ce3597851110001cf62480ea60abd2df64b34940b1ad1aabcc95a";
    while(!coordinates){
        console.log("waitnig for lat long ");
    }
    await Axios.get(`https://api.openrouteservice.org/v2/directions/driving-car?api_key=${api_key}&start=${coordinates[0]}&end=${coordinates[1]}`)
    .then(res=>{ distance = res.data.features[0].properties.segments[0].distance;
        time = res.data.features[0].properties.segments[0].duration;

    })

}

app.get("/",(req,res)=>{
    res.send("hello")
})


app.post("/search",(req,res)=>{
    const start = req.body.start;
    const end = req.body.end;
    const mode = req.body.mode;
   getsearch(start)
   getsearch(end)
   setTimeout(()=>{
    clacultateDistance(coordinates)
},2000)
    setTimeout(() => {
        res.send({total_distance: Math.round(distance/1000)+" kms",
        time_taken:secondsToHms(time)})
    }, 5000);

})


app.get("/bike",(req,res)=>{
        res.send({
            total_distance:Math.round((distance/1000))+" kms",
            fuel_cost:"₹"+Math.round((distance*2.35)/1000),
            carbon_emissions:Math.round((0.05*distance/1000))+" kg"
        })
  
})

app.get("/smallpetrol",(req,res)=>{
    res.send({
        total_distance:Math.round((distance/1000))+" kms",
        fuel_cost:"₹"+Math.round((distance*4.7)/1000),
        carbon_emissions:Math.round((0.17*distance/1000))+" kg"
    })
});

app.get("/mediumpetrol",(req,res)=>{
    res.send({
        total_distance:Math.round((distance/1000))+" kms",
        fuel_cost:"₹"+Math.round((distance*7.83)/1000),
        carbon_emissions:Math.round((0.22*distance/1000))+" kg"
    })


});

app.get("/largepetrol",(req,res)=>{
    res.send({
        total_distance:Math.round((distance/1000))+" kms",
        fuel_cost:"₹"+Math.round((distance*13.42)/1000),
        carbon_emissions:Math.round((0.27*distance/1000))+" kg"
    })


});

app.get("/averagepetrol",(req,res)=>{
    res.send({
        total_distance:Math.round((distance/1000))+" kms",
        fuel_cost:"₹"+Math.round((distance*7)/1000),
        carbon_emissions:Math.round((0.20*distance/1000))+" kg"
    })


});


app.get("/smalldiesel",(req,res)=>{
    res.send({
        total_distance:Math.round((distance/1000))+" kms",
        fuel_cost:"₹"+Math.round((distance*5.75)/1000),
        carbon_emissions:Math.round((0.12*distance/1000))+" kg"
    })


});

app.get("/averagediesel",(req,res)=>{
    res.send({
        total_distance:Math.round((distance/1000))+" kms",
        fuel_cost:"₹"+Math.round((distance*7.19)/1000),
        carbon_emissions:Math.round((0.12*distance/1000))+" kg"
    })


});
app.get("/largediesel",(req,res)=>{
    res.send({
        total_distance:Math.round((distance/1000))+" kms",
        fuel_cost:"₹"+Math.round((distance*9.59)/1000),
        carbon_emissions:Math.round((0.14*distance/1000))+" kg"
    })


});

app.get("/evcar",(req,res)=>{
    res.send({
        total_distance:Math.round((distance/1000))+" kms",
        charge:"₹"+Math.round((distance*0.72)/1000),
        carbon_emissions:Math.round((0.033*distance/1000))+" kg"
    })


});

app.get("/evbike",(req,res)=>{
    res.send({
        total_distance:Math.round((distance/1000))+" kms",
        charge:"₹"+Math.round((distance*0.19)/1000),
        carbon_emissions:Math.round((0.016*distance/1000))+" kg"
    })


});

app.get("/bmtc",(req,res)=>{
    res.send({
        total_distance:Math.round((distance/1000))+" kms",
        charge:"₹"+Math.round((distance)/1000),
        carbon_emissions:((0.016*distance/1000).toFixed(2))+" kg"
    })


});



app.listen("5000",()=>{
    console.log("server started on port 5000")
});