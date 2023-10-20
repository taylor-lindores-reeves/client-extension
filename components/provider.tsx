"use client";

import React, { PropsWithChildren } from "react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

interface Props extends PropsWithChildren<{}> {
	session: Session | null;
}

const Provider: React.FC<Props> = async (props) => {
	const { session, children } = props;
	return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
