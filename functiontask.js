// Basic Function Tasks (10)
//Write a function to print "Hello, World!".
function helloWorld(){
    console.log("Hello, World!")
}
helloWorld();
//Write a function that takes a number and prints its square.
function square(num){
   console.log(num*num);
}
square(5);
//Write a function that returns the sum of two numbers.
function sum(a,b){
    return a+b;
}
let result=sum(2,3);
console.log(result);
//Write a function to check if a number is even or odd.
function EvenOdd(num){
    if(num%2===0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
EvenOdd(7);
EvenOdd(6);
//Write a function to find the maximum of two numbers.
function maximum(a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}
let max=maximum(3,7);
console.log(max);
//Write a function to calculate the factorial of a number.
function fact(n){
   if(n<0){
    console.log("no factorial for negative numbers")
   }
   let result=1
   for(i=1;i<n;i++){
    result*=i;
   }
   return result;
}
let factorial=fact(7);
console.log(factorial);
//Write a function to return the length of a given string.
function stringLength(a){
      return a.length;
}
let string=stringLength('hello ');
console.log(string);
//Write a function that takes a string and returns it in uppercase.
function upperCase(name){
 return name.toUpperCase();
}
const string1=upperCase("helo");
console.log(string1);
//Write a function that adds all numbers in an array.
function addArray(numbers){
    sum=0;
    for(i=0;i<numbers.length;i++){
        sum+=numbers[i]  
    }
    return sum;
}
let newArray=addArray([2,4,3,5,6])
console.log(newArray);
//Write a function that reverses a string.
function reverseString(str){
    let reversed="";
   for(i=str.length-1;i>=0;i--){
    reversed+=str[i];
}
return reversed;
}
let reverse=reverseString("hello");
console.log(reverse);
// Intermediate Function Tasks (10)
//Write a function to find the minimum number in an array.
function findMin(numbers) {
  let min=numbers[0]
  for(i=1;i<numbers.length;i++){
    if(numbers[i]<min){
        min=numbers[i]
    }

  }
  return min
}
console.log(findMin([3, 7, 2, 9, 5]));
//Write a function that checks if a number is prime.
function prime(n){
  if(n<1){
    console.log("not prime")
  }
  for(let i=2;i<=Math.sqrt(n);i++){
    if(n%i===0){
        console.log(n +"is prime")
    }else{
        console.log(n+"not prime")
    }
   
  }
  return true
}
let PRIME=prime(10);
console.log(PRIME);
//Write a function that counts the number of vowels in a string.
function countVowel(string){
    let count=0
    let vowel="aeiouAEIOU"
    for(i=0;i<string.length;i++){
        if(vowel.includes(string[i])){
            count++;
        }
    }
     return count;
}
letvowel=countVowel("HelloJavascript");
console.log(letvowel);
//Write a function that checks if a given string is a palindrome.
function palindrome(str){
    let reversed=str.split("").reverse().join("");
    
    return str===reversed;
}
console.log(palindrome("madam"));
//Write a function to generate the Fibonacci sequence up to n terms.
function fibanocci(n){
    let fib=[0,1]
    for(i=2;i<n;i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib.slice(0,n);
}
console.log(fibanocci(5));
console.log(fibanocci(8));
//Write a function to convert Celsius to Fahrenheit.
function celseiustoFaranheat(celsius){
    let faranheat=(celsius*(9/5)+32);
    return faranheat;
}
console.log(celseiustoFaranheat(28));
//Write a function to calculate the area of a circle (use Math.PI).
function circleArea(r){
 let area=Math.PI*r*r
 return area;
}
console.log(circleArea(5));
//Write a function that takes an array of numbers and returns only the even numbers.
function evenNumbers(array){
    let even=[]
    for(i=0;i<array.length;i++){
    if(array[i]%2===0){
     even.push(array[i])
    }} 
    return even;
}
console.log(evenNumbers([3,4,5,7,8,9]));
//Write a function that merges two arrays.
function merge(arr1,arr2){
    return arr1.concat(arr2);

}
console.log(merge([1,3,5,4],[8,9,10]));
//Write a function that finds the largest word in a string.
function largestWord(str){
    let word=str.split(" ");
    let largest=''
    for(i=0;i<word.length;i++){
        if(word[i].length>largest.length){
            largest=word[i];
        }
    }
    return largest
}
console.log(largestWord("java script"));