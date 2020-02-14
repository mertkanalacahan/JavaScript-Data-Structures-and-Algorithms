function bubbleSort(arr)
{
    let noSwaps = false;

    for(let i = arr.length; i > 0; i--)
    {
        noSwaps = true;
        for(let j = 0; j < i - 1; j++)
        {
            if(arr[j] > arr[j+1])
            {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

function selectionSort(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++)
        {
            if(arr[j] < arr[minIndex])
            {
                minIndex = j;
            }
        }
        
        if(minIndex !== i)
        {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

function insertionSort(arr)
{
    for(let i = 1; i < arr.length; i++)
    {
        let currentVal = arr[i];
        let j = 0;
        
        for(j = i - 1; i >= 0 && arr[j] > currentVal; j--)
        {
            arr[j+1] = arr[j];
        }

        arr[j+1] = currentVal;
    }
    return arr;
}

//MERGE SORT
function merge(arr1, arr2)
{
    let mergedArr = [];
    let i = 0, j = 0;

    while((i < arr1.length) && (j < arr2.length))
    {
        if(arr1[i] < arr2[j])
        {
            mergedArr.push(arr1[i]);
            i++;
        }
        
        else
        {
            mergedArr.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length)
    {
        mergedArr.push(arr1[i]);
        i++;
    }

    while(j < arr2.length)
    {
        mergedArr.push(arr2[j]);
        j++;
    }

    return mergedArr;
}

function mergeSort(arr)
{
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
//MERGE SORT

//QUICK SORT WITH MIDDLE PIVOT
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
//QUICK SORT WITH MIDDLE PIVOT