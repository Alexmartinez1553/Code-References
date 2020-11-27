/* Creates a random character from a specific string of letters and numbers.
*/

//* Arguments
//? @none

//Todo Returns
//? (array): random character from a string of letters and numbers.

const returnRandomChar = () => {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return randomChars.charAt([Math.floor(Math.random() * randomChars.length)]); 
}

  //* Examples
console.log(returnRandomChar());
  // Output: Random character