import { IProducerUseCase } from "domain/interfaces";
import { Producer } from "domain/models/Producer";
import { IRepository } from "infra/interface";

class ProducerUseCase implements IProducerUseCase {
  constructor(private readonly repository: IRepository) {}

  async createProducer(producer: Producer) {
    const result = await this.repository.save(producer);
    return result;
  }

  async findProducer(): Promise<Producer[]> {
    return [
      { id: '1', name: 'Producer 1' },
      { id: '2', name: 'Producer 2' },
      { id: '3', name: 'Producer 3' },
      { id: '4', name: 'Producer 4' },
      { id: '5', name: 'Producer 5' },
    ];
  }
}

export default ProducerUseCase;
