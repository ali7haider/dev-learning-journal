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

