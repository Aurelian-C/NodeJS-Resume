# Fetch API

==The Fetch API provides an **interface for fetching resources** (including across the network)==. It is a more powerful and flexible replacement for [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest).

At the heart of Fetch are the Interface abstractions of HTTP [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request)s, [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)s, and [`Headers`](https://developer.mozilla.org/en-US/docs/Web/API/Headers), along with a [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch) method for initiating asynchronous resource requests.

==**The Fetch API is completely [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)-based.**==

## Concepts and usage

==The Fetch API uses [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) and [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) objects== (and other things involved with network requests), as well as related concepts such as CORS and the HTTP Origin header semantics.

For making a request and fetching a resource, use the [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch) method. ==The `fetch()` method takes **one mandatory argument**, the path to the resource you want to fetch.==

The `fetch()` method can ==_optionally_ accept a **second parameter**, an `init` **object**== that allows you to control a number of different settings.

==The `fetch()` method always returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)== that resolves to the `Response` to that request — as soon as the server responds with headers — _even if the server response is an HTTP error status_.

> **NOTE**: ==The `Promise` returned from `fetch()` **won't reject on HTTP error status** even if the response is an HTTP `404` or `500`==. Instead, it will resolve normally (with `ok` status set to `false`), and it will only reject on network failure or if anything prevented the request from completing.

Once a `Response` is retrieved, there are a number of methods available to define what the body content is and how it should be handled.

> **NOTE**: You can create a request and response directly using the `Request()` and `Response()` constructors, but it's uncommon to do this directly.

## Syntax

```javascript
fetch(resource)
fetch(resource, options)
```

## Parameters

### `resource`

This defines the resource that you wish to fetch. This can either be:

- A string or any other object with a [stringifier](https://developer.mozilla.org/en-US/docs/Glossary/Stringifier) — including a [`URL`](https://developer.mozilla.org/en-US/docs/Web/API/URL) object — that provides the ==URL of the resource you want to fetch==.
- A [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) object.

### [`options`](https://developer.mozilla.org/en-US/docs/Web/API/fetch#parameters) _(optional)_

==**An object** containing any _custom settings_ that you want to apply to the request==. The possible options are:

#### 1. ==`method`==

The **[request method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)**, e.g., `GET`, `POST`. The default is `"GET"`.

#### 2. ==`headers`==

Any headers you want to add to your request, contained within a [`Headers`](https://developer.mozilla.org/en-US/docs/Web/API/Headers) object or an object literal with [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) values. Note that [some names are forbidden](https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name).

#### 3. ==`body`==

Any body that you want to add to your request. Note that a request using the `GET` or `HEAD` method cannot have a body.

#### 4. `mode`

The mode you want to use for the request, e.g., `cors`, `no-cors`, or `same-origin`.

#### 5. `credentials`

Controls what browsers do with credentials ([cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies), [HTTP authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication) entries, and TLS client certificates). Must be one of the following strings:

- `omit`

  Tells browsers to exclude credentials from the request, and ignore any credentials sent back in the response (e.g., any [`Set-Cookie`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) header).

- `same-origin`

  Tells browsers to include credentials with requests to same-origin URLs, and use any credentials sent back in responses from same-origin URLs. **This is the default value.**

- `include`

  Tells browsers to include credentials in both same- and cross-origin requests, and always use any credentials sent back in responses.

#### 6. `cache`

A string indicating how the request will interact with the browser's [HTTP cache](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching). The possible values, `default`, `no-store`, `reload`, `no-cache`, `force-cache`, and `only-if-cached`, are documented in the article for the [`cache`](https://developer.mozilla.org/en-US/docs/Web/API/Request/cache) property of the [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) object.

#### 7. `redirect`

How to handle a `redirect` response:

- `follow`: Automatically follow redirects. Unless otherwise stated the redirect mode is set to `follow`.
- `error`: Abort with an error if a redirect occurs.
- `manual`: Caller intends to process the response in another context. See [WHATWG fetch standard](https://fetch.spec.whatwg.org/#requests) for more information.

#### 8. `referrer`

A string specifying the referrer of the request. This can be a same-origin URL, `about:client`, or an empty string.

#### 9. `referrerPolicy`

Specifies the [referrer policy](https://w3c.github.io/webappsec-referrer-policy/#referrer-policies) to use for the request. May be one of `no-referrer`, `no-referrer-when-downgrade`, `same-origin`, `origin`, `strict-origin`, `origin-when-cross-origin`, `strict-origin-when-cross-origin`, or `unsafe-url`.

#### 10. `integrity`

Contains the [subresource integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) value of the request (e.g., `sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=`).

#### 11. `keepalive`

The `keepalive` option can be used to allow the request to outlive the page. Fetch with the `keepalive` flag is a replacement for the [`Navigator.sendBeacon()`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon) API.

#### 12. ==`signal`==

An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) object instance; allows you to communicate with a fetch request and abort it if desired via an [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).

#### 13. `priority`

Specifies the priority of the fetch request relative to other requests of the same type. Must be one of the following strings:

- `high`: a high-priority fetch request relative to other requests of the same type;
- `low`: a low-priority fetch request relative to other requests of the same type;
- `auto`: automatically determine the priority of the fetch request relative to other requests of the same type (default).

## Return value

==**A `Promise`** that resolves to a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object or a [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError).==

#### `Response`

The `Response` interface of the Fetch API represents the response to a request. The most common response properties you'll use are:

- [`Response.status`](https://developer.mozilla.org/en-US/docs/Web/API/Response/status) — An integer (default value 200) containing the response status code.
- [`Response.statusText`](https://developer.mozilla.org/en-US/docs/Web/API/Response/statusText) — A string (default value ""), which corresponds to the HTTP status code message. Note that HTTP/2 [does not support](https://fetch.spec.whatwg.org/#concept-response-status-message) status messages.
- [`Response.ok`](https://developer.mozilla.org/en-US/docs/Web/API/Response/ok) — seen in use above, this is a shorthand for checking that status is in the range 200-299 inclusive. This returns a boolean value.

#### `TypeError`

`TypeError` can occur for the following reasons:

- Invalid header name;
- Invalid header value. The header object must contain exactly two elements;
- Invalid URL or scheme, or using a scheme that fetch does not support, or using a scheme that is not supported for a particular request mode;
- URL includes credentials;
- Invalid referrer URL;
- Invalid modes (`navigate` and `websocket`);
- If the request cache mode is "only-if-cached" and the request mode is other than "same-origin";
- If the request method is an invalid name token or one of forbidden headers (`'CONNECT'`, `'TRACE'` or `'TRACK'`);
- If the request mode is "no-cors" and the request method is not a CORS-safe-listed method (`'GET'`, `'HEAD'`, or `'POST'`);
- If the request method is `'GET'` or `'HEAD'` and the body is non-null or not undefined;
- If fetch throws a network error.

## Examples

```javascript
// Example POST method implementation:
async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  
  return response.json(); // parses JSON response into native JavaScript objects
}

postData("https://example.com/answer", { answer: 42 }).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});
```

>Note that `mode: "no-cors"` only allows a limited set of headers in the request:
>
>- `Accept`
>- `Accept-Language`
>- `Content-Language`
>- `Content-Type` with a value of `application/x-www-form-urlencoded`, `multipart/form-data`, or `text/plain`

### Aborting a fetch

To abort incomplete `fetch()` operations, use the [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) and [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) interfaces.

```javascript
const controller = new AbortController();
const signal = controller.signal;
const url = "video.mp4";

const downloadBtn = document.querySelector("#download");
const abortBtn = document.querySelector("#abort");

downloadBtn.addEventListener("click", async () => {
  try {
    const response = await fetch(url, { signal });
    console.log("Download complete", response);
  } catch (error) {
    console.error(`Download error: ${error.message}`);
  }
});

abortBtn.addEventListener("click", () => {
  controller.abort();
  console.log("Download aborted");
});
```

### Uploading JSON data

Use `fetch()` to `POST` JSON-encoded data.

```javascript
async function postJSON(data) {
  try {
    const response = await fetch("https://example.com/profile", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

const data = { username: "example" };
postJSON(data);
```

### Uploading a file

Files can be uploaded using an HTML `<input type="file" />` input element, [`FormData()`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData) and [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch).

```javascript
async function upload(formData) {
  try {
    const response = await fetch("https://example.com/profile/avatar", {
      method: "PUT",
      body: formData,
    });
    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append("username", "abc123");
formData.append("avatar", fileField.files[0]);

upload(formData);
```

For more examples go to [Using_Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) article.

## References

1. [Fetch API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
1. [`fetch()` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/fetch)
1. [Using the Fetch API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
1. [HTTP request methods - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
1. [Fetch API Headers - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Headers)
1. [Response - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Response)
1. [`Response.json()` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Response/json)
1. [`Response.text()` - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Response/text)