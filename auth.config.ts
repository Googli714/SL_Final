import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
        signOut: '/signout'
    },
    providers: [],
    callbacks: {
        // @ts-ignore
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;

            if (isLoggedIn) {
                return true;
            }
            return false;
        },
    },
} satisfies NextAuthConfig;