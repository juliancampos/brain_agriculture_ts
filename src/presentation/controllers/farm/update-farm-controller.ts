import { HttpRequest } from "../../protocols/http";
import { badRequest, ok } from "../../helpers/http-helper";
import { Controller } from "../../protocols/controller";
import { IFarmUseCase } from "../../../domain/interfaces";

class UpdateFarmController implements Controller {
  constructor(
    private readonly farmUseCase: IFarmUseCase
  ) {}

  async handle(req: HttpRequest) {
    try {
      const { farmId } = req.params;
      const result = await this.farmUseCase.updateFarm(farmId, req.body);
      return ok(result);
    } catch (error) {
      return badRequest(error);      
    }
  }

}

export default UpdateFarmController;
