/* Returns an object that contains the properties that correspond to the parameters provided. 
*/

//* Arguments
//? @firstParam(any)
//? @secondParam(any)

//Todo Returns
//? (object): Object with parameters corresponding its respective property

const createObject = (firstParam, secondParam) => {
    return ({
      firstProperty: firstParam,
      secondProperty: secondParam
    });
}

  //* Examples
    console.log(createObject('String', 10));
  // Output { firstProperty: 'String', secondProperty: 10 }