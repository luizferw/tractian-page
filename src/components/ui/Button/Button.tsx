import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cnRaw } from "@/lib/cn";

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center rounded-[2px] transition ease-in-out duration-150 disabled:cursor-not-allowed px-4 py-2 w-full",
  {
    variants: {
      variant: {
        primary:
          "w-full transition ease-in-out duration-150 disabled:cursor-not-allowed text-center bg-blue-600 text-white font-medium px-4 py-2 bg-blue-600 hover:bg-blue-900 active:bg-blue-950 disabled:bg-slate-300 w-full max-w-full",
        outline:
          "outline outline-1 outline-blue-600 hover:outline-2 active:outline-4 disabled:outline-slate-300 disabled:text-slate-300 text-blue-600",
        ghost: "hover:text-blue-600 hover:bg-blue-50 disabled:text-slate-300",
      },
      size: {
        sm: "text-body-sm px-3 py-1.5",
        md: "text-body-md px-4 py-2",
        lg: "text-body-lg px-6 py-3",
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
      fullWidth: false,
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  };

export function Button({
  children,
  variant,
  size,
  fullWidth,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cnRaw(buttonVariants({ variant, size, fullWidth }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
