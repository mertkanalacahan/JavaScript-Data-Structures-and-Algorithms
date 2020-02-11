//array must be sorted
//if array is not sorted, we are out of luck
//linear search is the only other option UNLESS we know that
//input array can be sorted in a time shorter than O(n)
function binarySearch(array, val)
{
    let start = 0;
    let end = array.length - 1;

    while(start <= end)
    {
        let midIndex = Math.floor((start + end) / 2);

        if(array[midIndex] < val)
            start = midIndex + 1;
        
        else if(array[midIndex] > val)
            end = midIndex - 1;
        
        else
            return midIndex;
    }

    return -1;
}