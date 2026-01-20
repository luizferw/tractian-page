"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import GetDemoDialog from "../dialogs/GetDemoDialog/GetDemoDialog";

type GetDemoDialogCtx = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  setOpen: (v: boolean) => void;
};

const Ctx = createContext<GetDemoDialogCtx | null>(null);

export function useGetDemoDialog() {
  const ctx = useContext(Ctx);
  if (!ctx)
    throw new Error(
      "useGetDemoDialog must be used within GetDemoDialogProvider",
    );
  return ctx;
}

export function GetDemoDialogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setOpen] = useState(false);

  const value = useMemo<GetDemoDialogCtx>(
    () => ({
      isOpen,
      open: () => setOpen(true),
      close: () => setOpen(false),
      setOpen,
    }),
    [isOpen],
  );

  return (
    <Ctx.Provider value={value}>
      {children}
      <GetDemoDialog />
    </Ctx.Provider>
  );
}
