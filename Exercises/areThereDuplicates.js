//find if there are duplicate elements in given inputs of any count
function areThereDuplicates(){
  let counter = {};
  
  for (let i = 0; i < arguments.length; i++)
  {
    counter[arguments[i]] = ++counter[arguments[i]] || 1;
  }
  
  for(let key in counter)
  {
    if(counter[key] > 1) return true;
  }
  
  return false;
}