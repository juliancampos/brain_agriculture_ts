import { IRepository } from "infra/interface";
import AppDataSource from "../../infra/database/config/data-source";
import { Farm } from "../database/entities/Farm";

const repository = AppDataSource.getRepository(Farm);

class FarmRepository<TParam> implements IRepository<TParam> {
  async save(data: TParam): Promise<Farm> {
    const result: Farm = await repository.save(data);
    return result;
  }

  async findAll(): Promise<Farm[]> {
    const result = repository.find();
    return result;
  }

  async update(id: string, data: TParam): Promise<any> {
    const result = await repository.update(id, data);
    return result;
  }
}

export default FarmRepository;
