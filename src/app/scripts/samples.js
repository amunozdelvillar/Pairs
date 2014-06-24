//basic "short circuit" with || (logical OR)
function documentTitle(theTitle){
	if(!theTitle){
		theTitle = "Untitled Document";
	}
}

function documentTitle(theTitle){
	theTitle = theTitle || "Untitled Document";
}

/*JavaScript Falsy Values: null, false, 0 undefined, NaN, and “” (this last item is an empty string).
— Note that Infinity, which is a special number like NaN, is truthy; it is not falsy, while NaN is falsy.*/

function isAdult(age) {
  if (age && age > 17) {
  return true;
}
else {
  return false;
  }
}
// Explanation:
// — The && operator first evaluates the expression on the left. If it is falsy, false is returned; it does not bother to evaluate the right operand.
// — If the the first expression is truthy, also evaluate the right operand (the expression on the right) and return the result.

function isAdult(age) {
   return age && age > 17 ;
}


if (userName) {
  logIn (userName);
}
 else {
   signUp ();
}

// userName && logIn (userName) || signUp ();

// Explanation:
// — If userName is truthy, then call the logIn function with userName as the parameter.
// — If userName is falsy, call the signUp function


var userID;
if (userName && userName.loggedIn) {
  userID = userName.id;
}
else {
  userID = null;
}


var userID = userName && userName.loggedIn && userName.id;
// Explanation:
// — If userName is truthy, call userName.loggedIn and check if it is truthy; if it is truthy, then get the id from userName.
// — If userName is falsy, return null.


// Powerful Uses of Immediately Invoked Function Expressions
// (How Immediately Invoked Function Expressions Work and When to Use Them)
// IIFE (pronounced “Iffy”) is an abbreviation for Immediately Invoked Function Expression, and the syntax looks like this:
(function () {
 // Do fun stuff
 }
)()


