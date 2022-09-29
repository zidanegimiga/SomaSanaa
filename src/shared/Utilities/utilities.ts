/**
 * truncates a string by the length supplied in the argument
 * args: string, length
 * return: string  
 */

export const useTruncate = (str: string, len: number): string => {
  if (str.length > len) {
    if (len <= 3) {
      return str.slice(0, len - 3) + "...";
    } else {
      return str.slice(0, len) + "...";
    }
  } else {
    return str;
  }
};
