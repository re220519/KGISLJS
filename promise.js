console.log("Callback Hell in JavaScript");
//Create a Promise that resolves with the message "Promise Resolved Successfully!" and log it using .then().

/*const myMessage = new Promise((resolve)=>{
    resolve("Promise resolved succees");
})
myMessage.then((message)=>{
    console.log(message);
})*/
//Create a Promise that rejects with the message "Promise Rejected!" and handle it using .catch().

const myMessage2= new Promise((resolve,rej)=>{
    rej("Promise Rejected");
})
myMessage2.catch((err)=>{
    console.log(err);
})
//Make a Promise that resolves after 3 seconds using setTimeout(), then print "Data Loaded".
const myData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Data Looaded")
    },3000)
})
myData.then((data)=>{
    console.log(data);
})
//Create a Promise that checks if a number is even. Resolve if even, reject if odd.
const checkNumber = new Promise((resolve,reject)=>{
    let number = 3;
    if(number% 2===0){
        resolve("even");
    }else{
        reject("odd");
    }
})
checkNumber.then((even)=>{
    console.log("Number is :",even);
}).catch((odd)=>{
    console.log("Number is :",odd);
})
//Create a Promise that simulates fetching user data and logs "User data fetched" after 2 seconds.
const dataFetched = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("User data fetched");
    },2000)
})
dataFetched.then((message)=>{
    console.log(message);
})
// Chaining and Multiple Promises
//Chain two Promises: first prints "Fetching data...", then "Processing data...", finally "Completed".
new Promise((resolve,reject)=>{
    resolve("Fetching Data");
}).then((message)=>{
    console.log(message);
    return new Promise((resolve,reject)=>{
        resolve("Processing data");
    }).then((message)=>{
        console.log(message);
        return new Promise((resolve,reject)=>{
            resolve("compleeted");
        }).then((message)=>{
            console.log(message);
        })
    })
})
//Create two Promises — one resolves after 2 seconds and another after 4 seconds — and use Promise.all() to log when both are done.
const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("resolved 1 second");
    },2000)
})
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("resolve 4seconds");
    },4000)
})
Promise.all([promise1,promise2])
.then((message)=>{
    console.log("both are done",message);
})
.catch((err)=>{
    console.log("error",err);
})
//Use Promise.race() with two Promises that resolve at different times, and print which one resolves first.
const firstpromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("first promise");
    },2000);
})
const secondpromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("second promise")
    },1000)
})
Promise.race([firstpromise,secondpromise])
.then((message)=>{
    console.log("First promise resolved:",message);
})
.catch((err)=>{
    console.log(err);
})
//Chain three .then() calls where each step adds a number (e.g., start from 5 → +10 → +20 → +30).
const operation1= new Promise((resolve,reject)=>{
    resolve(5);
}).then((value)=>{
    console.log("initial value:",value);
    return value + 10;
}).then((value)=>{
    console.log("after adding 10 :",value);
    return value + 20
}).then((value)=>{
    console.log("after adding 20:" ,value);
    return value +30
}).then((value)=>{
    console.log("after adding 30:" ,value);
}).catch((err)=>{
    console.log("error",err);
})
//Simulate a file upload process — the Promise should randomly resolve with "Upload Success" or reject with "Upload Failed".
//Basic Promise Task
//Create a Promise called greetingPromise that resolves with "Hello, Student!". Use .then() to log the message to the console
const greetPromise = new Promise((resolve,reject)=>{
    resolve("Hello, Student!");
})
greetPromise.then((value)=>{
    console.log(value);
})
//Create a Promise called evenCheck that takes a number num. If num is even, resolve with "Even Number", otherwise reject with "Odd Number". Test it with num = 7.
const evenCheck = new Promise((resolve,reject)=>{
    let num = 7 ;
    if (num % 2 === 0)
        resolve("Even Number");
    else{
        reject("odd Number");
    }
 })
 evenCheck.then((value)=>{
          console.log(value);
    }) .catch((err)=>{
        console.log("number 7 is:",err);
    })
//Write a Promise called dataLoad that waits 3 seconds using setTimeout() and then resolves with "Data Loaded Successfully". Log the result using .then().

const dataLoad=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Data Loaded Succesfully");
    },3000)
})
dataLoad.then((value)=>{
    console.log(value);
})
//Create a Promise called fileUpload that randomly resolves with "Upload Successful" or rejects with "Upload Failed". Handle both outcomes using .then() and .catch().
const fileUpload = new Promise((resolve,reject)=>{
    const resolves= Math.random()>0.8;
   // const name=true;
    if (resolves){
        resolve("Upload successfully");
    }else{
        reject("Upload failed ");
    }

 })
 fileUpload.then((value)=>{
    console.log(value);
 })
 .catch((err)=>{
    console.log(err);
 })
 //Create a Promise called multiplyByTwo that takes a number and resolves with the number multiplied by 2. Use .then() to log the result.

const multiplyByTwo = new Promise((resolve,reject)=>{
    let num= 10;
    resolve(num*2);
})
multiplyByTwo.then((value)=>{
   console.log("result= num*2:",value);
})
/*Create three Promises:
p1 resolves "Promise 1 Done" after 1 second,p2 resolves "Promise 2 Done" after 2 seconds,
p3 resolves "Promise 3 Done" after 3 seconds. Use Promise.all([p1, p2, p3]) to log an array of results when all Promises complete.*/
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 1 Done");
    },1000)
})
const p2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 2 Done")
    },2000)
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise 3 Done");
    },3000)
})
Promise.all([p1,p2,p3])
.then((value)=>{
    console.log(value);
    console.log("all the promise compleeted");
})
.catch((error)=>{
console.log(error);
})
/*Simulate fetching data for three students:
student1 resolves {name:"Alice"} after 1s,
student2 resolves {name:"Bob"} after 2s,
student3 resolves {name:"Charlie"} after 3s.
Use Promise.all() to log all student objects together.*/
const student1= new Promise((resolve,reject)=>{
    let s1= {name:"Alice"}
    setTimeout(()=>{
        resolve(s1);
    },1000)
})
const student2= new Promise((resolve,reject)=>{
    let s2= {name:"Bob"}
    setTimeout(()=>{
        resolve(s2);
    },2000)
})
const student3= new Promise((resolve,reject)=>{
    let s3= {name:"Charlie"}
    setTimeout(()=>{
        resolve(s3);
    },3000)
})

Promise.all([student1,student2,student3])
.then((value)=>{
    console.log(value);
})
.catch((err)=>{
    console.log(err);
})
//Create two resolving Promises and one rejecting Promise. Use Promise.all() and .catch() to handle the error, logging "Error in one of the Promises".
const p11=new Promise((resolve,reject)=>{
    resolve("resolve1");
})
const p22=new Promise((resolve,reject)=>{
    resolve("resolve2");
})  
const p33=  new Promise((resolve,reject)=>{
    reject("reject3");
}) 
Promise.all([p11,p22,p33]) .then((value)=>{
    console.log(value);
})
.catch((err)=>{
    console.log("Error on one of the promise p11,p22,p33",err);
})
/*Create three Promises:
r1 resolves "First" after 2 seconds,
r2 resolves "Second" after 4 seconds,
r3 resolves "Third" after 1 second.
 Use Promise.race() to log the first resolved value.*/

const r1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("First");
    },2000)
})
const r2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Second");
    },4000)
})
const r3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Third");
    },1000)
})
Promise.race([r1,r2,r3]).then((message)=>{
    console.log("first resolved value:",message);
})
.catch((err)=>{
    console.log(err);
})
/* Simulate downloading files:
file1 resolves "File 1 Downloaded" after 5s,
file2 resolves "File 2 Downloaded" after 3s,
file3 resolves "File 3 Downloaded" after 4s.
 Use Promise.race() to alert which file finished first.*/
const file1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("File 1Downloaded");
    },5000)
})
const file2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("File 2Downloaded");
    },3000)
})
const file3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("File 3Downloaded");
    },4000)
})
Promise.race([file1,file2,file3])
.then((value)=>{
    console.log("Which file finished first:",value);
    alert(value);
})
.catch((err)=>{
    console.log(err);
})  
//Create three Promises:s1 resolves "Success 1" after 1s,
//s2 rejects "Error 2" after 2s,
//s3 resolves "Success 3" after 3s.
//Use Promise.allSettled([s1, s2, s3]) to log each Promise’s status and value/reason.

const s1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
            resolve("Success 1");
    },1000)
})
const s2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Error 2");
    },2000)
})
const s3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("success 3");
    },3000)
})
Promise.allSettled([s1,s2,s3])
.then((results)=>{
    results.forEach((result,index)=>{
        if(result.status==="fulfilled"){
            console.log("promise ${index+1} fulfilled:",result.value)
        }else{
            console.log("Promise s${index + 1} rejected with reason:", result.reason)
        }
    })
})