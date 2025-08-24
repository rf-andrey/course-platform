import { hashPassword } from '@/features/auth/lib/utils';
import { PrismaClient } from '@prisma/client';

export const database = new PrismaClient().$extends({
  query: {
    user: {
      async $allOperations({ operation, args, query }) {
        if (
          (operation === 'create' || operation === 'update') &&
          args.data['password'] &&
          typeof args.data['password'] === 'string'
        ) {
          args.data['password'] = await hashPassword(args.data['password']);
        }
        return query(args);
      },
    },
  },
});
