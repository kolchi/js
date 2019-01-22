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
- [function call](#function-call)

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


## Variable Declaration
```js
var varName
// or
let varName
// or
const varName
// or
var varName = expression
// or
let varName = expression
// or
const varName = expression
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
1. Compute the value of `expression` (the value is `undefined` if `expression` is missing).
2. Create a variable in the current [context](#context) with the name `varName` and the computed value.

## Assignment
```js
varName = expression
```

**Execution steps:**
1. Compute the value of `expression`.
2. Set it as the value of `varName`.

## If Statement
```js
if (condition) { // <- if block starts here
  statement1
  statement2
} // <- if block ends here
// or
if (condition) { // <- if block starts here
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
1. Compute the value of `condition`.
2. If it is [truthy](#truthy) then execute statements in the `if` block. Otherwise execute statements in the `else` block.

## For Statement


## For-in Statement


## For-of Statement


## While Statement


## Do-while Statement


## Break Statement

## Continue Statement

## Switch Statement


## Function Declaration


## Class Declaration


## Function Call


## Context

## Differences Between var and let and const
