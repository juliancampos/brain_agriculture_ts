import { Request, Response, Express } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express'

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      titl: 'Rest API Docs',
      version: '1.0.0'
    }
  },
  apis: ['./src/main/routes/*.ts']
}

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Express, port: number) {
  app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  app.get('/docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  console.log(`Docs available at http://localhost:${port}/docs`);
}

export default swaggerDocs;
