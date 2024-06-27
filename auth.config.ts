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
            const isGoingToMain = nextUrl.pathname == '/'
            const isGoingToSignUp = nextUrl.pathname.startsWith('/signup')
            console.log(nextUrl.pathname)

            if(isGoingToAddCategory || isGoingToAddProduct || isGoingToContactMe || isGoingToProducts || isGoingToProfile || isGoingToMain) {
                if(isLoggedIn) {
                    return true;
                }
                return false;
            }
            if(isGoingToSignUp) {
                return true;
            }

            return true;
        },
    },
    secret: "oKbM01gEHGSjjPmjhmdxD8XF/jNSC5G+3agrahLXYNw="
} satisfies NextAuthConfig;