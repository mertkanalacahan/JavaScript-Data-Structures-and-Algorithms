//with middle as pivot
function swap(items, idx1, idx2)
{
    let temp = items[idx1];
    items[idx1] = items[idx2];
    items[idx2] = temp;
}

function partition(arr, left, right)
{
    let pivot = arr[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j)
    {
        while (arr[i] < pivot)
        {
            i++;
        }

        while (arr[j] > pivot)
        {
            j--;
        }

        if (i <= j)
        {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    
    return i;
}

function quickSort(arr, left = 0, right = arr.length - 1)
{ 
    let index;

    if (arr.length > 1)
    {
        index = partition(arr, left, right);
        
        if(left < index - 1)
        {
            quickSort(arr, left, index - 1);
        }
        if(index < right)
        {
            quickSort(arr, index, right);
        }
    }
    
    return arr;
}