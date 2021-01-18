import { NextApiRequest, NextApiResponse } from 'next';
import SQL from 'sql-template-strings';
import connection from '../../db/connection';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'GET') {
    const query = SQL`
      SELECT
        *
      FROM
        task
    `;

    const result = await connection(query);

    if ('error' in result) {
      console.log(result);
      res.status(500).send('error');
    } else {
      res.status(200).json(result);
    }
  } else if (req.method === 'POST') {
    const query = SQL`
        INSERT INTO
          task
        SET
          item = ${req.body.text}
      `;

    const result = await connection(query);

    if ('error' in result) {
      console.log(result);
      res.status(500).send('error');
    } else {
      res.status(200).json('success');
    }
  }
};

export default handler;
