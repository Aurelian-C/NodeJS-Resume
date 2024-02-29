# for await...of

```JS
const url = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
];

// Without for await...of
const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(async function (url) {
        const response = await fetch(url);
        return response.json();
      })
    );
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (err) {
    console.log(err);
  }
};

// Same thing but with for await...of
const getData1 = async function () {
  const arrayOfPromises = urls.map(url => fetch(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
};
```



## References

1. [for await...of - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of)