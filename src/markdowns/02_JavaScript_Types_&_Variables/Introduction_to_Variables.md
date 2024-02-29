# Storing the information you need — Variables

## What is a variable?

==A variable is a **container for a value**==.

```js
// With a variable
<button id="button_A">Press me</button>
<h3 id="heading_A"></h3>

const buttonA = document.querySelector('#button_A');
const headingA = document.querySelector('#heading_A');

buttonA.onclick = () => {
  const name = prompt('What is your name?');
  alert(`Hello ${name}, nice to see you!`);
  headingA.textContent = `Welcome ${name}`;
}
```

To understand why variables is so useful, let's think about how we'd write the example above without using a variable.

```js
// Without a variable
<button id="button_B">Press me</button>
<h3 id="heading_B"></h3>

const buttonB = document.querySelector('#button_B');
const headingB = document.querySelector('#heading_B');

buttonB.onclick = () => {
    alert(`Hello ${prompt('What is your name?')}, nice to see you!`);
    headingB.textContent = `Welcome ${prompt('What is your name?')}`;
}

// If we didn't have variables available, we'd have to ask the reader for their name every time we needed to use it!
```

==One special thing about variables is that they can contain just about anything — not just strings and numbers. Variables can also contain complex data and even entire functions==.

> **Note**: We say variables contain values. This is an important distinction to make. ==**Variables aren't the values themselves; they are containers for values**==. You can think of them being like little cardboard boxes that you can store things in.

![variables](../../img/variables_boxes.png)

## Declaring a variable

To use a variable, you've first got to create it — more accurately, we call this declaring the variable. To do this, we type the keyword `let`, `const` or `var` followed by the name you want to call your variable:

```js
var variableName;
let variableName;
const variableName;
```

They currently variables have no value; they are empty containers. When you enter the variable names, you should get a value of `undefined` returned. If they don't exist, you'll get an error message.

> **Note**: Don't confuse a variable that exists but has no defined value with a variable that doesn't exist at all — they are very different things. In the box analogy you saw above, not existing would mean there's no box (variable) for a value to go in. No value defined would mean that there is a box, but it has no value inside it.

### An aside on variable naming rules

You can call a variable pretty much anything you like, but there are limitations. ==Generally, you should stick to just using **Latin characters** (0-9, a-z, A-Z) and the **underscore character**==.

- You shouldn't use other characters because they may cause errors or be hard to understand for an international audience.

- _Don't use underscores at the start of variable names — this is used in certain JavaScript constructs to mean specific things, so may get confusing_.

- _Don't use numbers at the start of variables_. This isn't allowed and causes an error.

- ==A safe convention to stick to is so-called **"lower camel case"**==, where you stick together multiple words, using lower case for the whole first word and then capitalize subsequent words.

- _Make variable names intuitive, so they describe the data they contain_. Don't just use single letters/numbers, or big long phrases.

- ==Variables are **case sensitive**== — so `myage` is a different variable from `myAge`.

- One last point: you also need to _avoid using JavaScript reserved words as your variable names_ — by this, we mean the words that make up the actual syntax of JavaScript! So, you can't use words like `var`, `function`, `let`, and `for` as variable names. Browsers recognize them as different code items, and so you'll get errors.

![variable_naming](../../img/variable_naming.jpg)

## Initializing a variable

Once you've declared a variable, you can initialize it with a value. You do this by typing the variable name, followed by an equals sign `=`, followed by the value you want to give it.

```js
// Declaring a variable without initializing it
let variableName;

// Initializing a variable
variableName = 'John';

// Reassign a variable
variableName = 35;
```

You can declare and initialize a variable at the same time. This is probably what you'll do most of the time, as it is quicker than doing the two actions on two separate lines.

```js
// Declaring a variable and initialize it
let myName = 'Tom';
```

## Updating a variable

Once a variable has been initialized with a value, you can change (or update) that value by giving it a different value.

## Variable types

There are a few different types of data we can store in variables.

```js
// Numbers (integers & floats)
let myAge = 17;
let weight = 65.24;

// Strings
let dolphinGoodbye = 'So long and thanks for all the fish';

// Booleans
let iLikeThis = true;
let test = 6 > 3;

// Arrays
let myNameArray = ['Chris', 'Bob', 'Jim'];
let myNumberArray = [10, 15, 40];

// Objects
let dog = { name: 'Spot', breed: 'Dalmatian' };

// Functions
const doThisThing = function() {
    // code here
};
```

## References

1. [Storing the information you need — Variables - MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
