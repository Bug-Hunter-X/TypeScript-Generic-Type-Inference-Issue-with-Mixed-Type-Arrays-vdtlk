function combineArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

//To fix the issue, we can use type assertion or explicitly define the type
function combineArrays2<T>(arr1: (number | string)[], arr2: (number | string)[]): (number | string)[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArr = combineArrays(arr1, arr2); // This works fine

const arr3 = [1, 2, "3"] as (number | string)[];
const arr4 = [4, 5, 6];

const combinedArr2 = combineArrays2(arr3, arr4); // This works fine now

const combinedArr3 = combineArrays2(arr3, arr2); // this also works fine now