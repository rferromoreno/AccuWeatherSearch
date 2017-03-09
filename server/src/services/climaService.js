import request from 'request-promise';
import errors from 'request-promise/errors';
import config from "../config.json";
import logger from "../logger";

/*
*Gets the news.
*   Returns a promise of an array of news.
*/

export default
  function getClima() {
    let options = setOptions();
    return request(options)
            .then(stripData)
            .catch(handleError);
}

//Creates the options object.
function setOptions(daysNumber, regionCode) {
    let options = optionTmp;

   
    return options;
}

//Resolving promise to strip innecesary meta-data
function stripData(response) {
    //console.log(`${module.id} - method stripData - response status: ${response.status}`);
    logger.log('info',`${module.id} - method stripData - response status: ${response.status}`);
    //console.log(response);
    return response;
}

function handleError(error) {
    logger.log('error',`${module.id} - error: ${error}`);
    return error; 
}

//Options template for request
const optionTmp = {
    method: 'GET',
    uri: config.apiurl,
    qs: {

        'apikey': config.apikey,
        'metric': 'true',
        'lenguaje': 'es-AR'
        
    },
    json: true
};