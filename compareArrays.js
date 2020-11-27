/* Compares two arrays and finds how many elements are identical and in the same locations.
*/

//* Arguments
//? @firstArray(array): First array to compare.
//? @secondArray(array): Second array that will be compared with the previous array.

//Todo Prints message

const compareArrays = (firstArray, secondArray) => {
    let count = 0;
    for(let i = 0; i < secondArray.length; i++) {
      if(secondArray[i] === firstArray[i]) {
          count++;
      }
    }
    let comparison = ((count / firstArray.length) * 100).toFixed(2);
    console.log(`First array and Second array have ${comparison}% elements in common.`)
  }

  //* Examples
let example1 = ['a', 'b', 'c', 'd', 'e', 'a', '5', '6', '7', '8'];
let example2 = ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4'];
compareArrays(example1, example2);
  // Output 'First array and Second array have 50.00% elements in common.'