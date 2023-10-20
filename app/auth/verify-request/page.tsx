import db from "@client-extension/lib/db";
import { redirect } from "next/navigation";
import React from "react";

export const VerifyRequest = async () => {
	const me = await db.user.current();
	if (me) redirect("/");
	return (
		<>
			<h2 className="text-xl font-semibold">Check your email</h2>
			<p>A sign in link has been sent to your email address.</p>
		</>
	);
};

export default VerifyRequest;
