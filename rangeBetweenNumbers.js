/** Checks if number is between startValue and up to, but not including, endValue. 
* If end is not specified, it's set to start with start then set to 0. 
* If start is greater than end the params are swapped to support negative ranges.
*/

//* Arguments
//? @number(number): The number to check
//? @startValue(number): The start of the range.
//? @endRange(number): The end of the range.

//TODO Returns
//? (boolean): Returns true if number is in the range, else false.

const inRange = (number, startValue, endValue) => {
    if(endValue === undefined) {
      endValue = startValue;
      startValue = 0;
    }
    if(startValue > endValue) {
      let tempValue = endValue;
      endValue = startValue;
      startValue = tempValue;
    }    
    let isInRange = startValue <= number && number < endValue ? true : false;

  return isInRange;
}

console.log(inRange(3, 2, 4));
// Output: true

console.log(inRange(4, 2, 3));
// Output: false

console.log(inRange(4, 8));
// Output: true
