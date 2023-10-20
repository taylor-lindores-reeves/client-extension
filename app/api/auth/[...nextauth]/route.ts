import NextAuth from "next-auth/next";
import { options } from "@client-extension/lib/auth";

const handler = NextAuth(options);
export { handler as GET, handler as POST };
