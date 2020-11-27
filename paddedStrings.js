/* Pads string on the left and right sides if it's shorter than length. 
   Padding characters are truncated if they can't be evenly divided by length.
*/

//* Arguments 
//? @text(string): The string to pad.
//? @padLength(number): The padding length.
//? @paddingChar(string): The string used as padding. @Default is ' ' (space).

//TODO Returns 
//?(string): Returns the padded string.

const paddedString = (text, padLength, paddingChar) => {
    if(text.length > padLength) {
      return text;
    }

    let startPadddingLength = Math.floor((padLength - text.length) / 2);
    let endPadddingLength = padLength - text.length - startPadddingLength;
    let paddedString;
    if (paddingChar === undefined) {
        paddedString = (' ').repeat(startPadddingLength) + text + (' ').repeat(endPadddingLength);
    } else {
        paddedString = (paddingChar).repeat(startPadddingLength) + text + (paddingChar).repeat(endPadddingLength);
    }

  return paddedString;    
  }

  console.log(paddedString('abc', 9));
  // Output: '   abc   '
  
  console.log(paddedString('abc', 9, '*'));
  // Output: '***abc***'

  console.log(paddedString('abc', 2));
  // Output: 'abc'
