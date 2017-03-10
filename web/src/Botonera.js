import React, { Component } from 'react';



export default
  class Botonera extends Component {
      constructor(props){
          super(props);
          this.handleSubmit = this.handleSubmit.bind(this);
      }
   
 handleSubmit(event) {
        this.props.onSubmit(event);   
    }

    render() {
        return (


            

                    <fieldset>
                            <form onSubmit={ this.handleSubmit }>
                            
                                <div>
                                 <span> Deporte:  </span>
                                    <select name="sport" required>
                    
                                    <option value="futbol">Futbol</option>
                                    <option value="basket">Basket</option>
                                    <option value="natacion">Natacion</option>
                                    <option value="running">Running</option>
                                    </select>
                                </div>
                                    <div className="busqueda">
                                            <span> Dias:  </span>

                                            <select name="nroDias" required>
                    
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                            </select>
                                            
                                </div>
                              

                            <div className="boton">
                                            <input type="submit" value="Search" />
                            </div>
                            </form>
                    </fieldset>

            
          );
      }
}