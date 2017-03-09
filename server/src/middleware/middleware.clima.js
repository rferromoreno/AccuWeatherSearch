import request from 'request-promise';
import getClimaService from '../services/climaService';
import logger from "../logger";

export default
  function getClima(request, response, next) {
    // Revisar si la logica de la validación conviene ponerla acá o en otro lado.
    getClimaService()
    .then((data) => {
        response.climaArray = data;
        return response.json(data);
    })
    .catch((error) => {
        logger.log('error',`${module.id} - ${error}`);
        next(error);
    });
}