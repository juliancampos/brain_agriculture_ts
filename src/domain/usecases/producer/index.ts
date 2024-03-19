import { IProducerUseCase } from "domain/interfaces";
import { Producer } from "domain/models/Producer";

class ProducerUseCase implements IProducerUseCase {
  
  async createProducer(producer: Producer) {
    return producer;
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
