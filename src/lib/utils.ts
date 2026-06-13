import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines clsx and tailwind-merge for optimal class name handling.
 * - clsx: Conditionally join classNames together
 * - twMerge: Merge Tailwind CSS classes without conflicts
 *
 * @example
 * cn("px-4 py-2", "px-6") // => "py-2 px-6" (px-6 wins)
 * cn("text-red-500", condition && "text-blue-500")
 * cn({ "bg-primary": isActive }, "rounded-lg")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
