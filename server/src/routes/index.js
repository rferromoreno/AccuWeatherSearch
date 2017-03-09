import { version } from "../../package.json";
import { Router } from "express";
import clima from "./clima.route";


export default ({ config }) => {
  const api = Router();

  api.use("/clima", clima({ config }));
 
  return api;
};
