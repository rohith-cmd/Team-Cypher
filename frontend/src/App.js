import React from "react"
import Home from "./pages/HomePage"
import Search from "./pages/search"
import Select from "./pages/select"
import Bike from "./pages/Bike"
import Smallpetrol from "./pages/smallpetrol"
import Mediumpetrol from "./pages/MediumPetrol"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; 
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/search" exact component ={Search}/>
        <Route path="/select/:distance/:origin/:destination" exact component={Select}/>
        <Route path="/bike/:distance/:origin/:destination" exact  component={Bike}/>
        <Route path="/smallpetrol/:distance/:origin/:destination" exact component={Smallpetrol}/>
        <Route path="/mediumpetrol/:distance/:origin/:destination" exact component={Mediumpetrol}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
