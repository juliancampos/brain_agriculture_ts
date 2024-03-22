import { Producer } from "infra/database/entities/Producer";

export interface IFarmRepository<T> {
  save(data: T);
  update(id: string, data: T);
  findAll();
  setProducer(id: string, producerId: Producer);
  findOne(id: number);
}