import { IFarmRepository } from "infra/interface";
import AppDataSource from "../../infra/database/config/data-source";
import { Farm } from "../database/entities/Farm";
import { Producer } from "infra/database/entities/Producer";

const repository = AppDataSource.getRepository(Farm);

class FarmRepository<TParam> implements IFarmRepository<TParam> {
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

  setProducer(id: string, producer: Producer) {
    return repository.update(id, { producer });
  }

  findOne(id: number) {
    return repository.findOneBy({ id });
  }
}

export default FarmRepository;
