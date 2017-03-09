import request from 'request-promise';
import getSportsService from '../services/sportsService';
import logger from "../logger";

export default
  function getSports(request, response, next) {
    return response.json(getSportsService());
}