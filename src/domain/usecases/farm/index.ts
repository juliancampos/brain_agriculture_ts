import { FarmParam, ProducerParam } from "domain/dtos";
import { IFarmUseCase } from "domain/interfaces";
import { Farm } from "domain/models/Farm";
import { IFarmRepository, IProducerRepository } from "infra/interface";

class FarmUseCase implements IFarmUseCase {
  constructor(
    private readonly farmRepository: IFarmRepository<FarmParam>,
    private readonly producerRepository: IProducerRepository<ProducerParam>,
  ) {}

  async createFarm(farm: FarmParam): Promise<Farm> {
    const result: Farm = await this.farmRepository.save(farm);
    return result;
  }

  async findFarm(): Promise<Farm[]> {
    return this.farmRepository.findAll();
  }

  async updateFarm(id: string, data: FarmParam): Promise<Farm> {
    return this.farmRepository.update(id, data);
  }

  async setProducer(id: string, producerId: number): Promise<Farm> {
    const producer = await this.producerRepository.findOne(producerId);
    if (!producer)
      throw new Error("Producer not found");
    return this.farmRepository.setProducer(id, producer);
  }
}

export default FarmUseCase;
