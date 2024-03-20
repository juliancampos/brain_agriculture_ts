export interface IRepository {
  save<T>(data: T): Promise<T>
}