import { Router } from "express";
import adaptRoutes from "../adapaters/express/express-route-adapter";
import FindProducerController from "../../presentation/controllers/producer/find-producer-controller";
import ProducerUseCase from "../../domain/usecases/producer";

const producerUseCase = new ProducerUseCase();
const findProducerController = new FindProducerController(producerUseCase);

export default (router: Router): void => {
  router.get("/producers", adaptRoutes(findProducerController))
};
