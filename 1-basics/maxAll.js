/**
 * Gets the max of an array of numbers.
 * 
 * @param  {Array} numbers
 * @return {Number} The max of the numbers
 */
function maxAll(numbers) {
  Number = numbers[0]
    for (i = 1 ; i < numbers.length ; i++ ){
      if (Number < numbers[i]) {
     
       Number = numbers[i] 
    }
    }
    return Number
}

module.exports = maxAll