# Destructuring function parameters

Destructuring can be applied on function parameters to ==**extract values** and **assign them to local variables**==.

> **NOTE**: The **destructured parameter cannot be omitted (it is required)**, otherwise it throws an error.

```js
const student = {
  name: 'John Doe',
  age: 16,
  scores: {
    maths: 74,
    english: 63,
    science: 85,
  },
};

// Without destructuring
function displaySummary(student) {
  console.log('Hello, ' + student.name);
  console.log('Your Maths score is ' + (student.scores.maths || 0));
  console.log('Your English score is ' + (student.scores.english || 0));
  console.log('Your Science score is ' + (student.scores.science || 0));
}

// With destructuring
function displaySummary({
  name,
  scores: { maths = 0, english = 0, science = 0 },
}) {
  console.log('Hello, ' + name);
  console.log('Your Maths score is ' + maths);
  console.log('Your English score is ' + english);
  console.log('Your Science score is ' + science);
}

displaySummary(student);
```

Here we extracted the values we need from the `student` object parameter and assigned them to local variables: `name`, `maths`, `english` and `science`. Notice that although we have specified default values for some of the variables, if you call the function with no arguments you will get an error because ==**destructured parameters are always required**==. You can assign a fallback object literal as default value for the `student` object and the nested `scores` object in case they are not supplied to avoid the error as shown in the following snippet:

```js
function displaySummary({
  name,
  scores: { maths = 0, english = 0, science = 0 } = {}, // asign a default value
} = {}) {
  console.log('Hello, ' + name);
  console.log('Your Maths score is ' + maths);
  console.log('Your English score is ' + english);
  console.log('Your Science score is ' + science);
}

// Calling without a student argument
displaySummary();

// Hello, undefined
// Your Maths score is 0
// Your English score is 0
// Your Science score is 0
```

## Destructuring an object on function parameters _vs_ destructuring an object inside function body

```javascript
const booking = {
  id: 1,
  startDate: '31 May 2023',
  endDate: '15 June 2023',
  totalPrice: 2500,
  guests: { fullName: 'Tom Brady', email: 'test@email.com'},
  cabins: { name: 'Cabin 004'}
}

// Destructuring ON FUNCTION PARAMETERS
function Booking({ 
  booking: { // booking will be an object
    id: bookingId,
    startDate,
    endDate,
    totalPrice,
    guests: { fullName: guestName, email},
    cabins: {name: cabinName}
  },
}) {
  // You can access inside function body all the variables that you have destructured on function parameters
  console.log(bookingId); //1
  console.log(guestName); //Tom Brady
}

// Destructuring INSIDE FUNCTION BODY
function Booking({ booking }) { // booking will be an object
  const {
    id: bookingId,
    startDate,
    endDate,
    totalPrice,
    guests: { fullName: guestName, email},
    cabins: {name: cabinName}} = booking;
  
  // ... code here
}
```

## References

1. [ES6 Destructuring: The Complete Guide - codeburst.io](https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f)
