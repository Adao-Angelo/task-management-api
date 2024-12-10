import { ConfigService } from '@nestjs/config';
import dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenv.config();

export const configService: ConfigService = new ConfigService({
  envFilePath:
    process.env.NODE_ENV === 'production' ? '.env.production' : '.env',
});

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: configService.get<string>('DB_HOST'),
  port: parseInt(configService.get<string>('DB_PORT')),
  username: configService.get<string>('DB_USERNAME'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_NAME'),
  entities: [],
  migrations: [__dirname, '/migrations/*.ts'],
  synchronize: false,
};

export default new DataSource(dataSourceOptions);
