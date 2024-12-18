function combineArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArr = combineArrays(arr1, arr2); // This works fine

const arr3 = [1, 2, "3"];
const arr4 = [4, 5, 6];

const combinedArr2 = combineArrays(arr3, arr4); //Type 'string' is not assignable to type 'number'.