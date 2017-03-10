import React, { Component } from 'react';
import Item from './Item';



export default 
  class Displayer extends Component {
    render() {

        
        let columns = [];
        let aux = 0;

        //No renderizo nada sino buscaron
        if (!this.props.alreadySearched) 
            return null;

        //Creo una fila (Item) por noticia
        this.props.days.forEach((day) => {
            columns.push(
                <Item day={day}/>
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
