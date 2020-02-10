//find the largest sum of n consecutive elements in an array
//O(n)
function maxSubarraySum(arr, n)
{
  if(n > arr.length) return null;

  let maxSum = 0;
  let tempSum = 0;

  for(i = 0; i < n; i++)
  {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for(i = n; i < arr.length; i++)
  {
    tempSum = tempSum + arr[i] - arr[i - n];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}