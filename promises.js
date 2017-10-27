// promises....
// are a way to manage async without zillions of callback around and nest, nesting,nesting
// for example...
// $.getJSON(movieUrl, function(movieData){
// 	movieData.resulsts.map((movie)=>{
// 		$.getJSON(movieUrlId, function(thisMovieData){

// 		})
// 	})
// })


// function successCallback(result){
// 	console.log(`success! ${result}`)
// }

// function failureCallBack(result){
// 	console.log(`failure! ${result}`)
// }


// what is a promise?
// all a promise is, is a js constructur that gives you a few methods
// - all
// - race
// - rejct
// - resolve
// - then
// - catch
// let myFristPromise = new Promise((resolve, reject)=>{
// 	// we will run resolve when we are done with our async stuff
// 	// we will run rejct when it fails
// 	setTimeout(function(){
// 		resolve("It's been already 250milliseconds");
// 	}, 250)
// });
// console.log(myFristPromise);
// myFristPromise.then((sucessmessage)=>{
// 	console.log(sucessmessage);
// 	console.log(myFristPromise);
// })
// console.log(myFristPromise);


function one(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("4Seconds have passed");
		},4000)
	});
}

function two(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("2Seconds have passed");
		},2000)
	});
}

var promiseOne = one();
var promiseTwo = two();
// promiseOne.then((messageFromPromise)=>{
// 	console.log(messageFromPromise);
// })
// promiseTwo.then((messageFromPromise)=>{
// 	console.log(messageFromPromise);
// })

// all which hayes mentioned yesterday,
// will wait until every promise in an array of promises has run it's resolve

var promiseArray = [promiseOne, promiseTwo];
Promise.all(promiseArray).then((data)=>{
	console.log("all done!");
})