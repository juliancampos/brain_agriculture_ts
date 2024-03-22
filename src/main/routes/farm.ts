import { Router } from "express";
import adaptRoutes from "../adapaters/express/express-route-adapter";
import FindFarmController from "../../presentation/controllers/farm/find-farm-controller";
import FarmUseCase from "../../domain/usecases/farm";
import FarmRepository from "../../infra/repository/farm-repository";
import ProducerRepository from "../../infra/repository/producer-repository";
import CreateFarmController from "../../presentation/controllers/farm/create-farm-controller";
import UpdateFarmController from "../../presentation/controllers/farm/update-farm-controller";
import SetProducerToFarmController from "../../presentation/controllers/farm/set-producer-to-farm-controller";

const farmRepository = new FarmRepository();
const producerRepository = new ProducerRepository();
const farmUseCase = new FarmUseCase(farmRepository, producerRepository);

const findFarmController = new FindFarmController(farmUseCase);
const createFarmController = new CreateFarmController(farmUseCase);
const updateFarmController = new UpdateFarmController(farmUseCase);
const setProducerToFarmController = new SetProducerToFarmController(farmUseCase);

export default (router: Router): void => {
  router.get("/farms", adaptRoutes(findFarmController));
  router.post("/farms", adaptRoutes(createFarmController));
  router.put("/farm/:farmId", adaptRoutes(updateFarmController));
  router.put("/farm/:farmId/producer", adaptRoutes(setProducerToFarmController));
};
