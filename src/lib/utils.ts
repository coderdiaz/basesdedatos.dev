import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { constants } from './constants';

/**
 * Merges class names using tailwind-merge and clsx
 * @param inputs A list of class names to be merged
 * @returns The merged class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateAbsoluteUrl = (path: string) => constants.BASE_URL.concat(path);

export const isDevelopment = () => import.meta.env.MODE === 'development';

export const includeDraft = (draft: boolean) => {
  if (isDevelopment()) return true;
  return draft !== true;
};