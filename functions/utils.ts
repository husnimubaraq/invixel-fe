import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatFieldErrors = (fieldErrors: {
  [key: string]: string[] | undefined;
} | undefined) => {
  return Object.entries(fieldErrors || {}).reduce((acc, [field, error]) => {
    acc[field] = error?.join(", ") || "";
    return acc;
  }, {} as Record<string, string>);
};