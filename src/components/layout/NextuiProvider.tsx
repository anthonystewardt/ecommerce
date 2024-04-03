"use client";
import React from 'react';
import {NextUIProvider} from "@nextui-org/react";

export const NextuiProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <NextUIProvider>
    {children}
  </NextUIProvider>;
};

