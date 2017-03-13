import { Router } from "express";
import climaMiddleware from '../middleware/middleware.clima';


  export default ({ config }) => {
  const api = Router();

// :deporte/:cantDias

  api.get("/:deporte/:dias", 
            climaMiddleware);
  return api;
};
