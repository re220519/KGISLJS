function greet(name,callback){
    console.log("Hello",name);
    callback();
}//Write a function greet(name, callback) that prints "Hello, name" using the callback.

function sum(a,b,callback){
    let result = a+b;
    console.log("Result:", result);
    callback(result);
}//Create a function sum(a, b, callback) that adds two numbers and passes the result to the callback for printing.
function multiply(a,b,callback){
   let product=a*b;
   callback(product);
}//Write a function multiply(a, b, callback) that multiplies two numbers and logs the result via callback.
function fullName(firstName,lastName,callback){
   let name= firstName+" "+lastName;
    callback(name);
}
function showName(full){
    console.log("fullName:",full)
}
fullName("Reshma","k",showName);
//Create a function fullName(firstName, lastName, callback) that combines first and last names and sends to callback.
function checkEven(number,callback){
    let even= number%2===0
    callback(even);

}
function evenOdd(result){
    if(result){
        console.log("even");
    }
    else{
        console.log("false");
    }

}
checkEven(5,evenOdd);
//Write a function checkEven(number, callback) that checks if a number is even and sends true/false to callback.
function goodMorning(callback){
    let message= "Good morning";
    callback(message);
}
function result(msg){
    console.log("message:",msg);
}
goodMorning(result)

//Create a function greetMorning(callback) that passes "Good Morning" to the callback for printing.
function calculateArea(length,width,callback){
    let area= l*w;
    callback(area);
}
function rectangleArea(result){
    console.log("AREA:",result)
}
calculateArea(2,3,rectangleArea);
//Write a function calculateArea(length, width, callback) that computes area of a rectangle and passes it to callback.
//Create a function filterArray(arr, callback) that filters numbers greater than 10 and sends the filtered array to callback.
function filterArray(arr,callback){
    let filter= arr.filter(function(num){
         return num>10;
    }) 
}
callback(filter);
function displayResult(result){
    console.log("filtered array:",result);
}
filterArray([11,23,9,5,3,25],displayResult);  
 //  Write a function convertToUpper(str, callback) that converts a string to uppercase and sends it to callback. 
function convertToUpper(str,callback)  {
    let string = str.toUpperCase();
    callback(string);
}
function upperCase(results){
    console.log("uppercase:",results);
}
convertToUpper("javascript",upperCase) ; 
 //Create a function performOperation(a, b, operationCallback) that takes two numbers and a callback to perform addition, subtraction, or multiplication.
function performOperation(a,b,operationCallback){
   operationCallback(a,b) ;
}
function add(a,b){
    console.log("sum:",a+b);
}
function substraction(a,b){
    console.log("sub:",a-b)
}
function product(a,b){
    console.log("product:",a*b);
}

performOperation(2,3,add);
performOperation(3,4,substraction);
performOperation(3,5,product);
 