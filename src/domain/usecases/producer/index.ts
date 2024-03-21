import { ProducerParam } from "domain/dtos";
import { IProducerUseCase } from "domain/interfaces";
import { Producer } from "domain/models/Producer";
import { IRepository } from "infra/interface";

class ProducerUseCase implements IProducerUseCase {
  constructor(private readonly repository: IRepository<ProducerParam>) {}

  async createProducer(producer: ProducerParam): Promise<Producer> {
    
    const result: Producer = await this.repository.save(producer);
    return result;
  }

  async findProducer(): Promise<Producer[]> {
    return this.repository.findAll();
  }
}

export default ProducerUseCase;
