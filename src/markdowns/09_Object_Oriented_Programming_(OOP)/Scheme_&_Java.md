# Inspiration of JavaScript: Scheme & Java

![scheme_java](../../img/scheme_java.jpg)

The two pillars of JavaScript concepts are ==**Closures**== and ==**Prototypes**==, that not all programming languages have, that are quite complex, but are very powerful if you understand them. With these two pillars, we can start talking about ==programming paradigms==. These paradigms allow us to create programs that are not just simple, basic ones; complex heavy applications using good practices, and closures and prototypes are going to be something we're going to be talking about over and over and over, when we talk about ==**functional** programming== and ==**object oriented** programming==, two very important paradigms when it comes to becoming a great programmer. Now, to finish off this article, I want to talk to you about Scheme and Java.

==When Brendan Eich in 1995 released JavaScript, he was inspired by these two programming languages: Scheme & Java==. Scheme was a programming language that was created at MIT in the 1970s. It was a very unique programming language and I believe the first language to have closures in the program. At the time that JavaScript was created Java was the trendiest language, everybody was using it, everybody was talking about it, companies wanted to hire Java developers. 

Now Brendan Eich wanted to create a programming language that was very easy to use on the web but also used the popularity of Java, which is why JavaScript name kind of derived from. But there was an issue here, Schema and Java are quite different. You see, _Brendan Eich really liked the functional side of Scheme, this idea of closures and functions as first class citizens. But at the same time he also had pressure from the Java community, where classes and classical inheritance was really, really important. This idea of object oriented programming, where objects where the key to building beautiful programs, versus Scheme where functions are the key to building beautiful programs_.

 Now I'm simplifying things a little bit here, but I want you to realize that ==JavaScript was inspired by Scheme and Java, and because of this inspiration we have this multi paradigm language==. Unlike a lot of languages, you can mix and match these paradigms, and you can't really say that JavaScript is an object oriented programming language or a functional language. You can do whatever you want, which in my opinion is actually the beauty of JavaScript, that you can use multi paradigms to build your applications based on your needs, based on what you think will create the best outcome, the most maintainable, the most predictable code. Now that we have these two pillars of closures and prototypal inheritance, two key pieces for us to really dive deep into object oriented programming and functional programming, and how they allow us to create large scale programs.

## Object-Oriented vs Functional Programming

In all programs, there are two primary components: the data (stuff that we keep in our memory) and the behavior (functions/methods), the things that the programs can do. In order for us to deal with this two primary components, to organize them, we initially had languages like Java or Scheme, that had different ideas (paradigms) of what we can do.

==Object-oriented programming says that _bringing **together** the data and its behavior (functions/methods) in a single location called an object_, makes it easier to understand how our programs work. On the other hand, functional programming says that _data and behavior are distinctly different things and should be kept **separate** for clarity_==.

![oop_vs_fp](../../img/oop_vs_fp.jpg)

The way that I like to think about it is object-oriented programming is like building a robot: we have a head component, arm component, chest component, leg component, antenna components, and we build those together. Functional programming says "Just give me a data and I'll act upon that data through functions and I'll return something new from the data that you gave me".

OOP and FP are actually complementary, it's not one over the other. The beauty of JavaScript is that it is multi-paradigm and  you can use both paradigms to make beautiful programs. We can use both of these techniques to make our code easy to reason about, to make it clearer, to make it more understandable, easy to extend, more efficient. We can use each of these paradigms based on our problems and use the techniques in each to pick the right paradigm for the specific problem.

## References

1. [JavaScript: The Advanced Concepts - Andrei Neagoie](https://www.udemy.com/course/advanced-javascript-concepts/)
