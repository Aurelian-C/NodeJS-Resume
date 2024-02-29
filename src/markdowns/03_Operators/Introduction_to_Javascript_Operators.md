# Introduction to JavaScript Operators

An operator (`=`, `+`, `-`, `*`, `/`, `typeof`, ...) allows us to ==transform values== or ==combine multiple values== and do all kinds of work with values. 

There are many categories of operators like mathematical operators, comparison operators, logical operators, assignment operators and many more.

## Operator precedence

==Operator precedence determines **how operators are parsed concerning each other**. Operators with **higher precedence** become the operands of operators with **lower precedence**==.

```js
console.log(3 + 4 * 5); //different precedence levels? => precedence

console.log(4 * 3 ** 2); //different precedence levels? => precedence

let a;
let b;
console.log((a = b = 5)); //operators with same precedence? => associativity
```

## Precedence And Associativity

==Operators are first grouped by **precedence**, and then, for _adjacent operators that have the same precedence_, by **associativity**==.

Consider an expression describable by the representation below. Note that both `OP1` and `OP2` are fill-in-the-blanks for Operators.

```js
a OP1 b OP2 c
 
// The combination above has two possible interpretations
(a OP1 b) OP2 c
a OP1 (b OP2 c)
// Which one the language decides to adopt depends on the identity of OP1 ad OP2.
```

#### Precedence

If `OP1` and `OP2` have ==**_different precedence levels_**==, ==the **operator with the highest precedence goes first and associativity does not matter**==. Observe how multiplication has higher precedence than addition and executed first, _even though addition is written first in the code_.

```js
console.log(3 + 10 * 2); // logs 23
console.log(3 + 10 * 2); // logs 23 because parentheses here are superfluous
console.log((3 + 10) * 2); // logs 26 because the parentheses change the order
```

#### Associativity

==_Within operators of the same precedence_, the language groups them by *associativity*==. The difference in ==**associativity comes into play when there are multiple operators of the _same precedence_**==. _With only one operator or operators of different precedences, associativity doesn't affect the output_.

```js
a = b = 5; // same as writing a = (b = 5);
```

#### Operator precedence will be handled *recursively*.

For example, consider this expression:

```js
1 + 2 ** 3 * 4 / 5 >> 6
```

First, we group operators with different precedence by decreasing levels of precedence.

1. The `**` operator has the highest precedence, so it's grouped first.
2. Looking around the `**` expression, it has `*` on the right and `+` on the right. `*` has higher precedence, so it's grouped first. `*` and `/` have the same precedence, so we group them together for now.
3. Looking around the `*`/`/` expression grouped in 2, because `+` has higher precedence than `>>`, the former is grouped.

```js
   (1 + ( ( (2 ** 3) * 4 ) / 5) ) >> 6
// │    │ │ └─ 1. ─┘     │    │ │
// │    └─│─────── 2. ───│────┘ │
// └──────│───── 3. ─────│──────┘
//        └───── 4. ─────┘
```

Note that operator precedence and associativity only affect the order of evaluation of *operators* (the implicit grouping), but not the order of evaluation of *operands*. The operands are always evaluated from left-to-right. The higher-precedence expressions are always evaluated first, and their results are then composed according to the order of operator precedence.

## Note on grouping and short-circuiting

In the previous section, we said "the higher-precedence expressions are always evaluated first" — this is generally true, but it has to be amended with the acknowledgement of *short-circuiting*, in which case an operand may not be evaluated at all.

> ==**Grouping** is listed as having the _highest precedence_==. However, that does not always mean the expression within the grouping symbols `( … )` is evaluated first, especially when it comes to short-circuiting.

==**Short-circuiting** is jargon for **conditional evaluation**==. For example, in the expression `a && (b + c)`, if `a` is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy), then the sub-expression `(b + c)` will not even get evaluated, even if it is grouped and therefore has higher precedence than `&&`. We could say that the logical AND operator (`&&`) is "short-circuited". Along with logical AND, other short-circuited operators include logical OR (`||`), nullish coalescing (`??`), and optional chaining (`?.`).

```js
a || b * c;	// evaluate 'a' first, then produce 'a' if 'a' is "truthy"
a && b < c;	// evaluate 'a' first, then produce 'a' if 'a' is "falsy"
a ?? (b || c);	// evaluate 'a' first, then produce 'a' if 'a' is not "null" and not "undefined"
a?.b.c;	// evaluate 'a' first, then produce "undefined" if 'a' is "null" or "undefined"
```

When evaluating a short-circuited operator, the left operand is always evaluated. The right operand will only be evaluated if the left operand cannot determine the result of the operation.

> **Note:** The behavior of short-circuiting is baked in these operators. Other operators would *always* evaluate both operands, regardless if that's actually useful — for example, `NaN * foo()` will always call `foo`, even when the result would never be something other than `NaN`.

## Operators precedence table

The following [table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table) lists operators in order from highest precedence (18) to lowest precedence (1).

## References

1. [The Complete JavaScript Course. From Zero to Expert! - Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=CjwKCAjwiuuRBhBvEiwAFXKaNCuaAhZ8UB5kIldtb76eeAyfM0SUKeceBq3FKF24pNxDVe-_g0-DPxoCnWwQAvD_BwE)
2. [JavaScript type coercion explained - freecodecamp.org](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/)
3. [Operator precedence - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
