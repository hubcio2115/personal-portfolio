---
title: "Is OOP Evil?"
publishDate: 2023-11-30
readingTime: 8
---

Recently I came about an amazing [video](https://youtu.be/QM1iUe6IofM?si=pc5nkuXQcXTepvFN) of Brian Will. I cannot do this video justice I really encourage you to give it a watch. But if you want to bear a little with me 🙂 in this article I'm mostly paraphrasing the video. So without further ado...

## Is OOP Even Good?

No, definitely not. It does not fit any problem and you should not take it seriously. That's the short answer.

## What is not the Problem

- classes - putting **everything** in a class is the problem
- performance
- abstraction
- aesthetics - code aesthetics **DO** matter:
  - elegance
  - simplicity
  - flexibility
  - readability
  - maintainability
  - structure

OOP delivers only _illusions_.

## Competing Paradigms - What is OOP Really?

### Paradigms

- procedural + imperative _(the default)_
- procedural + functional _(minimise state)_
- object-oriented + imperative _(segregate state)_
- object-oriented + functional _(do both)_

### Definitions

- _procedural_ - no explicit association between datatypes and functions + behaviours
- _imperative_ - you can mutate state whenever you feel like it, it can cause headaches but you solve them as you go
- _functional_ - most of the procedures (functions) should be pure, that is to minimise the state as much as possible
- _object-oriented_ - we pack the state and encapsulate it

**Inheritance is irrelevant** - most people say that you should use inheritance carefully or not at all!

**Polymorphism is not _(exclusively)_ OOP** - you can have procedural code that is even more polymorphic than what is available in most OOP languages.

**Encapsulation doesn't work\*** (at fine-grained levels of code) - this is how core OOP rules say to use it, to chop-chop everything into little pieces

## Why Does OOP Dominate?

Business managers want cookie-cutter solutions. They heard that everyone is using OOP so they also do that.

### Java

When Java came to the world it was in times of 1990 it came as a welcome improvement. Compared to alternatives it **was** really simple. At that time other options would be:

- C/C++
- Visual Basic
- Pascal

so it got people's attention.

- On the surface level it was less cryptic in comparison to C APIs. In C you have `ioctl` and other horrible abbreviations while in Java you have `FileInputSteam` _(but after that, they went in another horrible direction and we ended up with `TransactionAwarePersistenceManagerFactoryProxy.
PersistenceManagerFactoryInvocationHandler`)_.
- It has curly braces - it's important ok
- It's compiled to `bytecode` - then it mattered, now that tooling for other languages improved it's something not worth considering
- It has namespaces - no more importing header files!
- It has garbage collection!
- Throwing errors is bad, but better than what you do in C and C++

People also liked `subject.verb(object)` of method calls. Because that's what we do in English. The problem is that most of the time the difference between `subject` and `object` which is the problem. Also, it allowed people to get a **style of programming where you can autocomplete your way through the problem (which is really nice!)**.

At the time OOP seemed good for GUI engineering. This packs things into components, small building blocks from which you assemble your GUI.

**Java'd succeeded anyway even if it was not OO but just procedural**. Python is exactly that. It has the niceties of Java _(except strict types)_ but does not force you to pack everything into a class.

It's also important that as we build bigger and bigger systems we want simple rules to guide us. OOP seemed to present a unit of abstraction and a set of guidelines whereby we can incrementally accrete larger and larger systems. This line of thinking leads us to:

- patterns
- SOLID
- dependency injection
- Agile
- text-driven-development

they were introduced to improve OOP. But to me, all they are are band-aids that were applied to compensate for the fact that the original vision of OOP has never panned out and every few years there is a new ideology in town about how we actually do OOP fr fr this time.

## Why Does OOP not Work?

What's an object? Object is a bundle of encapsulated states and we don't interact with the state directly, all the interactions from the outside world come through messages. Objects have a set of messages that they will receive called _interface_. So we have private information hidden behind an interface. When it receives said message it can send it to other objects so we can conceive OO as a graph of objects all communicating with each other by sending messages.

Many people have forgotten that _sending messages_ does not mean strictly calling methods. Originally conceptually messages send only copies of objects, not references. Messages send information about the state, not the state itself. Objects are state.

1. Messages cannot pass object references - I've never seen Java/C# code that follows this rule, for good reason
2. For an object to send a message to another it has to hold private a reference to it
3. If object A sends a message to object B, B must be part of A's private state

### Encapsulation

Since messages can _(indirectly)_ read and modify state **the moment objects are shared, encapsulation goes out of the window**.

The only way to encapsulate objects is a strict hierarchy of references/messages, aka. God Object holding references to all of its sub-components. God Object cannot interact with its grandchild it strictly has to do that through its child. I know what I'm talking about in that case because I'm using React for the most part.

**Obviously no one writes _(whole)_ programs this way**. Because it's absurd. You can also not do that and make relations with other objects willy-nilly.

**The proper OOP way and the improper OOP way BOTH SUCK**. When I look at your OOP code base what I'm going to encounter is either an over-engineered giant tower of abstractions or I'm going to be looking at this inconsistently architected pile of objects that are all probably tangled together like Christmas lights. You'll have all of these objects giving you this warm fuzzy feeling of encapsulation but you're not going to have any real encapsulation of any significance.

What people tend to create in the case of OOP programs are overly architected buildings where the walls have been built before floor plans have been made. So what happens down the line is oh wait we need to get from this over here to that over there but oh wait we've erected barriers in between so we end up busting a bunch of holes through the walls like the Kool-aid guy. The resulting pattern is not organised at all it's just Swiss cheese.

The lesson from this is we should be careful when imposing structure. It's actually better to start out with a free-form absence of structure rather than impose a structure that will likely turn out to not really fit our problem it also hinders change and confuses anyone looking at our code because it implies one thing but then what's really going on is another.

In the OO world we have to think about all these graphs:

- inheritance hierarchy - organization of classes that reflects the relationship between them
- composition graph - constructing classes using instances of other classes rather than through inheritance
- data flows
- coal graph

In the procedural world, we only have to think about the coal graph and it's liberating. We can think about our code independently of any notion of responsibilities. Without these self-imposed barriers. I'm not constantly trying to group and modularise into these small units of so-called single responsibilities.

When writing OO code I always have to play this game. I have this mental list of the obvious data types that my code will deal with and have a separate mental list of all the imagined behaviours I have in my program. OOP ideology demands that I take all my behaviours and somehow associate each one with one of my datatypes. What it means in any non-trivial program is I'll be forced to introduce these data types that will play a role in these containers which otherwise don't fit with my obvious datatypes.

In the end, you'll end up with the majority of data types being these so-called data types. Where we end up is the Kingdom of Nouns:

- Service
- Manager
- X-er

All have to be reconceptualised instead of being functions it has to be nouns in this set of behaviours.

We end up dealing with these stupid dilemmas and question ourselves:

- "Should a Message `send()` itself?"
- "Or should a Sender `send()` Messages?"
- "Should a Receiver `receive()` Messages?"
- "Or should a Connection `transmit()` Messages?"

Really quickly real-world modeling, which OOP promises, becomes this fool's game where there aren't any real good answers.

In my opinion **Object Oriented Analysis Design (OOAD) becomes Object Oriented Analysis Paralysis**. You're going to waste a lot of time having to conceptualise these elements of your program.

OOP is sold to students on those trivial problems that neatly model real-world taxonomy. Like a `Cat` object that extends the `Animal` class. What we get in practice in analysis and design is a very abstract excess structure with no obvious real-world analogs.

### Abstractions

In the programming world _"abstract"_ is something simplified but in the real world _"abstract"_ is hard to understand. Something abstract has no real resemblance to the things of a common daily life. It turns out that most things that programs do are abstract in this sense. So it shouldn't be surprising that we have great difficulty conceptualizing programs in terms of neatly packed self-contained modules that don't have a particular real-world analog.

When we pollute our code with Do-ers we're not really making it easier to understand. We are putting a 🙂 on the underlying abstract business and for every excess level of abstraction we're getting more abstractness. Simpler code is always better than more complex, well-named code.

A class called X will only be loosely related to X but all of the real work is stored elsewhere scattered throughout the code. Why define X if it does not contain everything related to X? It leads to misleading code structure and how does that help?

OOP tends to fracture the functionality of our code. It's not fun to have 6 open code tabs and jump 5 times to get a definition of one method. This could be self-contained one unit of code. By splitting code you are not reducing complexity but spreading it around. You've taken a neatly organized deck of cards and thrown it into the air so you can play 52-card pick-up.

## If not OO what Then? What Does That Look Like?

You're going to be writing procedural code but what does it look like? As I said at the beginning you don't have to throw away classes. Write methods only when the exclusive association with the data types is not in doubt. If you have an `Animal` that `eats()` it can have a class. If you start to wonder if this class really has an association with this method you should declare a plain function instead.

We won't be attempting to encapsulate the state. But the shared state is still a problem, what do we do about that? We can follow broad guidelines to mitigate the problem:

1. When in doubt, parametrize - rather than passing data to functions through global variables you should pass them in as arguments
2. Bundle globals into structs, records, and classes - even if you'll have a single instance it's still worth it having it. Also now you can conveniently pass this global state to functions because they're a data type
3. Favour pure functions _(Easier when efficiency is not a priority)_ - pure functions are only pure self-contained of code
4. Encapsulate _(loosely)_ at the level of namespaces, packages, modules
5. Don't be afraid of long functions _(Do be afraid of needlessly shared state)_:
   - Prefer commenting sections over extracting them
   - Prefer nested functions
   - Don't stray from the left margin too far for too long
   - Avoid/extract logical complexity
   - Constrain scope of local variables

## Conclusion

What I want you to do is at least try procedural programming. Don't be afraid of breaking a few rules. If you've felt any paralysis that I've felt attempting to do OOP properly I think you'll find abandoning all those ideas and just reverting to procedural to be a liberating experience.

I can tell you that reading:

- "Design Patterns"
- "Clean Code"
- "Growing Object-Oriented Software Guided by Tests"
- "Refactoring Improving the Design of Existing Code"
- "Test-Driven Development"

won't help you and you'll waste your time trying to live up to their ideals. Some of them have good ideas don't get me wrong, like TDD. But this is the problem kernels of those ideas have been taken to holistic extremes.
