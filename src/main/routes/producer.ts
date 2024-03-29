import { Router } from "express";
import adaptRoutes from "../adapaters/express/express-route-adapter";
import FindProducerController from "../../presentation/controllers/producer/find-producer-controller";
import ProducerUseCase from "../../domain/usecases/producer";
import ProducerRepository from "../../infra/repository/producer-repository";
import CreateProducerController from "../../presentation/controllers/producer/create-producer-controller";
import UpdateProducerController from "../../presentation/controllers/producer/update-producer-controller";

const producerRepository = new ProducerRepository();
const producerUseCase = new ProducerUseCase(producerRepository);

const findProducerController = new FindProducerController(producerUseCase);
const createProducerController = new CreateProducerController(producerUseCase);
const updateProducerController = new UpdateProducerController(producerUseCase);

export default (router: Router): void => {
  router.get("/producers", adaptRoutes(findProducerController))
  router.post("/producers", adaptRoutes(createProducerController))
  router.put("/producer/:producerId", adaptRoutes(updateProducerController))
};
