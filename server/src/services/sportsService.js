import request from 'request-promise';
import errors from 'request-promise/errors';
import config from "../config.json";
import logger from "../logger";

export default
  function getSports() {

 
    
    return new Promise(sportsResolve);
}

function sportsResolve(resolve, reject) {
  // log info
   const sports = [
            { name: "futbol", min: 0, max: 35, allowsRain: false },
            { name: "natacion", min: 0, max: 50, allowsRain: true },
            { name: "basket", min:0, max: 30, allowsRain: true },
            { name: "running", min:5, max:28, allowsRain: false }
            ];
  resolve(sports);
}