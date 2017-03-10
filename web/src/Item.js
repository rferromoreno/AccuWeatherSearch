import React, { Component } from 'react';
import dateFormat from 'dateformat';


export default 
  class Item extends Component {
    render() {

     
         let td=null;
         let day=this.props.day;
         let fecha = dateFormat(day.date, 'dddd, d');
        if (day.feasible){
            td=(   
                <div>
                    <div className="diaValido">
                    {fecha}
                    </div>
                </div> );}
         else {
               td=( <div> 
                        <div className="diaInvalido">
                            {fecha}
                       </div> 
                        <div>
                             {day.reason}
                        </div>
                    </div>);
                }           
      

        return (
            <td>
               {td}
            </td>
       );
    }
}
