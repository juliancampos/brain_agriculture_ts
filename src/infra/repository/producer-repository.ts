import { IRepository } from "infra/interface";
import AppDataSource from "../../infra/database/config/data-source";
import { Producer } from '../database/entities/Producer';

const repository = AppDataSource.getRepository(Producer);

class ProducerRepository<TParam> implements IRepository<TParam> {
  async save(data: TParam): Promise<Producer> {
    const result: Producer = await repository.save(data);
    return result;
  }

  async findAll(): Promise<Producer[]> {
    const result = repository.find();
    return result;
  }

  async update(id: string, data: TParam): Promise<any> {
    const result = await repository.update(id, data);
    return result;
  }
}

export default ProducerRepository;
