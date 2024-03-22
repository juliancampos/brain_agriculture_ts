import { IProducerRepository } from "infra/interface";
import AppDataSource from "../../infra/database/config/data-source";
import { Producer } from '../database/entities/Producer';

const repository = AppDataSource.getRepository(Producer);

class ProducerRepository<TFarmParam> implements IProducerRepository<TFarmParam> {
  async save(data: TFarmParam): Promise<Producer> {
    const result: Producer = await repository.save(data);
    return result;
  }

  async findAll(): Promise<Producer[]> {
    const result = repository.find();
    return result;
  }

  async update(id: string, data: TFarmParam): Promise<any> {
    const result = await repository.update(id, data);
    return result;
  }

  findOne(id: number) {
    return repository.findOneBy({ id });
  }
}

export default ProducerRepository;
