export interface IRepository<T> {
  save(data: T);
  update(id: string, data: T);
  findAll();
}