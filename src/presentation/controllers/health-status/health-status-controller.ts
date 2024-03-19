import { HttpRequest } from "../../protocols/http";
import { ok } from "../../helpers/http-helper";
import { IHealthStatusUseCase } from "../../../domain/interfaces";
import { Controller } from "../../protocols/controller";

class HealthStatusController implements Controller {
  constructor(
    private readonly healthStatusUseCase: IHealthStatusUseCase
  ) {}

  async handle(req: HttpRequest) {
    return ok(this.healthStatusUseCase.getStatus());
  }

}

export default HealthStatusController;
