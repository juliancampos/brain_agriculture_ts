import { FarmParam, ProducerParam } from "domain/dtos";
import { Farm } from "domain/models/Farm";
import { HealthStatus } from "domain/models/HealthStatus";
import { Producer } from "domain/models/Producer";

export interface IHealthStatusUseCase {
  getStatus(): HealthStatus
}

export interface IProducerUseCase {
  createProducer(producer: ProducerParam): Promise<Producer>;
  updateProducer(id: string, farm: ProducerParam): Promise<Farm>;
  findProducer(): Promise<Producer[]>;
}

export interface IFarmUseCase {
  createFarm(farm: FarmParam): Promise<Farm>;
  updateFarm(id: string, farm: FarmParam): Promise<Farm>;
  findFarm(): Promise<Farm[]>;
}