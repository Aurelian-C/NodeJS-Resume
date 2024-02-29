# Self-Invoked Functions

==Function expressions can be made "self-invoking". A self-invoking expression is invoked (started) automatically, without being called (runs as soon as it is defined).==

==Function expressions will execute automatically if the expression is followed by `()`. **You cannot self-invoke a function declaration**. You have to add parentheses around the function to indicate that it is a function expression==:

```js
(function () {
  let x = 'Hello!'; //I will invoke myself
})();
```

The function above is actually an anonymous self-invoking function (function without name).

Use cases:

- Avoid polluting the global namespace
- Execute an async function
- The module pattern
- `for` loop with `var` before ES6

### Avoid polluting the global namespace

==Because our application could include many functions and global variables from different source files, it's important to **limit the number of global variables**.== If we have some initiation code that we don't need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.

```js
(() => {
  // some initiation code
  let firstVariable;
  let secondVariable;
})();

// firstVariable and secondVariable will be discarded after the function is executed.
```

### Execute an async function

An [`async`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function) IIFE allows you to use [`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) and [`for-await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) even in older browsers and JavaScript runtimes that have no [top-level await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await):

```js
const getFileStream = async (url) => {
  // implementation
};

(async () => {
  const stream = await getFileStream("https://domain.name/path/file.ext");
  for await (const chunk of stream) {
    console.log({ chunk });
  }
})();
```

### The module pattern

==We would also use IIFE to **create _private_ and _public_ variables and methods**.==

```js
const makeWithdraw = (balance) =>
  ((copyBalance) => {
    let balance = copyBalance; // This variable is private
    const doBadThings = () => {
      console.log("I will do bad things with your money");
    };
    doBadThings();
    return {
      withdraw(amount) {
        if (balance >= amount) {
          balance -= amount;
          return balance;
        }
        return "Insufficient money";
      },
    };
  })(balance);

const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
console.log(firstAccount.balance); // undefined
console.log(firstAccount.withdraw(20)); // 80
console.log(firstAccount.withdraw(30)); // 50
console.log(firstAccount.doBadThings); // undefined; this method is private
const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
console.log(secondAccount.withdraw(30)); // "Insufficient money"
console.log(secondAccount.withdraw(20)); // 0
```

## References

1. [IIFE - MDN](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
