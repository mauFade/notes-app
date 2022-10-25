import { Router } from "express";

import v1Routes from "./v1";

const appRoutes = Router();

appRoutes.use(v1Routes);

export default appRoutes;
