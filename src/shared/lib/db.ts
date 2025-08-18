import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

async function debug() {
console.log('DATABASE_URL:', process.env.DATABASE_URL);
const prisma = new PrismaClient();
await prisma.$connect();
const tables = await prisma.$queryRaw<Array<{ table_name: string }>>`SELECT table_name FROM information_schema.tables WHERE table_schema='public';`;
console.log('Tables in public schema:', tables);
}

debug();


export const database = new PrismaClient().$extends({
  query: {
    user: {
      $allOperations({ operation, args, query }) {
        if (
          (operation === 'create' || operation === 'update') &&
          args.data['password'] &&
          typeof args.data['password'] === 'string'
        ) {
          args.data['password'] = bcrypt.hashSync(args.data['password'], 12);
        }
        return query(args);
      },
    },
  },
});
