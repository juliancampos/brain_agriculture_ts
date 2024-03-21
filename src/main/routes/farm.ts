import { Router } from "express";
import adaptRoutes from "../adapaters/express/express-route-adapter";
import FindFarmController from "../../presentation/controllers/farm/find-farm-controller";
import FarmUseCase from "../../domain/usecases/farm";
import FarmRepository from "../../infra/repository/farm-repository";
import CreateFarmController from "../../presentation/controllers/farm/create-farm-controller";

const farmRepository = new FarmRepository();
const farmUseCase = new FarmUseCase(farmRepository);

const findFarmController = new FindFarmController(farmUseCase);
const createFarmController = new CreateFarmController(farmUseCase);

export default (router: Router): void => {
  router.get("/farms", adaptRoutes(findFarmController))
  router.post("/farms", adaptRoutes(createFarmController))
};
