export const dbConfig = {
  port: process.env.PORT || 4000,
  host: process.env.HOST || 'localhost',
  database: process.env.DATABASE || 'tyWithNode',
  dbPort: Number(process.env.DB_PORT || 5432),
  userName: process.env.USER_NAME || 'postgres',
  password: process.env.PASSWORD || 'sameer',
};
