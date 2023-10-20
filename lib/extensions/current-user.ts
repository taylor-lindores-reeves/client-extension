import { options } from "@client-extension/lib/auth";
import { Prisma } from "@prisma/client";
import { getServerSession } from "next-auth";

export function currentUser() {
	return Prisma.defineExtension((client) => {
		return client.$extends({
			model: {
				user: {
					async current() {
						const session = await getServerSession(options);

						if (!session?.user?.email) return null;

						const user = await client.user.findUnique({
							where: { email: session.user.email }
						});

						return user;
					}
				}
			}
		});
	});
}
