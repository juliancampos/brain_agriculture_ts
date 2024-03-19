import { Request, Response } from "express";
import { HttpRequest } from "presentation/protocols/http";

const adaptRoutes = (controller: any) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      headers: req.headers
    };

    const httpResponse = await controller.handle(httpRequest);

    if (httpResponse.statusCode === 200) {
      res.status(httpResponse.statusCode).json(httpResponse.body)
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }
  }
};

export default adaptRoutes;
