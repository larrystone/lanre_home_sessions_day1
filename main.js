'use strict';

module.exports = {

 /* Perform action based on data type */
 findMinMax: (numbers) => {

  //edge cases
   if (numbers === null || numbers === undefined || numbers === NaN) {
    return 'invalid value';
   }

   //splitSearch runs concurrent search and return array [large, small]
  function splitSearch(i) {
    return numbers[i] > numbers[numbers.length - (i+1)] ? [ numbers[i], numbers[numbers.length - (i+1)] ] : [ numbers[numbers.length - (i+1)], numbers[i] ];
  }

  let largest = numbers[0];
  let smallest = numbers[0];

  for (let i = 0; i < numbers.length/2; i++) {
    let largerSmaller = splitSearch(i);
    
    if (largest < largerSmaller[0])
      largest = largerSmaller[0];
    
    if (smallest > largerSmaller[1])
      smallest = largerSmaller[1];
  }
  
  if (smallest == largest)
    return [smallest];
    
  return [smallest,largest];
  },
}
