import EnvConfig from './config/env';
import AppDataSource from '../infra/database/config/data-source';
import app from './config/app';

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })


app.listen(EnvConfig.SERVER_PORT, () => console.log(`server running on port ${EnvConfig.SERVER_PORT}`));