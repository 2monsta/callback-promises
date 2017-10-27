// in js, functions are first-class objects. you cvan do almost anything to them, that you can do to any object, pass them around, store them in vairables

// somewhere in the bowls of jquery, is this...
var $ = {};
$.click = function(someFunctionTorunlater){
	somefunctionToRunLater();
}



// consider the following code
a(2)(3)
function a(num){
	console.log(num);
}
// the only way thiscode will not error, is if a returns a function
// becasue functions are first-class object, they can be passed around
// so...if a returns a function that takes a parameter, a(2) becomes a function