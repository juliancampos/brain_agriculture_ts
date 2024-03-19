import { HttpRequest } from "../../protocols/http";
import { ok } from "../../helpers/http-helper";
import { Controller } from "../../protocols/controller";
import { IProducerUseCase } from "../../../domain/interfaces";

class CreateProducerController implements Controller {
  constructor(
    private readonly producerUseCase: IProducerUseCase
  ) {}

  async handle(req: HttpRequest) {
    const { name } = req.body;
    const producer = { id: '1', name };
    return ok(this.producerUseCase.createProducer(producer));
  }

}

export default CreateProducerController;
