# Node.js, NPM, and Express.js Guide

## What is Node.js?

Node.js is a **JavaScript runtime environment** that allows you to run JavaScript code **outside of the browser**—on a server or local machine.

- Think of Node.js as the engine that runs JavaScript code.
- With Node.js, you can build:
  - Servers
  - APIs
  - Backend Services
  - Command-line tools

---

## What is NPM?

NPM (Node Package Manager) is the **default package manager** that comes with Node.js.

- It allows you to:
  - Install and manage packages (libraries)
  - Share code with others
  - Maintain dependencies in your project
- In simple words: **It helps you manage JavaScript libraries easily.**

---

## What is Express.js?

Express.js is a **minimal and flexible web framework** for Node.js.

- Used to build:
  - RESTful APIs
  - Web servers
- Handles:
  - Routing
  - Middleware
  - HTTP Requests: `GET`, `POST`, `PUT`, `DELETE`

### How Express Works

1. The **frontend** (browser) makes a request using `fetch` or `axios`.
2. **Express** receives the request, processes it (maybe connects to a database), and returns a response.

---

## Example Express Server

```js
// backend/index.js

const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON
app.use(express.json());

// Example GET route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```

---

## Can Node.js Work Without Express?

Yes, Node.js can work without Express to build backend services and APIs.

It has a built-in **http** module that allows you to manually handle HTTP requests and responses, but it operates at a lower level.

- You have to manually handle routing.
- You’ll write more boilerplate code.
- No middleware support by default.

### Example Node.js Server Without Express

```js
// backend/server.js

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/api/hello' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello from Node.js without Express!' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Route not found');
  }
});

server.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});
```

---

## Alernative to Express.JS

- Koa
- Fastify
- NestJS
- NextJS

## What is NestJS

A backend framework for building scalable server-side application using typesript(or javascript).
- Built on top of Node.js and express
- Easy to use with MongoDB,PostgresSQL

## What is NextJS?

A frotend framework for building react base web application with optional backend capabilities.
- Built with React
- Has Server-Side Rendering(SSR) and Staic Side Generation(SSG)
- Allows to build api using api routes(file based routing )

## What is SSR?

- HTML is generating on the server of every request.
- Faster first page load
- Better for SEO(Search engine can view full content immediately)

## What is SSG?

- HTML is prebuilt at build time, not per request.
- Super fast, because it is serving static files.
- Great for performance and SEO

## What is Monorepo

a monorepo is a responsitory is when you keep multiple project like frontend,backend,share code in one place.
