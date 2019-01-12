/**
 * Gets the smallest of two numbers.
 * 
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number} The min of x and y
 */
function min(x, y) {
  if (x < y){
    return x
  }
  else{
    return y
  }
}

module.exports = min