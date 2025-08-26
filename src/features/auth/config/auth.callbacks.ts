import type { Session, User } from 'next-auth';
import type { JWT } from 'next-auth/jwt';

import { generateAccessToken, refreshTokenIfNeeded } from '../lib/utils';

export const jwtCallback = async ({ token, user }: { token: JWT; user?: User }) => {
  if (user) {
    token.user = user;
    token.accessToken = await generateAccessToken(Number(user.id));
    token.refreshToken = user.refreshToken;
    token.accessTokenExpires = Date.now() + 2 * 60 * 1000;

    return token;
  }

  const refreshedToken = refreshTokenIfNeeded(token);

  return refreshedToken;
};

export const sessionCallback = ({ session, token }: {
  session: Session;
  token: JWT;
}) => {
  session.user = token.user as any;
  session.accessToken = token.accessToken;
  session.refreshToken = token.refreshToken;
  
  return session;
};
