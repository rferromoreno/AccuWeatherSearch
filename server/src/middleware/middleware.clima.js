import request from 'request-promise';
import getClimaService from '../services/climaService';
import logger from "../logger";
import db from "../db";

// Por ahora los datos son estaticos.
// Habría que hacer un request a /api/sports

export default
  function getClima(request, response, next) {

        const numberOfDays = request.params.dias;
        const sport = request.params.deporte;
        var min;
        var max;
        var allowsRain;

    // Revisar si la logica de la validación conviene ponerla acá o en otro lado.
    getClimaService()
    .then((data) => {
        return response.json(data);
    })
    .then((data) => {   
        // Logica del programa. Ver si no conviene pasarla a otro lado
        var sportSelected = db.sports[sport]; 
        
        console.log(db.sports);
        if (sportSelected == undefined) {
            // devolver error
            console.log("Deporte no existe");
        } else {
            // trabajar normalmente
            console.log(sportSelected);
        }

        return data;
    })
    .catch((error) => {
        logger.log('error',`${module.id} - ${error}`);
        next(error);
    });
}