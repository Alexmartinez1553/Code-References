/* Creates an array of elements split into groups the length of size. 
   If array can't be split evenly, the final chunk will be the remaining elements.
*/

//* Arguments
//? @array (Array): The array to process.
//? @size (number): The length of each chunk

//Todo Returns
//? (Array): Returns the new array of chunks.

const chunk = (array, size) => {
    if(size === undefined) {
      size = 1;
    }
    let newArray = [];
    for(let i = 0; i < array.length; i+=size) {
    newArray.push(array.slice(i, i + size));
    }
    return newArray;
  }

  //* Examples

  console.log(chunk(['a', 'b', 'c', 'd'], 2));
  // Output [['a', 'b'], ['c', 'd']]
  console.log(chunk(['a', 'b', 'c', 'd'], 3));
  // Output [['a', 'b', 'c'], ['d']]
  console.log(chunk(['a', 'b', 'c', 'd']));
  // Output [['a'], ['b'], ['c'], ['d']]