### The Observer pattern

-Another important and fundamental pattern used in Node.js is the Observer pattern.
Together with the Reactor pattern and callbacks, the Observer pattern is an absolute
requirement for mastering the asynchronous world of Node.js.

## The EventEmitter

-- The EventEmitter class allows us to register one or more
functions as listeners, which will be invoked when a particular event type is fired.

### The Event Emitter and Memory Leaks.

-- When event are subscribed to observers with a life long span (i.e variables and functions ), it is vital and extremly important that we unsubcribe our listeners once they are no longer needed, so as to free-up the memory space, since it is no longer in use.

```
    const thisMemory = "A new String"
    const newListner = () => {
            console.log(thisMemory)
    }
    emmiter.on('any_event' , listener)
```

## Why are Memory Leaks worth taking notes of ?

Unreleased EventEmitter listeners are the main source of memory leaks in
Node.js (and JavaScript in general).

If, for example, we register a listener to every incoming request at every incoming HTP request and never release it, then we are causing a memory leak, because with every incoming request, so shall the size of our application grows, which eventually would crash our application. To prevent such a situation, we can
release the listener with the removeListener() method of the EventEmitter:

```
emitter.removeListener('an_event', listener)
```

_We can use the convenience method once(event, listener) in place of on(event, listener) to automatically unregister a listener after the event is received for the first time. However, be advised that if the event we specify is never emitted, then the listener is never released, causing a memory leak._
