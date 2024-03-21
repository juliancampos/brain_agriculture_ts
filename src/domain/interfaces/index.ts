import { ProducerParam } from "domain/dtos";
import { HealthStatus } from "domain/models/HealthStatus";
import { Producer } from "domain/models/Producer";

export interface IHealthStatusUseCase {
  getStatus(): HealthStatus
}

export interface IProducerUseCase {
  createProducer(producer: ProducerParam): Promise<Producer>;
  findProducer(): Promise<Producer[]>;
}