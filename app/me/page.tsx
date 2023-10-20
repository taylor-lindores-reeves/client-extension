import db from "@client-extension/lib/db";

export default async function MePage() {
	const me = await db.user.current();

	return <p>{me ? `Signed in as ${me.email}.` : "You are not signed in."}</p>;
}
