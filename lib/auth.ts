import { PrismaAdapter } from "@auth/prisma-adapter";
import EmailProvider from "next-auth/providers/email";
import { db } from "@client-extension/lib/db";
import { AuthOptions } from "next-auth";
import { PrismaClient } from "@prisma/client";

export const options = {
	providers: [
		EmailProvider({
			server: process.env.EMAIL_SERVER,
			from: process.env.EMAIL_FROM
		})
	],
	secret: process.env.NEXTAUTH_SECRET,
	adapter: PrismaAdapter(db as unknown as PrismaClient),
	session: {
		strategy: "database",
		maxAge: 30 * 24 * 60 * 60
	},
	pages: {
		signIn: "/auth/signin",
		verifyRequest: "/auth/verify-request"
	},
	callbacks: {
		async session({ session, user }) {
			session.user = user;
			return session;
		}
	},
	events: {
		async signIn(message) {
			console.log("Signed in!", { message });
		},
		async signOut(message) {
			console.log("Signed out!", { message });
		},
		async createUser(message) {
			console.log("User created!", { message });
		}
	}
} satisfies AuthOptions;
