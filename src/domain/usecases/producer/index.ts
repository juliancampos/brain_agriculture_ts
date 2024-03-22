import { ProducerParam } from "domain/dtos";
import { IProducerUseCase } from "domain/interfaces";
import { Producer } from "domain/models/Producer";
import { IProducerRepository } from "infra/interface";

class ProducerUseCase implements IProducerUseCase {
  constructor(private readonly repository: IProducerRepository<ProducerParam>) {}

  async createProducer(producer: ProducerParam): Promise<Producer> {
    
    const result: Producer = await this.repository.save(producer);
    return result;
  }

  async findProducer(): Promise<Producer[]> {
    return this.repository.findAll();
  }

  async updateProducer(id: string, data: ProducerParam): Promise<any> {
    return this.repository.update(id, data);
  }
}

export default ProducerUseCase;
