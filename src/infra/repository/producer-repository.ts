import { IRepository } from "infra/interface";
import AppDataSource from "../../infra/database/config/data-source";
import { Producer } from '../database/entities/Producer';

const repository = AppDataSource.getRepository(Producer);

class ProducerRepository implements IRepository {
  async save<T>(data: T): Promise<any> {
    const result = repository.create(data);
    return result;
  }
}

export default ProducerRepository;
