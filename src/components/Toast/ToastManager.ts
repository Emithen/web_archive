let addToastFunction: ((message: string) => void) | null = null;

export function setAddToast(fn: (message: string) => void) {
  addToastFunction = fn;
}

export function toast(message: string) {
  addToastFunction?.(message);
}
