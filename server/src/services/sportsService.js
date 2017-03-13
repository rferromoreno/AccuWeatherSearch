import request from 'request-promise';
import errors from 'request-promise/errors';
import config from "../config.json";
import logger from "../logger";
import db from "../db";

export default
  function getSports() {
    return new Promise(sportsResolve);
}

function sportsResolve(resolve, reject) {
  // log info
  resolve(db.sports);
}