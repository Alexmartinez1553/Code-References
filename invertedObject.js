/* Creates an object composed of the inverted keys and values of object. 
   If object contains duplicate values, subsequent values overwrite property assignments of previous values.
*/

//* Arguments
//? @object(object): The object to invert.

//Todo Returns
//? (object): Returns the new inverted object.

const invert = (object) => {
    let invertedObject = {};
    for(x in object) {
      let originalValue = object[x];
      invertedObject[originalValue] = x;
    }
    return invertedObject;
  }

  console.log(invert({ 'a': 1, 'b': 2, 'c': 1}));
  // Output { '1': 'c', '2': 'b' }