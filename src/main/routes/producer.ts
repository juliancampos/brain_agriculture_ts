import { Router } from "express";
import adaptRoutes from "../adapaters/express/express-route-adapter";
import FindProducerController from "../../presentation/controllers/producer/find-producer-controller";
import ProducerUseCase from "../../domain/usecases/producer";
import ProducerRepository from "../../infra/repository/producer-repository";


const producerRepository = new ProducerRepository();
const producerUseCase = new ProducerUseCase(producerRepository);
const findProducerController = new FindProducerController(producerUseCase);

export default (router: Router): void => {
  router.get("/producers", adaptRoutes(findProducerController))
};
