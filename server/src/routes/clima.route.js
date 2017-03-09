import { Router } from "express";
import climaMiddleware from '../middleware/middleware.clima';


  export default ({ config }) => {
  const api = Router();

  api.get("/", 
            climaMiddleware);
  return api;
};
