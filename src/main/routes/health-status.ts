import { Router } from "express";
import adaptRoutes from "../adapaters/express/express-route-adapter";
import HealthStatusController from "../../presentation/controllers/health-status/health-status-controller";
import HealthStatusUseCase from "../../domain/usecases/health-status";

const healthStatusUseCase = new HealthStatusUseCase();
const healthStatusController = new HealthStatusController(healthStatusUseCase);

export default (router: Router): void => {
  router.get("/health", adaptRoutes(healthStatusController))
};
