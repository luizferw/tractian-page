"use client";

import { useGetDemoDialog } from "@/components/providers/GetDemoDialogProvider";
import { Button } from "@/components/ui/Button/Button";

export type GetDemoButtonProps = {
  children?: React.ReactNode;
};

export default function GetDemoButton({ children }: GetDemoButtonProps) {
  const { open } = useGetDemoDialog();

  return (
    <Button onClick={() => open()} variant={"outline"}>
      {children}
    </Button>
  );
}
