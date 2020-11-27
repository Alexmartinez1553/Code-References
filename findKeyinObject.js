/* This method returns the key of the first element predicate returns truthy for.
*/

//* Arguments
//? @object (Object): The object to inspect.
//? @predicate (Function): The function invoked per iteration.

//Todo Returns
//? (*): Returns the key of the matched element, else undefined.

const findKey = (object, predicate) => {
    for(x in object) {
      let value = object[x];
      let predicateReturnValue = predicate(value);
      if(predicateReturnValue) {
        return x;
      }
    }
    return undefined;
  }

  //* Examples

  const users = {
    'barney':  { 'age': 36, 'active': true },
    'fred':    { 'age': 40, 'active': false },
    'pebbles': { 'age': 1,  'active': true }
  };

  console.log(findKey(users, function(o) { return {'age': 36, 'active': true} }));
  // Output 'barney'