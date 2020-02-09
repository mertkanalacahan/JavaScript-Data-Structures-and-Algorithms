//multiple pointers method is used to solve these questions.

//return the first pair where the sum is 0.
function sumZero(arr)
{
  let left = 0;
  let right = arr.length - 1;
  let sum = 0;

  while(left < right)
  {
    sum = arr[left] + arr[right];

    if(sum === 0) return [arr[left], arr[right]];

    if(sum > 0) right--;

    else left++; 
  }
}

//accepts a sorted array and removes duplicates/returns unique value count
//what I mean by "removes duplicates" is that you DO get an array of unique values. 
//it is between index 0-i.
function countUniqueValues(arr){
    
    if(arr.length < 1) return 0;
    
    let i = 0, j = 1;
    
    while(j < arr.length)
    {
        if(arr[i] !== arr[j])
        {
            i++;
            arr[i] = arr[j];
        }
		
		j++;
    }
  
    return i + 1;
}