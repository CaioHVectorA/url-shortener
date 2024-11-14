import { setDatabaseConfig } from '@palmares/databases';
import { NodeStd } from '@palmares/node-std';
import { SequelizeEngine } from '@palmares/sequelize-engine';
import * as migrations from './migrations';
import { Analytics, ShorterLink, User } from './models';

export default setDatabaseConfig({
  databases: {
    default: {
      engine: SequelizeEngine.new({
        dialect: 'sqlite',
        storage: './sequelize.db',
      }),
    },
  },
  locations: [
    {
      name: 'default',
      path: import.meta.dirname, // If your package.json does not contain the "type": "module" in it, change that to __dirname
      getMigrations: () => migrations,
      getModels: () => [Analytics, ShorterLink, User],
    },
  ],
  std: new NodeStd(),
});