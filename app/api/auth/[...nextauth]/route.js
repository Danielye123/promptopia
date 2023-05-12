import React from "react";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {
    //
  },
  async signIn({ profile }) {
    try {
      // serverLess route -> lambda function
    } catch (error) { }
  },
});

export { handler as GET, handler as POST };
