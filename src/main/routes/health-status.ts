import { Router } from "express";
import adaptRoutes from "../adapaters/express/express-route-adapter";
import HealthStatusController from "../../presentation/controllers/health-status/health-status-controller";
import HealthStatusUseCase from "../../domain/usecases/health-status";

const healthStatusUseCase = new HealthStatusUseCase();
const healthStatusController = new HealthStatusController(healthStatusUseCase);

export default (router: Router): void => {
  /**
   * @openapi
   * /api/health:
   *  get:
   *    tags:
   *      - HealthStatus
   *    description: Health Status
   *    responses:
   *      200:
   *        description: Health Status running ok
   */
  router.get("/health", adaptRoutes(healthStatusController))
};
