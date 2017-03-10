import React, { Component } from 'react';



export default
  class Botonera extends Component {
   
 handleSubmit(event) {
      event.preventDefault();
       // this.props.onSubmit(event);  
        alert(event); 
    }
   

    render() {
        return (


            

                    <fieldset>
                            <form onSubmit={ this.handleSubmit }>
                            
                                <div>
                                    <select name="sport">
                    
                                    <option value="futbol">Futbol</option>
                                    <option value="basket">Basket</option>
                                    <option value="natacion">Natacion</option>
                                    <option value="running">Running</option>
                                    </select>

                                    <div className="busqueda">
                                            <span> Dias:  </span>
                                            <input type="number" name="nroDias" required/>
                                </div>
                              </div>

                            <div className="boton">
                                            <input type="submit" value="Search" />
                            </div>
                            </form>
                    </fieldset>

            
          );
      }
}