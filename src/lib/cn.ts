import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export function cn(...inputs: string[]) {
  return twMerge(clsx(inputs));
}

export function cnRaw (...inputs: string[]) {
  return clsx(inputs);
}