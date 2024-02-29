# How the web works: HTTP Request and HTTP Responses

==Whenever we try to access a web server, the web browser (simply called _client_) sends a **request** to the web server (simply called _server_), and the server will then send back a **response**, and that response contains the web page or the data that we requested==. This process works the exact same way no matter if we're accessing an entire web page or just some data from an API. This whole process actually has a name and it's called the ==**Client-Server Model** _or_ **Request-Response Model**==.

![asynchronous_request](../../img/asynchronous_request.jpg)

==HTTP is a **protocol for fetching resources**==, such as HTML documents. ==HTTP is the foundation of any data exchange on the web and it is a **client-server protocol**==, which means requests are initiated by the recipient, usually the web browser. A complete document is reconstructed from the different sub-documents fetched, for instance, text, layout description, images, videos, scripts, and more.

> **Hypertext Transfer Protocol (HTTP)** is an application-layer protocol for transmitting hypermedia documents, such as HTML. It was _designed for communication between web browsers and web servers_, but it can also be used for other purposes. _HTTP follows a classical client-server model_, with a client opening a connection to make a request, then waiting until it receives a response. HTTP is a [stateless protocol](https://en.wikipedia.org/wiki/Stateless_protocol), meaning that the server does not keep any data (state) between two requests.
>
> ==HTTP is a communication protocol and **a communication protocol is simply a system of rules that allows two or more parties to communicate**==. Now _in the case of HTTP, it's just a protocol that allows web browsers (client) and web servers (server) to communicate, and that works by sending requests and response messages from client to server and back_.

![http](../../img/http.jpg)

==Clients and servers communicate by exchanging individual messages (as opposed to a stream of data). The messages sent by the client, usually a web browser, are called **requests** and the messages sent by the server as an answer are called **responses**.==

==The web browser is _always_ the entity initiating the request, it is never the server==.

## HTTP flow: what happens when we access a web server?

When a web browser (client) wants to communicate with a web server (server), it performs the following steps:

1. ==_Open_ a **TCP connection**==: the TCP connection is used to send a request, or several, and receive an answer. The client may open a new connection, reuse an existing connection, or open several TCP connections to the servers.
2. ==_Send_ an **HTTP message**==: [HTTP messages](https://developer.mozilla.org/en-US/docs/web/HTTP/Messages) (before HTTP/2) are human-readable. With HTTP/2, these simple messages are encapsulated in frames, making them impossible to read directly, but the principle remains the same.
3. ==_Read_ the **response**== sent by the server.
4. ==_Close_ or _reuse_ the connection== for further requests.

 ## Components of any request - response

![asynchronous_acces-web-server](../../img/asynchronous_acces-web-server.jpg)

==Every URL gets an HTTP or HTTPS==, which is for the protocol that will be used on the connection. Then we have the ==domain name==, which in our case is `restcountries.eu`, and also after a slash we have to so-called resource (endpoint) that we want to access, and in this case that's `/rest/V2/alpha/PT`. Now this domain name `restcountries.eu` is actually not the real address of the server that we're trying to access, it's just a nice name that is easy for us to memorize. But what this means is that we need a way of ==converting the domain name to the real address of the server and that happens through a so-called **DNS**==. So DNS stands for Domain Name Server and Domain Name Servers are a special kind of server.

### 1. Domain Name Server (DNS)

The first step that happens when we access any web server is that the web browser makes a request to a DNS, and this special server will then simply match the web address of the URL to the server's real IP address, and actually this all happens through your Internet Service Provider, but the complete details don't really matter here. What you need to retain from this first part is that ==the domain name is not the real address and a DNS will convert the domain name to the real IP address==, and then after the real IP address has been sent back to the browser, we can finally call it.

### 2. TCP/IP socket connection

==Once we have the real IP address, a TCP socket connection is established between the web browser and the web server==, and so they are now finally connected. This connection is typically kept alive for the entire time that it takes to transfer all files of the website or all data. Now what are TCP and IP? TCP is the Transmission Control Protocol and IP is the Internet Protocol, and together they are ==**communication protocols** that define exactly how data travels across the web. They are basically the Internet's fundamental **control system**, because they are the ones who set the rules about how data moves on the Internet==.

### 3. HTTP Messages

==HTTP messages are how data is exchanged between a server and a client.==

There are **two types of messages**:

- **requests** sent by the client to trigger an action on the server, and
- **responses**, the answer from the server.

HTTP messages are composed of textual information encoded in ASCII. Web developers rarely craft these textual HTTP messages themselves: software, a web browser, proxy, or web server, perform this action. They provide HTTP messages through config files (for proxies or servers), APIs (for browsers), or other interfaces.

HTTP requests and responses share similar structure and are composed of:

1. A **start-line** describing the requests to be implemented, or its status of whether successful or a failure. This start-line is always a single line.
2. An optional set of **HTTP headers** specifying the request, or describing the body included in the message.
3. A blank line indicating all meta-information for the request has been sent.
4. An _optional_ **body** containing data associated with the request (like content of an HTML form), or the document associated with a response. The presence of the body and its size is specified by the start-line and HTTP headers.

#### 3.1 HTTP Request

But anyway, after TCP/IP socket connection is established, now it's time to finally make our request and the request that we make is an HTTP request. ==HTTP requests are messages sent by the client to initiate an action on the server==.

![asynchronous_request-message](../../img/asynchronous_request-message.jpg)

HTTP Requests consist of the following elements:

1. `Start-line`
   - ==An **[HTTP method](https://developer.mozilla.org/en-US/docs/web/HTTP/Methods)**==, usually a verb like [`GET`](https://developer.mozilla.org/en-US/docs/web/HTTP/Methods/GET), [`POST`](https://developer.mozilla.org/en-US/docs/web/HTTP/Methods/POST), or a noun like [`OPTIONS`](https://developer.mozilla.org/en-US/docs/web/HTTP/Methods/OPTIONS) or [`HEAD`](https://developer.mozilla.org/en-US/docs/web/HTTP/Methods/HEAD), that ==defines the operation the client wants to perform==. Typically, a client wants to fetch a resource (using `GET`) or post the value of an [HTML form](https://developer.mozilla.org/en-US/docs/Learn/Forms) (using `POST`), though more operations may be needed in other cases, So you'll see that ==an HTTP request to a server is not only for getting data, but we can also send data==
   - ==The **request target**, usually a **[URL](https://developer.mozilla.org/en-US/docs/Glossary/URL)** or the absolute path of the protocol.== An absolute path, ultimately followed by a `?` and query string. This is the most common form, known as the *origin form*, and is used with `GET`, `POST`, `HEAD`, and `OPTIONS` methods
   - ==The **HTTP version**==, which defines the structure of the remaining message, acting as an indicator of the expected version to use for the response
2. `Headers`
   - ==_Optional_, **[HTTP headers](https://developer.mozilla.org/en-US/docs/web/HTTP/Headers)** that convey additional information for the servers==. HTTP headers from a request follow the same basic structure of an HTTP header: a case-insensitive string followed by a colon (`':'`) and a value whose structure depends upon the header. The whole header, including the value, consists of one single line, which can be quite long. Many different headers can appear in requests
3. `Body`
   - ==The final part of the request is its **body**. _Not all requests have one_: requests fetching resources, like `GET`, `HEAD`, `DELETE`, or `OPTIONS`, usually don't need one.== Some requests send data to the server in order to update it: as often the case with `POST` requests (containing HTML form data)
   - Bodies can be broadly divided into two categories:
     - Single-resource bodies, consisting of one single file, defined by the two headers: [`Content-Type`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) and [`Content-Length`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length)
     - [Multiple-resource bodies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data), consisting of a multipart body, each containing a different bit of information. This is typically associated with [HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)

> **NOTE**: I want to mention that there's also HTTPS, and the main difference between HTTP and HTTPS is that HTTPS is encrypted using TLS or SSL, which are other protocols, but I'm not gonna bore you with these. But besides that, the logic behind HTTP requests and HTTP responses still applies to HTTPS.

So our HTTP request is formed and now it hits the server, which will then be working on it until it has our web page or data ready to send back, and once it's ready it will send it back using an **HTTP response**.

#### 3.2. HTTP Response

![asynchronous_response-message](../../img/asynchronous_response-message.jpg)

Responses consist of the following elements:

1. `Start-line` (also called the *status line*)
   - The version of the HTTP protocol they follow
   - ==A **[status code](https://developer.mozilla.org/en-US/docs/web/HTTP/Status)**, indicating if the request was successful or not, and why.== Common status codes are [`200`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200), [`404`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404) or [`302`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302)
   - ==A **status text**. A brief, purely informational, textual description of the status code to help a human understand the HTTP message.== A typical status line looks like: `HTTP/1.1 404 Not Found`
2. `Headers`
   - ==**[HTTP headers](https://developer.mozilla.org/en-US/docs/web/HTTP/Headers)**, like those for requests.== HTTP headers for responses follow the same structure as any other header: a case-insensitive string followed by a colon (`':'`) and a value whose structure depends upon the type of the header. The whole header, including its value, presents as a single line. Many different headers can appear in responses
3. `Body`
   - ==_Optionally_, a **body** containing the fetched resource. _Not all responses have a body_: responses with a status code that sufficiently answers the request without the need for corresponding payload (like [`201`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201) **`Created`** or [`204`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204) **`No Content`**) usually don't.==

> **NOTE**: As you see, The _HTTP response_ message actually looks quite similar to the _HTTP request_.

## APIs based on HTTP

The most commonly used API based on HTTP is the ==[`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/web/API/XMLHttpRequest) API==, which can be used to exchange data between a [user agent](https://developer.mozilla.org/en-US/docs/Glossary/User_agent) and a server. The modern ==[`Fetch API`](https://developer.mozilla.org/en-US/docs/web/API/Fetch_API)== provides the same features with a more powerful and flexible feature set.

## References

1. [HTTP - MDN](https://developer.mozilla.org/en-US/docs/web/HTTP)
1. [An overview of HTTP - MDN](https://developer.mozilla.org/en-US/docs/web/HTTP/Overview)
1. [HTTP Messages - MDN](https://developer.mozilla.org/en-US/docs/web/HTTP/Messages)
1. [HTTP headers - MDN](https://developer.mozilla.org/en-US/docs/web/HTTP/Headers)
1. [HTTP request methods - MDN](https://developer.mozilla.org/en-US/docs/web/HTTP/Methods)
1. [HTTP response status codes - MDN](https://developer.mozilla.org/en-US/docs/web/HTTP/Status)
1. [The Complete JavaScript Course. From Zero to Expert! - Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/?utm_source=adwords&utm_medium=udemyads&utm_campaign=JavaScript_v.PROF_la.EN_cc.ROWMTA-B_ti.6368&utm_content=deal4584&utm_term=_._ag_130756014153_._ad_558386196906_._kw__._de_c_._dm__._pl__._ti_dsa-774930039569_._li_1011789_._pd__._&matchtype=&gclid=CjwKCAjwiuuRBhBvEiwAFXKaNCuaAhZ8UB5kIldtb76eeAyfM0SUKeceBq3FKF24pNxDVe-_g0-DPxoCnWwQAvD_BwE)
