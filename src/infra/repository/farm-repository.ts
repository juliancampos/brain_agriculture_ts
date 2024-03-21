import { IRepository } from "infra/interface";
import AppDataSource from "../../infra/database/config/data-source";
import { Producer } from '../database/entities/Producer';
import { Farm } from "infra/database/entities/Farm";

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
}

export default FarmRepository;
