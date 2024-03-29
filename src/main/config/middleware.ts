import { Express, json } from 'express';
import { Request, Response, NextFunction } from 'express'

const cors = (req: Request, res: Response, next: NextFunction): void => {
  res.set('access-control-allow-origin', '*')
  res.set('access-control-allow-methods', '*')
  res.set('access-control-allow-headers', '*')
  next()
}

export default (app: Express): void => {
  app.use(json())
  app.use(cors)
}