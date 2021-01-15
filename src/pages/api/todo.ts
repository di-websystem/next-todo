import { NextApiRequest, NextApiResponse } from 'next';
import connection from '../../db/connection';

const queryFormat = (query: string) => {
  return query.replace(/\s+/g, ' ').trim();
};

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  return new Promise((resolve) => {
    console.log(req.method);

    if (req.method === 'GET') {
      const query = queryFormat(`
        SELECT
          *
        FROM
          task
      `);

      connection.query(query, (err, rows) => {
        if (err) {
          console.log(err);
          res.status(500).send('error');
        } else {
          res.status(200).json(rows);
        }

        return resolve();
      });
    } else if (req.method === 'POST') {
      const query = queryFormat(`
        INSERT INTO
          task
        SET
          ?
      `);

      connection.query(query, { item: req.body.text }, (err) => {
        if (err) {
          console.log(err);
          res.status(500).send('error');
        } else {
          res.status(200).send('success');
        }

        return resolve();
      });
    }
  });
};

export default handler;
