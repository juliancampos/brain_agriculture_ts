import { HttpRequest } from "../../protocols/http";
import { badRequest, ok } from "../../helpers/http-helper";
import { Controller } from "../../protocols/controller";
import { IProducerUseCase } from "../../../domain/interfaces";

class UpdateProducerController implements Controller {
  constructor(
    private readonly producerUseCase: IProducerUseCase
  ) {}

  async handle(req: HttpRequest) {
    try {
      const { producerId } = req.params;
      const result = await this.producerUseCase.updateProducer(producerId, req.body);
      return ok(result);
    } catch (error) {
      return badRequest(error);      
    }
  }

}

export default UpdateProducerController;
