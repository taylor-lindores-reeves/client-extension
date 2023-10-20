import { getServerSession } from "next-auth";

import AccessDenied from "@client-extension/components/access-denied";
import { options } from "@client-extension/lib/auth";

export default async function ProtectedPage() {
	const session = await getServerSession(options);

	// If no session exists, display access denied message
	if (!session) return <AccessDenied />;

	// If session exists, display content
	return (
		<>
			<h1>Protected Page</h1>
			<p>
				<pre>{JSON.stringify(session, null, 2)}</pre>
			</p>
		</>
	);
}
