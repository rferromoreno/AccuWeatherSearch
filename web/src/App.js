import React, { Component } from "react";
import Botonera from "./Botonera";
import Displayer from "./Displayer";
import "./App.css";
 //comentario para prbar commit


var days= [
{ date: '2017-03-10T07:00:00-03:00',
feasible: true,
reason: ''
},

{date: '2017-03-11T07:00:00-03:00',
feasible: true,
reason: ''
},
{ date: '2017-03-12T07:00:00-03:00',
feasible: true,
reason: ''
},
{ date: '2017-03-13T07:00:00-03:00',
feasible: false,
reason: 'lluvia'
},
{ date: '2017-03-14T07:00:00-03:00',
feasible: false,
reason: 'Alta temperatura'
}
    
  ]

class App extends Component {
  constructor(props) {
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }


async  handleSubmit(event) {
        event.preventDefault();
      alert(event.target.sport.value +event.target.nroDias.value );
    
    }
  
  
 

  render() {
    return (

      <div className="App">
                <div className="App-header">
                             
                    <h2>Sports and weather</h2>
                </div>
     
        <div >
          <Botonera onSubmit={ this.handleSubmit }   />

          <Displayer days={days}  alreadySearched=' true' />
        </div>

        
        
        
      </div>
    );
  }
}

export default App;
