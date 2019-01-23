# Javascript
A javascript code is multiple [statements](#statement) separated by line breaks or `;`.

## Statement
A **statement** tells the [javascript interpreter](#javascript-interpreter) to do something. It can be one of the following:

- [variable declaration](#variable-declaration)
- [assignment](#assignment)
- [if statement](#if-statement)
- [for statement](#for-statement)
- [for-in statement](#for-in-statement)
- [for-of statement](#for-of-statement)
- [while statement](#while-statement)
- [do-while statement](#do-while-statement)
- [break statement](#break-statement)
- [continue statement](#continue-statement)
- [switch statement](#switch-statement)
- [function declaration](#function-declaration)
- [class declaration](#class-declaration)
- [an expression](#expression)

## Javascript Interpreter
A javascript interpreter or engine is a program that executes javascript code. Each web browser contains a javascript interpreter. The command `node` from [NodeJS](http://nodejs.org) is a javascript interpreter.

## Keyword
A keyword is a reserved word that have a special meaning in the javascript language. You cannot use a keyword as a variable or function name. Here is a list of keywords:
```
do, if, in, for, let, new, try, var, case, else, enum, eval, null, this, true, void, with, await,
break, catch, class, const, false, super, throw, while, yield, delete, export, import, public, 
return, static, switch, typeof, default, extends, finally, package, private, continue, 
debugger, function, arguments, interface, protected, implements, instanceof
```

## Expression
An expression is a part of the code that can be evaluated to give a value. It can be:

- `undefined`: means "nothing" or a missing property.
- `null`: means an object that we didn't create yet.
- `true`.
- `false`.
- `Infinity`.
- `NaN`: means "not a number", this is the result of a wrong math operation like `0 / 0`.
- [Arithmetic Expression](#numerical-expression)
- [Logic Expression](#numerical-expression)
- [Object Creation](#object-creation)
- [Function Call](#function-call)

## Arithmetic Expression
```js
// Numbers
12        // the number 12 in decimal
012       // the number 12 in octal (base 8) which equals 10 in decimal
0x12      // the number 12 in hexa-decimal (base 16) which equals 18 in decimal

// Arithmetic operations
12 + 0x12 //=> 30
012 - 12  //=> -2 
5 * 012   //=> 50
5 / 2     //=> 2.5
5 % 2     //=> 1
5 ** 2     //=> 25   
-5 / 0    //=> -Infinity
0 / 0     //=> NaN
"Hi" * 3  //=> NaN
```

## Logic Expression
```js
true && false //=> false
true || false //=> true

5 == 5    //=> true
'5' == 5  //=> true
'5' === 5 //=> false

5 != 1    //=> true
5 != '5'  //=> false
5 !== '5' //=> true

5 < 3     //=> false
5 <= 5    //=> true
5 > 3     //=> true
5 >= 3    //=> true
```

## Object Creation
```js
new Class(arg1, arg2, ...)
```
This creates an object of type `Class`.

Some classes that are predefined in Javascript:
- [Number](#number)
- [String](#string)
- [Array](#array)
- [Object](#object)

## Function Call
```js
myFunctionName(arg1, arg2, ...)
```

**Evaluation steps:**
1. Find the variable `myFunctionName` and make sure it's a function, otherwise throw an error!
2. Create a new [context](#context).
3. Declare the function arguments and assign their given values (any missing argument will have the value `undefined`).
4. Execute statements on the function body until finding `return` or reaching the end of the function body.
5. Return the value of the `return` statement or `undefined`.

## Truthy

All values are **truthy** except for `false`, `0`, `""`, `null`, `undefined`, and `NaN`.

## Falsy

A value is **falsy** if it's equal to one of `false`, `0`, `""`, `null`, `undefined`, and `NaN`.

## Variable Declaration
```js
var varName
// or
let varName
// or
const varName
// or
var varName = [expression]
// or
let varName = [expression]
// or
const varName = [expression]
```
`var`, `let` and `const` are three [keywords](#keyword) used to declare variables. In general you should use `let`. Check [differences between var and let and const](#differences-between-var-and-let-and-const) for details.

`varName` is the name of the variable, it can contain letters, numbers and `_`, but should not start with a number!
```js
myAwesomeVar // valid
my_awesome_var // valid
my-awesome-var // invalid! the character '-' is not accepted. This is like saying "my minus awesome minus var"!
12hours // invalid! should start with a letter or '_'
```

`expression` can be any [expression](#expression).

**Execution steps:**
1. Evaluate the `expression` (the value is `undefined` if `expression` is missing).
2. Create a variable in the current [context](#context) with the name `varName` and the computed value.

## Differences Between var and let and const
@TODO

## Assignment
```js
varName = [expression]
```

**Execution steps:**
1. Evaluate the `expression`.
2. Set it as the value of `varName`.

## If Statement
```js
if ([condition]) { // <- if block starts here
  statement1
  statement2
} // <- if block ends here
// or
if ([condition]) { // <- if block starts here
  statement1
  statement2
} // <- if block ends here
else { // <- else block starts here
  statement3
  statement4
} // <- else block ends here
```

`condition` is an [expression](#expression).

**Execution steps:**
1. Evaluate the `condition`.
2. If it is [truthy](#truthy) then execute statements in the `if` block. Otherwise execute statements in the `else` block.

## For Statement
```js
for ([initialization]; [condition]; [final-expression]) { // <- for block starts here
  statement1;
  statement2;
  statement3;
} // <- for block ends here
```
`initialization` is a [variable declaration](#variable-declaration), [assignment](#assignment) or [expression](#expression).

`condition` is an [expression](#expression).

`final-expression` is an [assignment](#assignment) or [expression](#expression).

**Execution steps:**
1. Execute or evaluate the `initialization`.
2. Evaluate the `condition`.
3. If it is [falsy](#falsy) then stop.
4. Execute statements inside the `for` block.
5. Execute or evaluate the `final-expression`.
6. Go to step 2.

## For-in Statement
```js
for (const property in myObject) {
  statements
}
```
`myObject` is an [object](#object).

**Execution steps:**
For each property of `myObject`:
1. Assign the property name to `property`.
2. Execute the statements.

## For-of Statement
```js
for (const item of myArray) {
  statements
}
```
`myArray` is an [Array](#array).

**Execution steps:**
For each element of `myArray`:
1. Assign the element to `item`.
2. Execute the statements.

## While Statement
```js
while ([condition]) {
  statements
}
```

`condition` is an [expression](#expression).

**Execution steps:**
1. Evaluate the `condition`.
2. If it is [falsy](#falsy) then stop.
3. Execute statements.
4. Go to step 1.

## Do-while Statement
```js
do {
  statements
} while ([condition])
```

`condition` is an [expression](#expression).

**Execution steps:**
1. Execute statements.
2. Evaluate the `condition`.
3. If it is [falsy](#falsy) then stop.
4. Go to step 1.

## Break Statement
```js
break
```

**Execution steps:**
1. Go out of the current [block](#block).

## Continue Statement
```js
continue
```

**Execution steps:**
1. Jump to the next iteration of the current loop.

## Switch Statement
```js
switch([expression]) {
  case [value1]:
    statements1
  case [value2]:
    statements2
  ...
  default:
    statementsDefault
}
```

**Execution steps:**
1. Evaluate `expression`.
2. If it's equal to some `valueX` then jump to `case valueX` otherwise jump to `default`.
3. Execute all statements after it.

## Function Declaration
```js
function myFunctionName(arg1, arg2, ...) {
  statements
}
// or
const myFunctionName = function(arg1, arg2, ...) {
  statements
}
```

A function declaration is like a [variable declaration](#variable-declaration) where the value is a [Function](#function).

## Number

Writing `12.4` is like writing `new Number('12.4')`.

## String

Writing `'Hello'` is like `"Hello"` and like `new String('Hello')`.

The `String` class has some useful [methods](#method):

```js

```

## Array
@TODO

## Object
@TODO

## Function
@TODO

## Class Declaration
@TODO

## Method

## Context
@TODO
