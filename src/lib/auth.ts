import { betterAuth } from 'better-auth'
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from './prisma';
import { admin } from 'better-auth/plugins';

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: { 
            clientId: import.meta.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET as string, 
        }, 
    },
    plugins: [
        admin() 
    ]
});