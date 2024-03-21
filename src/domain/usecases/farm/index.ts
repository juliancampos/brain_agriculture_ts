import { FarmParam } from "domain/dtos";
import { IFarmUseCase } from "domain/interfaces";
import { Farm } from "domain/models/Farm";
import { IRepository } from "infra/interface";

class FarmUseCase implements IFarmUseCase {
  constructor(private readonly repository: IRepository<FarmParam>) {}

  async createFarm(farm: FarmParam): Promise<Farm> {
    
    const result: Farm = await this.repository.save(farm);
    return result;
  }

  async findFarm(): Promise<Farm[]> {
    return this.repository.findAll();
  }
}

export default FarmUseCase;
