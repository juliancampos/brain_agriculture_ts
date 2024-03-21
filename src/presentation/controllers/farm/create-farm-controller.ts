import { HttpRequest } from "../../protocols/http";
import { badRequest, ok } from "../../helpers/http-helper";
import { Controller } from "../../protocols/controller";
import { IFarmUseCase } from "../../../domain/interfaces";

class CreateFarmController implements Controller {
  constructor(
    private readonly farmUseCase: IFarmUseCase
  ) {}

  async handle(req: HttpRequest) {
    try {
      const {
        name,
        city,
        state,
        totalArea,
        productiveArea,
        vegetationArea,
        cultivation
      } = req.body;

      const farm = {
        name,
        city,
        state,
        totalArea,
        productiveArea,
        vegetationArea,
        cultivation
      };
      const result = await this.farmUseCase.createFarm(farm);
      return ok(result);
    } catch (error) {
      return badRequest(error);      
    }
  }

}

export default CreateFarmController;
