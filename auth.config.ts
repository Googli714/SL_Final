import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
        signOut: '/signout',
        newUser: '/signup'
    },
    providers: [],
    callbacks: {
        // @ts-ignore
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;

            const isGoingToProducts = nextUrl.pathname.startsWith('/products')
            const isGoingToContactMe = nextUrl.pathname.startsWith('/contactme')
            const isGoingToProfile = nextUrl.pathname.startsWith('/profile')
            const isGoingToAddProduct = nextUrl.pathname.startsWith('/addproduct')
            const isGoingToAddCategory = nextUrl.pathname.startsWith('/addcategory')

            if(isGoingToAddCategory || isGoingToAddProduct || isGoingToContactMe || isGoingToProducts || isGoingToProfile) {
                if(isLoggedIn) {
                    return true;
                }
                return false;
            }

            return true;
        },
    },
    secret: "oKbM01gEHGSjjPmjhmdxD8XF/jNSC5G+3agrahLXYNw="
} satisfies NextAuthConfig;