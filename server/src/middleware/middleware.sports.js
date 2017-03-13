import request from 'request-promise';
import getSportsService from '../services/sportsService';
import logger from "../logger";

export default
  function getSports(request, response, next) {
    getSportsService()
    .then((sports) => { 
      response.json(sports);
    })
    .catch((error) => { 
      logger.log('error', 'Log de error');
      next(error);  
    });
}