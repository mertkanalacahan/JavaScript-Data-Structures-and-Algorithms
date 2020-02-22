function getDigit(num, i)
{
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num)
{
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums)
{
  var max = nums.reduce(function(a, b){
  return ( a > b ? a : b ); });

  return digitCount(max);
}

function radixSort(arr)
{
    let maxDigitCount = mostDigits(arr);

    for(let i = 0; i < maxDigitCount; i++)
    {
      let digitBuckets = Array.from({length: 10}, () => [])

      for(let j = 0; j < arr.length; j++)
      {
        digitBuckets[getDigit(arr[j], i)].push(arr[j]);
      }

      arr = [].concat(...digitBuckets);
    }

    return arr;
}