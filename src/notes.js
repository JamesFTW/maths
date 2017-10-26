//Item 53: Maintain Consistent Conventions
  //One of the key concentions is argument order.
    //User interface libraries, for instance, usually have functions that accept multiple measurements
    //such as width and height.

    var width = new Widget(320,240) // width: 320, heigh:240

  //Things to Remember
    /** Use consisten conventions for variable names and function signatures.
    /** Don't deviate from convections your users are likely to encouter in other parts of their development playform. **/

//Item 54: Treat undefined As "No Value"
  //The undefined value is special:  Whenever JavaScript has no specific value to provide
  //it just produces undefined.

  var x
  x //undefined

  var obj = {}
  obj.x //undefined

  function f(){
    return
  }
  f() //undefined

  //In each of these situations, the undefined value indicates that the operation did not result in a specific value.
  //Treating undefined as the absence of an specific value is convention established by the language.
