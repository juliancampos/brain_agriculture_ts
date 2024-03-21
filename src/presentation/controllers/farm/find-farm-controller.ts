import { HttpRequest } from "../../protocols/http";
import { ok } from "../../helpers/http-helper";
import { Controller } from "../../protocols/controller";
import { IProducerUseCase } from "../../../domain/interfaces";

class FindProducerController implements Controller {
  constructor(
    private readonly producerUseCase: IProducerUseCase
  ) {}

  async handle(req: HttpRequest) {
    return ok(await this.producerUseCase.findProducer());
  }

}

export default FindProducerController;
