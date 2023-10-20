import SignIn from "@client-extension/components/signin";
import db from "@client-extension/lib/db";
import { redirect } from "next/navigation";
import React from "react";

export default async function SignInPage() {
	const me = await db.user.current();
	if (me) redirect("/");
	return <SignIn />;
}
