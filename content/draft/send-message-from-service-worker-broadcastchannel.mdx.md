---
title: Send message from a service worker
date: 2021-05-15
tags: [JavaScript, service-worker, browser-apis]
excerpt: Easily communicate with Service Worker using BroadcastChannel API
---

Communication between service workers and the clients browser window can be achieved by easily doing:

```js
self.clients.matchAll().then((clients) => {
  clients.forEach((client) => client.postMessage({ msg: "Hello from SW" }))
})
```

Here, the self variable `self` is a reserved keyword in a service worker context. It references the global scope of the current worker execution scope and has some interesting properties. It serves as the window of a browser JavaScript context.

In the above snippet, all the clients that run the service worker are loaded, then the ``.postMessage` is called to send message directly to the original javascript runtime of the service worker.

Sometimes, the `clients.matchAll` method will return an empty list, meaning that there are no clients for the current service worker, which is actually not true!

To facilitate this, we can use the `BroadcastChannel` API to send messages to and from a service worker context from a JavaScript context.

The `BroadcastChannel` API serves like an event Bus inside of a browser. It registers a channel that lives through out the entire lifecycle of the JavaScript runtime, and the channel would be able to send and receive messages regardless of where it is initiated or called.

Broadcast Channel has a one to many subscription model, there can as many subscribers listening to events from a single channel. Also, the events are only sent and received to scripts executing on same origin, even in different browser tab or browser window.

### Using `BroadcastChannel`

To create an broadcast channel, initiate the channel then pass the name of the channel for our event broadcasts.

```js
const broadCaster = new BroadcastChannel("sw-messages")
```

Now, the channel can be used to send a message:

```js
broadCaster.postMessage({ message: "Hello from BroadcastChannel" })
```

The broadcasted message can be consumed by:

```js
const receiver = new BroadcastChannel("sw-messages")
receiver.addEventListener("message", function eventListener(event) {
  console.log(event)
})
```

Using the addEvenListener to listen to the "message" event, any message broadcasted to the sw-messages channel, would be handled by the code above.

### Use cases

This does not mean that the implementation is limited to service workers, think of two different parts of an application running at different execution contexts but need to pass information across to each other. BroadcastChannel API can be very useful to solve this.

Scenarios like, keeping track of changes within a web app running in different tabs, like the logout button click. Also, keeping track of user interactions/updates from a remote server on a web app running in different tabs.

### Browser compatibility?

This feature is part of web standard but still [not supported in Safari](https://caniuse.com/?search=broadcastchannel) but has good support in Chrome and Firefox.

Ciao!
