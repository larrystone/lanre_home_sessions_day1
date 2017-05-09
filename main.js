'use strict';

module.exports = {

 /* Perform action based on data type */
 dataTypes: (data) => {

  //edge cases
   if (data === null || data === undefined || data === NaN) {
    return 'no value';
   }

   //for strings
   if (typeof data === 'string') {
    return data.length;
   }

   //for boolean
   if (typeof data === 'boolean') {
    return data;
   }

   //for numbers
   if (typeof data === 'number') {
    if (data < 100)
      return 'less than 100';
    else if (data > 100)
      return 'more than 100';
    else
      return 'equal to 100';
   }

   //for array
   if (typeof data === 'object') {
    return data[2];
   }

   if (typeof data === 'function') {
    return data(true);
   }   
  },
}
