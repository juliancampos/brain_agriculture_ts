export interface IRepository<T> {
  save(data: T)
  findAll()
}