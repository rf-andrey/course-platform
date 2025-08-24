import type { Session, User } from 'next-auth';
import type { JWT } from 'next-auth/jwt';

export const sessionCallback = (params: {
  session: Session;
  token: JWT;
  user: User;
}) => {
  const { session, token } = params;
  session.user = token.user as any;
  session.refreshToken = token.refreshToken;
  
  return session;
};

export const jwtCallback = (params: { token: JWT; user?: User }) => {
  const { token, user } = params;
  if (user) {
    token.user = user;
    token.refreshToken = user.refreshToken;
  }
  return token;
};
