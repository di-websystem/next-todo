import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const findUserByCredentials = (credentials: Record<string, string>) => {
  if (
    credentials.email === process.env.USER_EMAIL &&
    credentials.password === process.env.USER_PASSWORD
  ) {
    return { id: 1, name: 'name-hoge' };
  } else {
    return null;
  }
};

const options = {
  providers: [
    Providers.Credentials({
      name: 'Email',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'email@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const user = findUserByCredentials(credentials);
        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
};

const handler = (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  return NextAuth(req, res, options);
};

export default handler;
