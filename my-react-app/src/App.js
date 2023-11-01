import React ,{Component}from "react";
import Greet from "./components/Greet";
import './App.css';
import Welcome from "./components/Welcome";
import Hello from "./components/Hello.js";
class App extends Component {
render()
{
     return (<div className='App'>
         {/* < Greet/>*/}
          {/*<Welcome/>*/}
          <Greet name="Abhishek"/>
          <Greet name="kirtana"/>
          <Greet name="vishal"/>
          </div>);

}
}

export default App;