/* Checks if key is a direct property of object.
*/

// * Arguments
//? @object(object): The object to query.
//? @key(Array/String): The key to check.

//TODO Returns
//? (boolean): Returns true if key exists, else false.

const objectHasKey = (object, key) => {
    let hasValue = object[key] != undefined;
    return hasValue;
  }

  //* Examples
  console.log(objectHasKey({'a': 2, 'b': 3}, 'a'));
  // Output true

  console.log(objectHasKey({'a': 2, 'b': 3}, 'c'));
  // Output false