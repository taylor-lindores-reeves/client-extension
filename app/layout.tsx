import Header from "components/header";
import React, { PropsWithChildren } from "react";
import Provider from "@client-extension/components/provider";
import { getServerSession } from "next-auth";
import { options } from "@client-extension/lib/auth";

import "@client-extension/app/styles.css";

async function Layout({ children }: PropsWithChildren) {
	const session = await getServerSession(options);

	return (
		<html lang="en">
			<body>
				<Provider session={session}>
					<Header />
				</Provider>
				<main>{children}</main>
			</body>
		</html>
	);
}

export default Layout;
