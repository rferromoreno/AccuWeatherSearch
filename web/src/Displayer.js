import React, { Component } from 'react';
import Item from './Item';



export default 
  class Displayer extends Component {
    render() {

        
        let columns = [];
        
        //No renderizo nada sino buscaron
        if (!this.props.alreadySearched) 
            return null;
            
        let aux=0;
        //Creo una fila (Item) por noticia
        this.props.days.forEach((day) => {
            columns.push(
                <Item day={day} key={aux}/>
            );
            aux++; 
        });   


       
            return (  
                <table>
                <tbody>
                <tr>
                       {columns}
                </tr>
                    </tbody>
                </table>
            );
        }
    }
