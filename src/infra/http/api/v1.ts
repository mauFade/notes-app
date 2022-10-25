import { Router } from "express";
import userRoutes from "../../../resources/user/infra/http/routes/user.routes";

const v1Routes = Router();

v1Routes.use(userRoutes);

export default v1Routes;
