/* Creates a slice of array with n elements dropped from the beginning.
*/

//* Arguments
//? @array(Array): The array to query.
//? @n(number): The number of elements to drop.

//Todo Returns
//?(Array): Returns the slice of array.

const drop = (array, n) => {
    if(n === undefined){
      n = 1;
    }
    newArray = array.slice(n);
    return newArray;
  }
 
  //* Examples

  console.log(drop([1, 2, 3]));
  // Output [2, 3]
  console.log(drop([1, 2, 3], 2));
  // Output [3]
  console.log(drop([1, 2, 3], 5));
  // Output []
  console.log(drop([1, 2, 3], 0));
  // Output [1, 2, 3]