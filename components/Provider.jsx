"use client";

import React from "react";

import { SessionProvider } from "next-auth/react";

// eslint-disable-next-line react/function-component-definition
const Provider = ({ children, session }) => {
  // eslint-disable-next-line prettier/prettier
  return(
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
};

export default Provider;
