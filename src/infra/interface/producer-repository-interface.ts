export interface IProducerRepository<T> {
  save(data: T);
  update(id: string, data: T);
  findAll();
  findOne(id: number);
}