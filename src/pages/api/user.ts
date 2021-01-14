import { NextApiRequest, NextApiResponse } from 'next';
import connection from '../../db/connection';

const handler = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  return new Promise((resolve) => {
    const query = `select * from users`;

    connection.query(query, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send('error');
      } else {
        res.status(200).json(rows);
      }

      return resolve();
    });
  });
};

export default handler;
