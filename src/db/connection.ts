import mysql from 'mysql2';

type TDBconfig = {
  host: string;
  user: string;
  password: string;
  database: string;
  port: number;
};

const dbconfig: TDBconfig = {
  host: process?.env?.DB_HOST || 'localhost',
  user: process?.env?.DB_USERNAME || 'root',
  password: process?.env?.DB_PASSWORD || 'B2x!3pzG',
  database: process?.env?.DB_DATABASE || 'react_sample',
  port: (process?.env?.DB_PORT && parseInt(process.env.DB_PORT, 10)) || 3306,
};

export default mysql.createConnection(dbconfig);
