import React, {Component} from 'react';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
//import Welcome from './Components/Welcome';
//import Hello from './Components/Hello';


class App extends Component{
  render(){
    return(
      <div className="App" >
        <Greet name="Jorja" hero="Wonder Woman">
          <p>This is children props</p>
        </Greet>
      <Greet name="Brent"   hero="Robin">
        <button>Action</button>
      </Greet>
      <Greet name="Frank"   hero="Superman" />

      <Welcome name="Nzomo" hero="Falcon"/>
      <Welcome name="Torvald" hero="Iron man"/>
      <Welcome name="Helmer" hero="Vision"/>



      </div>
    )
  } 
}

export default App;
