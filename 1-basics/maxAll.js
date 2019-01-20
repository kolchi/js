/**
 * Gets the max of an array of numbers.
 * 
 * @param  {Array} numbers
 * @return {Number} The max of the numbers
 */
function maxAll(numbers) {
  let max = numbers[0]
    for (let i = 1 ; i < numbers.length ; i++ ){
      if (max < numbers[i]) {
       max = numbers[i] 
    }
    }
    return max
}

module.exports = maxAll