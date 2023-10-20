"use client";

import { signIn } from "next-auth/react";

export default function AccessDenied() {
	return (
		<>
			<h2 className="text-xl font-semibold">Access denied</h2>
			<p>
				<a
					href="/api/auth/signin"
					onClick={(e) => {
						e.preventDefault();
						signIn();
					}}
				>
					You must be signed in to view this page
				</a>
			</p>
		</>
	);
}
