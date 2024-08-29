import { NextAuthOptions } from 'next-auth'
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    providers: [
      GoogleProvider({
        clientId: '238141049034-954980kdmjtqin0p7vca4b87ahibk8pa.apps.googleusercontent.com',
        clientSecret: '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',
      })
    ],
} satisfies NextAuthOptions;