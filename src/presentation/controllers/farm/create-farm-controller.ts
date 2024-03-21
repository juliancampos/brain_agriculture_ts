import { HttpRequest } from "../../protocols/http";
import { badRequest, ok } from "../../helpers/http-helper";
import { Controller } from "../../protocols/controller";
import { IProducerUseCase } from "../../../domain/interfaces";

class CreateProducerController implements Controller {
  constructor(
    private readonly producerUseCase: IProducerUseCase
  ) {}

  async handle(req: HttpRequest) {
    try {
      const { name, documentType, documentNumber } = req.body;
      const producer = { name, documentType, documentNumber };
      const result = await this.producerUseCase.createProducer(producer);
      return ok(result);
    } catch (error) {
      return badRequest(error);      
    }
  }

}

export default CreateProducerController;
