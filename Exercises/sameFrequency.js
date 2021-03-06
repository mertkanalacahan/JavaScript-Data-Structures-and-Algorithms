//return true if numbers are used in same frequency in two input integers. 182-281 true, 182-211 false
function sameFrequency(int1, int2){
  let firstCounter = {};
  let secondCounter = {};
  let lastDigit = 0;
  
  while(int1 > 0)
  {
      lastDigit = int1 % 10;
      firstCounter[lastDigit] = ++firstCounter[lastDigit] || 1;
      int1 = Math.floor(int1 / 10);
  }
  
  while(int2 > 0)
  {
      lastDigit = int2 % 10;
      secondCounter[lastDigit] = ++secondCounter[lastDigit] || 1;
      int2 = Math.floor(int2 / 10);
  }
  
  for(let key in firstCounter)
  {
      if(!(key in secondCounter)) return false;
      
      if(firstCounter[key] !== secondCounter[key]) return false;
  }
  
  return true;
}