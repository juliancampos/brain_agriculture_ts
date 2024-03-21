import { HttpRequest } from "../../protocols/http";
import { ok } from "../../helpers/http-helper";
import { Controller } from "../../protocols/controller";
import { IFarmUseCase } from "../../../domain/interfaces";

class FindFarmController implements Controller {
  constructor(
    private readonly farmUseCase: IFarmUseCase
  ) {}

  async handle(req: HttpRequest) {
    return ok(await this.farmUseCase.findFarm());
  }

}

export default FindFarmController;
