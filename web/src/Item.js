import React, { Component } from 'react';



export default 
  class Item extends Component {
    render() {
         let td=null;
         let day=this.props.day;
        if (day.feasible){
            td=(   
                <div>
                    <div className="diaValido">
                    {day.date}
                    </div>
                </div> );}
         else {
               td=( <div> 
                        <div className="diaInvalido">
                            {day.date}
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
