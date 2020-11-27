/* Create multiple instances of an array and store it within one array.
*/

//* Arguments
//? @numberOfInstances(number): Number of arrays to create.

//Todo Returns
//? (array): New array that contains instances of array.

const arrayWithArrays = (numberOfInstances) => {
  let newArray = [];
  for(let i = 0; i < numberOfInstances; i++) {
    let newInstance = [];
    newArray.push(newInstance);
  }
  return newArray;
}
  //* Examples
console.log(arrayWithArrays(5));
  // Output [ [], [], [], [], [] ]