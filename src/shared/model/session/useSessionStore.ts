import { create } from "zustand";
import { persist } from "zustand/middleware";

type SessionState = {
  accessToken: string | null
  user: { id: string; email: string } | null
  status: 'loading' | 'authenticated' | 'unauthenticated'
  setSession: (data: { accessToken: string; user: any }) => void
  clearSession: () => void
}

export const useSessionStore = create<SessionState>()(
  persist(
    (set) => ({
      accessToken: null,
      user: null,
      status: "unauthenticated",

      setSession: ({ accessToken, user }) =>
        set({ accessToken, user, status: 'authenticated' }),

      clearSession: () =>
        set({ accessToken: null, user: null, status: 'unauthenticated' }),
    }),
    {
      name: 'session-storage',
    }
  )
)