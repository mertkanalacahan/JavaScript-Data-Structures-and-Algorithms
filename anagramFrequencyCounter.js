//cinema is anagram of iceman. that's what an anagram is.

function validAnagram(str1, str2){
  if(str1.length !== str2.length) return false;
  
  let secondArrayCounter = {};
  
  for(let char of str2)
  {
      secondArrayCounter[char] = ++secondArrayCounter[char] || 1;
  }
  
  for(let char of str1)
  {
      if(!secondArrayCounter[char]) return false;
      
      secondArrayCounter[char] = secondArrayCounter[char] - 1;
  }
    
  return true;
}