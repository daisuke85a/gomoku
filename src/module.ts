export const getLastItem = <T>(array: T[] | readonly T[]): T => {
  const max = array.slice(-1)[0];
  if (max === undefined) {
    throw new Error("error in getLast");
  }
  return max;
};
