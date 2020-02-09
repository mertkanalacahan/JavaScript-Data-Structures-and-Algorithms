//two arrays are given
//second array must include squared values of every element in first array
//frequency must be the same. 
//two 2's in first array? must be two 4's in second

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const counter1 = {};
  for (const value of arr2) {
    counter1[value] = ++counter1[value] || 1; //non-existent || 1 = 1. This is initializing to 1, effectively.
  }
  for (const value of arr1) {
    if (!counter1[value ** 2]) {
      return false;
    }
    counter1[value] = counter1[value] - 1;
  }
  return true;
}