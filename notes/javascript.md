## Let,Var,const

1. Var 
    - old and function scoped
    - can be redeclared
    - Hosited (available before declaration with undefined)


    function test() {
    if (true) {
        var msg = 'hello';
    }
    console.log(msg); // 'hello' — still accessible!
    }

    - Hosited example
    console.log(a); // undefined (not ReferenceError)
    var a = 10;

2. Let
    - Block scoped
    - can resigned but not redeclare
    - Not hosited


    let count = 3.14444
    count = 2      Fine
    let count= 1   Error

3. const
    - Block scoped
    - cannot reinnialize+ cannot redeclare
    - Safer for values you don't want to change
    const pi=3.14
    pi=324234 error

    - Note : const does not make object or array immutable -just the binding is fixed
    const user= {name:'Ali'}
    user.name="Haider"   correct
    user={}   error


## Arrows Functions

    - A shorter way to write functions
    - Introduced in ES6, simplify syntax, do not bind their own this

    const add = (a,b) => a+b;

    - no parameter ()
    - one parameter x=>x+x;
    -multiple (a,b)=>
    - multi line (a,b)=>{

    }

        
        
    - this inside the regular function refers to the global object (or undefined in strict mode)
    function Timer() {
  this.seconds = 0;

  setInterval(function () {
    this.seconds++; // ❌ wrong "this" (points to global or undefined)
    console.log(this.seconds);
  }, 1000);
}
new Timer();



- this inside the arrow function refers to Timer instance

🧠 Because arrow functions lexically bind this, i.e., inherit it from where they're defined

function Timer() {
  this.seconds = 0;

  setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}
new Timer();

| Feature                   | Arrow Function         | Regular Function |
| ------------------------- | ---------------------- | ---------------- |
| Syntax                    | Concise                | Verbose          |
| Binds `this`              | ❌ Inherits from parent | ✅ Own `this`     |
| Suitable for constructors | ❌ No                   | ✅ Yes            |
| Used for object methods   | ❌ No                   | ✅ Yes            |
| Used in callbacks         | ✅ Yes                  | ✅ Yes            |



## Map
map is built in array method in js which creates new array by applyting a function to each element of existing array

array.map(callback(currentValue, index, array), thisArg);
callback: Function that is called for every element.

currentValue: The current element being processed.

index (optional): Index of the current element.

array (optional): The original array being mapped over.

thisArg (optional): Value to use as this when executing the callback.

## Filter
Creates a new array with only elements that passes the condition

array.filter(callback(currentValue, index, array), thisArg);
callback → must return true to keep the item, false to remove it

Returns a new array, with only matching items


## Reduce
Reduces the complete array into single value by applying function to each element.

array.reduce(callback(accumulator, currentValue, index, array), initialValue);
accumulator: holds the result so far

initialValue: starting value for accumulator

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, val) => acc + val, 0);

console.log(sum); // 15


## FInd
Finds the first element that satisfies the condition
array.find(callback(currentValue, index, array), thisArg);
Stops after the first match

Returns the value, not an array

🔧 Example:
const numbers = [5, 12, 8, 130, 44];

const found = numbers.find(num => num > 10);

console.log(found); // 12 (first one)

| Method     | Returns        | Used For                       | Stops Early? | Output Type |
| ---------- | -------------- | ------------------------------ | ------------ | ----------- |
| `filter()` | Array          | Keep items that pass condition | ❌ No         | New array   |
| `reduce()` | Any value      | Reduce array to single value   | ❌ No         | Any type    |
| `find()`   | Single element | Find first matching item       | ✅ Yes        | One item    |



## Callbacks, Promises, async/await

They all deals with asynchrous programming mean you can run it without blocking the main thread,and get result later

# Callback
A callback is function which is passed as arguement to another function to be executed later
function greet(name, callback) {
  console.log('Hello, ' + name);
  callback();
}

greet('Ali', () => {
  console.log('How are you?');
});
 - Issue in callback when is nested too much harder to read, debug and maintain.

 # Promises 
 A promise is an object representing a eventual/future result of async operation
 It acts like a placeholder for a value that will exist in the future — either resolved successfully or failed with an error.


 it has three states
 1. pending
 2. fulfilled
 3. rejected

 const promise = new Promise((resolve, reject) => {
  // async operation
  if (/* successful */) {
    resolve(value);   // ✅ fulfilled
  } else {
    reject(error);    // ❌ rejected
  }
});
resolve(value): Sends back the successful result.

reject(error): Sends back an error when something goes wrong.

Inside the function is where your async code runs.

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data loaded");
      } else {
        reject("Failed to load data");
      }
    }, 1000);
  });
};

getData()
  .then(data => console.log(data))       // runs if resolve()
  .catch(error => console.log(error));   // runs if reject()


## async/await

the cleanest, most readable way to write asynchronous code in modern JavaScript (ES2017+). It’s built on top of Promises, and helps avoid .then() chaining and callback hell.

 What is async/await?
async → Marks a function as asynchronous (it returns a Promise).

await → Pauses execution inside an async function until a Promise settles (either resolved or rejected).

Parallel vs Sequential await
// Sequential (slow):
const data1 = await getData1();
const data2 = await getData2();

// Parallel (faster):
const [data1, data2] = await Promise.all([getData1(), getData2()]);
Use Promise.all to run async tasks in parallel.



## Destructuring

Destructuring lets you unpack values from arrays or objects into distinct variables.

const nums = [10, 20, 30];

const [a, b, c] = nums;

console.log(a); // 10
console.log(b); // 20


const [first, , third] = [1, 2, 3];
console.log(third); // 3

const user = { name: 'Ali', age: 25 };

const { name, age } = user;

console.log(name); // Ali
console.log(age);  // 25

Rename during destructuring
const { name: username } = user;
console.log(username); // Ali



Set default values
const { role = 'guest' } = user;
console.log(role); // guest (if user.role is undefined)

## Rest Operator
Rest opertor collect rest of the values into a variable.

- Array Rest
const [first, ...others] = [1, 2, 3, 4];
console.log(first); // 1
console.log(others); // [2, 3, 4]

- Object Rest

const { name, ...rest } = { name: 'Ali', age: 25, country: 'PK' };
console.log(rest); // { age: 25, country: 'PK' }

- Funtion Rest
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6


## Spread operator
spread is used is to expand an array or object

- Copying array
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]

- Merging array
const a = [1, 2];
const b = [3, 4];
const combined = [...a, ...b]; // [1, 2, 3, 4]


- Copying obbject
const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 };
console.log(obj2); // { a: 1, b: 2 }


- Merging arary
const user = { name: 'Ali' };
const details = { age: 25 };
const merged = { ...user, ...details };
console.log(merged); // { name: 'Ali', age: 25 }




Note: In Javascript reverse deoes not work on string only on array so we use split on string in reverse function