import React from "react";
import { NextPage } from "next";

const MainPage: NextPage = () => {
	return (
		<div className="space-y-3">
			<h1>NextAuth.js Server Side Rendering Example</h1>
			<p>
				This site explicitely uses the <strong>getServerSession()</strong>{" "}
				method in combination with a Prisma client extension which allows us to
				create a custom query to retrieve the current user from the session:{" "}
				<strong>db.client.current()</strong>.
			</p>
			<p>
				Using <strong>getServerSession()</strong> is the recommended approach if
				you need to support Server Side Rendering with authentication. The
				advantage of Server Side Rendering is this page does not require client
				side JavaScript. This means it will work with JavaScript disabled, and
				will also be compatible with web crawlers.
			</p>
		</div>
	);
};

export default MainPage;
