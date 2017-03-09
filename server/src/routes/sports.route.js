import { Router } from "express";
import sportsMiddleware from '../middleware/middleware.sports';

  export default ({ config }) => {
  const api = Router();

  api.get("/", sportsMiddleware);

  return api;
};
