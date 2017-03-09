import { version } from "../../package.json";
import { Router } from "express";
import clima from "./clima.route";
import sports from "./sports.route";


export default ({ config }) => {
  const api = Router();

  api.use("/clima", clima({ config }));

  api.use("/sports", sports({ config  }));
 
  return api;
};
