/* Create a new array by randomly selecting one element in the original array and changing it.
*/

//* Arguments
//? @arrayToChange(array): Original array that will change.

//Todo Returns
//? @arrayToChange(array): Original array with one element changed.

const returnRandomChar = () => {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return randomChars.charAt([Math.floor(Math.random() * randomChars.length)]); 
}

function changeArray(arrayToChange) {
    let index = Math.floor(Math.random() * arrayToChange.length);
    let random = returnRandomChar();
    while(random === arrayToChange[index]) {
      random = returnRandomChar();
    }
    arrayToChange.splice(index, 1, random);
  }

  //* Examples
  let example = ['Which', 'word', 'will', 'change?'];
  changeArray(example);
  console.log(example);
  // Output: One element in @example will change.