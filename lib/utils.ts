import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getNameInitial = (name: string) => {
  return name.trim().charAt(0).toUpperCase() || "?";
};
