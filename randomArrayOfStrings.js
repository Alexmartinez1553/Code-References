/* Creates a random single array of strings
*/

//* Arguments
//? @None

//Todo Returns
//? (array): Returns random array of strings

// Returns a random string
const returnRandomString = () => {
    const word = ['What', 'Who', 'Where', 'When']
    return word[Math.floor(Math.random() * word.length)] 
}
  
const arrayOfStrings = () => {
  const newString = []
  for (let i = 0; i < 4; i++) {
    newString.push(returnRandomString())
  }
  return newString
}
  //* Examples
  console.log(arrayOfStrings());
  // Output Random array of strings