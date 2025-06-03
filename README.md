# Next.js Comprehensive Notes

**Date and Time:** 06:09 PM IST, Monday, June 02, 2025

This document provides detailed notes on Next.js, covering essential and advanced topics with explanations and code examples to help you master Next.js development. All content is presented in a single file for convenience.

---

## Table of Contents

1. [Introduction to Next.js](#introduction-to-nextjs)
   - [What is Next.js?](#what-is-nextjs)
   - [Creating Our First Next.js App](#creating-our-first-nextjs-app)
   - [Difference Between React.js and Next.js](#difference-between-reactjs-and-nextjs)
   - [Next.js Course Syllabus](#nextjs-course-syllabus)

2. [Routing in Next.js](#routing-in-nextjs)
   - [Creating Routes with the App Router](#creating-routes-with-the-app-router)
   - [Understanding Layouts: layout.js and page.js](#understanding-layouts-layoutjs-and-pagejs)
   - [Nested Routing with App Router](#nested-routing-with-app-router)
   - [Dynamic Routes and Route Groups](#dynamic-routes-and-route-groups)
   - [Catch-All and Optional Routes](#catch-all-and-optional-routes)
   - [Building Reusable Layouts using layout.js File](#building-reusable-layouts-using-layoutjs-file)
   - [Metadata API in Next.js](#metadata-api-in-nextjs)
   - [Custom 404 Page in Next.js](#custom-404-page-in-nextjs)
   - [What are Route Groups?](#what-are-route-groups)
   - [What are Private Routes?](#what-are-private-routes)

3. [Rendering Paradigms in Next.js](#rendering-paradigms-in-nextjs)
   - [Understanding Different Rendering Paradigms (SSR & CSR)](#understanding-different-rendering-paradigms-ssr--csr)
   - [Static vs Dynamic Rendering](#static-vs-dynamic-rendering)
   - [Static Site Generation (SSG)](#static-site-generation-ssg)
   - [Incremental Site Regeneration (ISR)](#incremental-site-regeneration-isr)
   - [Server Side vs Client Side Components](#server-side-vs-client-side-components)
   - [Hydration Demystified: Bringing Pre-Rendered Pages to Life](#hydration-demystified-bringing-pre-rendered-pages-to-life)
   - [Why Hydration Error Comes?](#why-hydration-error-comes)

4. [Data Fetching and State Management](#data-fetching-and-state-management)
   - [Data Fetching in the App Router](#data-fetching-in-the-app-router)
   - [Fetching Server-Side Data with React Server Components](#fetching-server-side-data-with-react-server-components)
   - [Managing State with React Hooks and Context](#managing-state-with-react-hooks-and-context)
   - [Integrating Third-Party Libraries (Redux)](#integrating-third-party-libraries-redux)

5. [Error Handling in Next.js](#error-handling-in-nextjs)
   - [Error Handling with error.js File](#error-handling-with-errorjs-file)
   - [How to Recover from Errors Without Hard Reload?](#how-to-recover-from-errors-without-hard-reload)
   - [Error Handling in Nested Routes](#error-handling-in-nested-routes)
   - [Handling Client Side Exceptions](#handling-client-side-exceptions)
   - [Global Error Handling in Next.js](#global-error-handling-in-nextjs)

6. [Different Ways of Styling in Next.js](#different-ways-of-styling-in-nextjs)
   - [Adding Styles In Next.js Apps Using CSS](#adding-styles-in-nextjs-apps-using-css)
   - [Using CSS Modules In Next.js](#using-css-modules-in-nextjs)
   - [Using SCSS In Next.js](#using-scss-in-nextjs)
   - [Setting Up Tailwind v4 In Next.js](#setting-up-tailwind-v4-in-nextjs)
   - [Setting Up Tailwind v4 In Existing Next.js Project](#setting-up-tailwind-v4-in-existing-nextjs-project)

7. [Image Optimization In Next.js](#image-optimization-in-nextjs)

8. [Backend Development with Next.js](#backend-development-with-nextjs)
   - [Writing Backend Code In Next.js](#writing-backend-code-in-nextjs)
   - [Creating GET Route Handler In Next.js](#creating-get-route-handler-in-nextjs)
   - [Dynamic Route Handler In Next.js](#dynamic-route-handler-in-nextjs)
   - [Understanding Request Object In Next.js](#understanding-request-object-in-nextjs)
   - [Handling POST Request In Next.js](#handling-post-request-in-nextjs)
   - [Implementing Edit Todo Functionality](#implementing-edit-todo-functionality)
   - [Handling DELETE Request In Next.js](#handling-delete-request-in-nextjs)
   - [Integrating GET And POST Todo API](#integrating-get-and-post-todo-api)
   - [Integrating PUT And DELETE Todo API](#integrating-put-and-delete-todo-api)

9. [Working with MongoDB in Next.js](#working-with-mongodb-in-nextjs)
   - [Connecting MongoDB in Next.js](#connecting-mongodb-in-nextjs)
   - [Creating Mongoose Model in Next.js](#creating-mongoose-model-in-nextjs)
   - [MongoDB CRUD Operations in Next.js: Create and Read](#mongodb-crud-operations-in-nextjs-create-and-read)
   - [MongoDB CRUD Operations in Next.js: Update and Delete](#mongodb-crud-operations-in-nextjs-update-and-delete)

10. [Mastering Authentication in Next.js](#mastering-authentication-in-nextjs)
    - [Understanding Auth Flow In Next.js](#understanding-auth-flow-in-nextjs)
    - [Implementing Register User In Next.js](#implementing-register-user-in-nextjs)
    - [Working With Cookies In Next.js](#working-with-cookies-in-nextjs)
    - [Implementing Login User In Next.js](#implementing-login-user-in-nextjs)
    - [Protecting Todo Endpoints With Reusable Functions In Next.js](#protecting-todo-endpoints-with-reusable-functions-in-nextjs)
    - [Signing Cookies In Next.js](#signing-cookies-in-nextjs)
    - [Session Based Authentication in Next.js](#session-based-authentication-in-nextjs)
    - [Adding User Profile Feature](#adding-user-profile-feature)
    - [Implementing Logout Functionality](#implementing-logout-functionality)
    - [Hashing Passwords in Next.js](#hashing-passwords-in-nextjs)

11. [Deployment and Production](#deployment-and-production)
    - [Deploying Next.js Applications on Vercel](#deploying-nextjs-applications-on-vercel)
    - [Managing Environment Variables](#managing-environment-variables)
    - [Setting Up CI/CD Pipelines](#setting-up-cicd-pipelines)
    - [Optimizing for Production Performance](#optimizing-for-production-performance)

12. [Mastering Server Actions in Next.js](#mastering-server-actions-in-nextjs)
    - [Introduction to Server Actions](#introduction-to-server-actions)
    - [Creating Our First Server Action](#creating-our-first-server-action)
    - [Difference Between Server Actions and API Routes](#difference-between-server-actions-and-api-routes)
    - [Using useActionState for Form Handling](#using-useactionstate-for-form-handling)
    - [Validating Input on the Server](#validating-input-on-the-server)
    - [Validating Input on the Client](#validating-input-on-the-client)
    - [CRUD: Creating Data with Server Actions](#crud-creating-data-with-server-actions)
    - [Updating & Deleting Data with Server Actions](#updating--deleting-data-with-server-actions)
    - [Handling isPending and Transitions Properly](#handling-ispending-and-transitions-properly)
    - [Error Handling and Showing Feedback to User](#error-handling-and-showing-feedback-to-user)

13. [Advanced Next.js Features](#advanced-nextjs-features)
    - [Understanding Middlewares in Next.js](#understanding-middlewares-in-nextjs)
    - [What are Edge Functions?](#what-are-edge-functions)
    - [Performance Optimization Techniques](#performance-optimization-techniques)
    - [Using NextAuth.js for Google Login](#using-nextauthjs-for-google-login)

14. [Industry Level Next.js Project Setup with TypeScript](#industry-level-nextjs-project-setup-with-typescript)
    - [Introduction to Project Setup](#introduction-to-project-setup)
    - [Initializing a Next.js Project with TypeScript](#initializing-a-nextjs-project-with-typescript)
    - [Setting Up ESLint](#setting-up-eslint)
    - [Configuring Prettier](#configuring-prettier)
    - [Automating Code Quality with Husky and Lint-Staged](#automating-code-quality-with-husky-and-lint-staged)
    - [Project Directory Structure](#project-directory-structure)
    - [Adding Git and Commit Guidelines](#adding-git-and-commit-guidelines)
    - [Environment Variables](#environment-variables)

15. [Understanding Legacy Pages Router](#understanding-legacy-pages-router)

---

## Introduction to Next.js

### What is Next.js?

Next.js is a React framework that enhances web development by providing features like server-side rendering (SSR), static site generation (SSG), and built-in routing. It simplifies building fast, SEO-friendly, and scalable applications with minimal setup.

### Creating Our First Next.js App

To start a Next.js project, use the `create-next-app` CLI:

```bash
npx create-next-app@latest my-next-app
cd my-next-app
npm run dev
```

This sets up a project and runs it at `http://localhost:3000`.

### Difference Between React.js and Next.js

- **React.js**: A library for building UI components, requiring additional tools for routing and SSR.
- **Next.js**: A framework built on React, offering SSR, SSG, file-based routing, and API routes out of the box.

### Next.js Course Syllabus

This document covers:
- Introduction and setup
- Routing with App Router
- Rendering paradigms (SSR, CSR, SSG, ISR)
- Data fetching and state management
- Error handling
- Styling options
- Image optimization
- Backend development with API routes
- MongoDB integration
- Authentication
- Deployment
- Server Actions
- Advanced features
- TypeScript project setup
- Legacy Pages Router

---

## Routing in Next.js

### Creating Routes with the App Router

The App Router uses the `app` directory where each folder represents a route, and `page.js` defines the route’s content.

```jsx
// app/page.js
export default function Home() {
  return <h1>Home Page</h1>;
}
```

### Understanding Layouts: layout.js and page.js

- **page.js**: Renders the page content.
- **layout.js**: Wraps page content, reusable across routes.

```jsx
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### Nested Routing with App Router

Nested routes are created by nesting folders:

```jsx
// app/dashboard/settings/page.js
export default function Settings() {
  return <h1>Settings</h1>;
}
```

URL: `/dashboard/settings`

### Dynamic Routes and Route Groups

Dynamic routes use brackets for parameters:

```jsx
// app/blog/[slug]/page.js
export default function BlogPost({ params }) {
  return <h1>Post: {params.slug}</h1>;
}
```

Route groups use parentheses to organize routes without affecting URLs:

```jsx
// app/(auth)/login/page.js
export default function Login() {
  return <h1>Login</h1>;
}
```

URL: `/login`

### Catch-All and Optional Routes

Catch-all routes handle multiple segments:

```jsx
// app/shop/[...slug]/page.js
export default function Shop({ params }) {
  return <h1>Shop: {params.slug.join('/')}</h1>;
}
```

Optional catch-all routes include zero segments:

```jsx
// app/docs/[[...slug]]/page.js
export default function Docs({ params }) {
  return <h1>Docs: {params.slug?.join('/') || 'Home'}</h1>;
}
```

### Building Reusable Layouts using layout.js File

Layouts can be reused for specific sections:

```jsx
// app/dashboard/layout.js
export default function DashboardLayout({ children }) {
  return (
    <div>
      <nav>Dashboard Nav</nav>
      {children}
    </div>
  );
}
```

### Metadata API in Next.js

Set metadata for SEO:

```jsx
// app/page.js
export const metadata = {
  title: 'Home',
  description: 'Welcome to our site',
};

export default function Home() {
  return <h1>Home</h1>;
}
```

### Custom 404 Page in Next.js

Handle 404 errors:

```jsx
// app/404.js
export default function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}
```

### What are Route Groups?

Route groups organize routes logically without impacting URLs, using parentheses (e.g., `(auth)`).

### What are Private Routes?

Private routes require authentication, often protected via middleware:

```js
// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  if (!request.cookies.get('token')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = { matcher: ['/dashboard/:path*'] };
```

---

## Rendering Paradigms in Next.js

### Understanding Different Rendering Paradigms (SSR & CSR)

- **SSR**: Renders pages on the server per request, great for SEO.
- **CSR**: Renders pages on the client, ideal for interactive apps.

### Static vs Dynamic Rendering

- **Static**: Pre-rendered at build time.
- **Dynamic**: Rendered on-demand per request.

### Static Site Generation (SSG)

Pre-renders pages at build time:

```jsx
// pages/index.js (Pages Router)
export async function getStaticProps() {
  const data = await fetchData();
  return { props: { data } };
}

export default function Home({ data }) {
  return <h1>{data.title}</h1>;
}
```

### Incremental Site Regeneration (ISR)

Updates static pages post-build:

```jsx
export async function getStaticProps() {
  const data = await fetchData();
  return { props: { data }, revalidate: 10 };
}
```

### Server Side vs Client Side Components

- **Server Components**: Rendered on the server.
- **Client Components**: Rendered on the client with `'use client'`:

```jsx
// app/counter.js
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### Hydration Demystified: Bringing Pre-Rendered Pages to Life

Hydration makes server-rendered HTML interactive on the client.

### Why Hydration Error Comes?

Mismatches between server and client rendering (e.g., different data) cause hydration errors.

---

## Data Fetching and State Management

### Data Fetching in the App Router

Fetch data in server components:

```jsx
// app/page.js
export default async function Page() {
  const data = await fetch('https://api.example.com/data').then(res => res.json());
  return <h1>{data.title}</h1>;
}
```

### Fetching Server-Side Data with React Server Components

Server components fetch data server-side, passing it to client components.

### Managing State with React Hooks and Context

Use hooks and context for state:

```jsx
// lib/context.js
import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export function MyProvider({ children }) {
  const [value, setValue] = useState('default');
  return <MyContext.Provider value={{ value, setValue }}>{children}</MyContext.Provider>;
}

export function useMyContext() {
  return useContext(MyContext);
}
```

### Integrating Third-Party Libraries (Redux)

Install Redux:

```bash
npm install @reduxjs/toolkit react-redux
```

Set up a store and wrap your app with the provider.

---

## Error Handling in Next.js

### Error Handling with error.js File

Handle errors per route segment:

```jsx
// app/dashboard/error.js
'use client';

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Error: {error.message}</h2>
      <button onClick={reset}>Retry</button>
    </div>
  );
}
```

### How to Recover from Errors Without Hard Reload?

Use the `reset` function to retry rendering.

### Error Handling in Nested Routes

Errors propagate to the nearest `error.js`.

### Handling Client Side Exceptions

Use `try-catch`:

```jsx
'use client';

import { useEffect } from 'react';

export default function Component() {
  useEffect(() => {
    try {
      // Risky code
    } catch (e) {
      console.error(e);
    }
  }, []);
  return <div>Component</div>;
}
```

### Global Error Handling in Next.js

Use middleware or a global layout for app-wide errors.

---

## Different Ways of Styling in Next.js

### Adding Styles In Next.js Apps Using CSS

Use global CSS:

```css
/* styles/globals.css */
body { margin: 0; }
```

```jsx
// app/layout.js
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### Using CSS Modules In Next.js

Scope styles to components:

```css
/* styles/Home.module.css */
.container { padding: 20px; }
```

```jsx
// app/page.js
import styles from '../styles/Home.module.css';

export default function Home() {
  return <div className={styles.container}>Hello</div>;
}
```

### Using SCSS In Next.js

Install `sass`:

```bash
npm install sass
```

Use SCSS files like CSS.

### Setting Up Tailwind v4 In Next.js

Install Tailwind:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure `tailwind.config.js` and add directives to CSS.

### Setting Up Tailwind v4 In Existing Next.js Project

Follow the same steps in an existing project.

---

## Image Optimization In Next.js

Optimize images with the `Image` component:

```jsx
import Image from 'next/image';

export default function Home() {
  return <Image src="/image.jpg" alt="Example" width={500} height={300} />;
}
```

---

## Backend Development with Next.js

### Writing Backend Code In Next.js

Use `app/api` for API routes.

### Creating GET Route Handler In Next.js

```js
// app/api/hello/route.js
export async function GET() {
  return new Response('Hello!');
}
```

### Dynamic Route Handler In Next.js

```js
// app/api/users/[id]/route.js
export async function GET(request, { params }) {
  return new Response(JSON.stringify({ id: params.id }));
}
```

### Understanding Request Object In Next.js

The `request` object includes headers, method, etc.

### Handling POST Request In Next.js

```js
// app/api/todos/route.js
export async function POST(request) {
  const body = await request.json();
  return new Response(JSON.stringify(body), { status: 201 });
}
```

### Implementing Edit Todo Functionality

```js
// app/api/todos/[id]/route.js
export async function PUT(request, { params }) {
  const body = await request.json();
  return new Response(JSON.stringify({ id: params.id, ...body }));
}
```

### Handling DELETE Request In Next.js

```js
// app/api/todos/[id]/route.js
export async function DELETE(request, { params }) {
  return new Response(null, { status: 204 });
}
```

### Integrating GET And POST Todo API

```js
// app/api/todos/route.js
export async function GET() {
  return new Response(JSON.stringify([]));
}

export async function POST(request) {
  const body = await request.json();
  return new Response(JSON.stringify(body), { status: 201 });
}
```

### Integrating PUT And DELETE Todo API

```js
// app/api/todos/[id]/route.js
export async function PUT(request, { params }) {
  const body = await request.json();
  return new Response(JSON.stringify({ id: params.id, ...body }));
}

export async function DELETE(request, { params }) {
  return new Response(null, { status: 204 });
}
```

---

## Working with MongoDB in Next.js

### Connecting MongoDB in Next.js

```js
// lib/mongodb.js
import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

export default connectDB;
```

### Creating Mongoose Model in Next.js

```js
// models/Todo.js
import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
});

export default mongoose.models.Todo || mongoose.model('Todo', TodoSchema);
```

### MongoDB CRUD Operations in Next.js: Create and Read

```js
// app/api/todos/route.js
import connectDB from '../../../lib/mongodb';
import Todo from '../../../models/Todo';

export async function POST(request) {
  await connectDB();
  const { title } = await request.json();
  const todo = await Todo.create({ title, completed: false });
  return new Response(JSON.stringify(todo), { status: 201 });
}

export async function GET() {
  await connectDB();
  const todos = await Todo.find({});
  return new Response(JSON.stringify(todos));
}
```

### MongoDB CRUD Operations in Next.js: Update and Delete

```js
// app/api/todos/[id]/route.js
import connectDB from '../../../../lib/mongodb';
import Todo from '../../../../models/Todo';

export async function PUT(request, { params }) {
  await connectDB();
  const { title } = await request.json();
  const todo = await Todo.findByIdAndUpdate(params.id, { title }, { new: true });
  return new Response(JSON.stringify(todo));
}

export async function DELETE(request, { params }) {
  await connectDB();
  await Todo.findByIdAndDelete(params.id);
  return new Response(null, { status: 204 });
}
```

---

## Mastering Authentication in Next.js

### Understanding Auth Flow In Next.js

Involves registration, login, session management, and route protection.

### Implementing Register User In Next.js

```js
// app/api/auth/register/route.js
export async function POST(request) {
  const { email, password } = await request.json();
  // Save user with hashed password
  return new Response(JSON.stringify({ message: 'Registered' }), { status: 201 });
}
```

### Working With Cookies In Next.js

```js
import { cookies } from 'next/headers';

export async function POST(request) {
  cookies().set('token', 'value', { httpOnly: true });
  return new Response('Cookie set');
}
```

### Implementing Login User In Next.js

```js
// app/api/auth/login/route.js
export async function POST(request) {
  const { email, password } = await request.json();
  cookies().set('token', 'jwt-token');
  return new Response('Logged in');
}
```

### Protecting Todo Endpoints With Reusable Functions In Next.js

```js
// lib/auth.js
import { cookies } from 'next/headers';

export function requireAuth() {
  if (!cookies().get('token')) throw new Error('Unauthorized');
}
```

```js
// app/api/todos/route.js
import { requireAuth } from '../../../lib/auth';

export async function GET() {
  requireAuth();
  return new Response(JSON.stringify([]));
}
```

### Signing Cookies In Next.js

Requires a secret for signing (configure in `next.config.js`).

### Session Based Authentication in Next.js

Use cookies or server-side sessions.

### Adding User Profile Feature

```jsx
// app/profile/page.js
import { cookies } from 'next/headers';

export default function Profile() {
  const token = cookies().get('token');
  return <h1>Profile: {token?.value}</h1>;
}
```

### Implementing Logout Functionality

```js
// app/api/auth/logout/route.js
import { cookies } from 'next/headers';

export async function POST() {
  cookies().delete('token');
  return new Response('Logged out');
}
```

### Hashing Passwords in Next.js

```js
import bcrypt from 'bcrypt';

export async function POST(request) {
  const { password } = await request.json();
  const hashed = await bcrypt.hash(password, 10);
  return new Response(JSON.stringify({ hashed }));
}
```

---

## Deployment and Production

### Deploying Next.js Applications on Vercel

Push to GitHub and deploy via Vercel’s dashboard.

### Managing Environment Variables

```bash
# .env
MONGODB_URI=mongodb://localhost:27017
```

```js
await mongoose.connect(process.env.MONGODB_URI);
```

### Setting Up CI/CD Pipelines

Use GitHub Actions or Vercel for CI/CD.

### Optimizing for Production Performance

Run `next build` and `next start` for optimized production builds.

---

## Mastering Server Actions in Next.js

### Introduction to Server Actions

Server Actions handle mutations directly in components.

### Creating Our First Server Action

```js
// app/actions.js
'use server';

export async function createTodo(formData) {
  const title = formData.get('title');
  return { message: 'Todo created' };
}
```

```jsx
// app/page.js
import { createTodo } from './actions';

export default function Page() {
  return (
    <form action={createTodo}>
      <input name="title" />
      <button type="submit">Add</button>
    </form>
  );
}
```

### Difference Between Server Actions and API Routes

- **Server Actions**: For component-level mutations.
- **API Routes**: For general-purpose APIs.

### Using useActionState for Form Handling

```jsx
'use client';

import { useActionState } from 'react';
import { createTodo } from './actions';

export default function Page() {
  const [state, formAction] = useActionState(createTodo, { message: '' });
  return (
    <form action={formAction}>
      <input name="title" />
      <button type="submit">Add</button>
      <p>{state.message}</p>
    </form>
  );
}
```

### Validating Input on the Server

```js
'use server';

export async function createTodo(formData) {
  const title = formData.get('title');
  if (!title) return { message: 'Title required' };
  return { message: 'Todo created' };
}
```

### Validating Input on the Client

```jsx
'use client';

export default function Page() {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.title.value) alert('Title required');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="title" />
      <button type="submit">Add</button>
    </form>
  );
}
```

### CRUD: Creating Data with Server Actions

See “Creating Our First Server Action”.

### Updating & Deleting Data with Server Actions

```js
'use server';

export async function updateTodo(id, formData) {
  const title = formData.get('title');
  return { message: 'Updated' };
}

export async function deleteTodo(id) {
  return { message: 'Deleted' };
}
```

### Handling isPending and Transitions Properly

```jsx
'use client';

import { useTransition } from 'react';
import { deleteTodo } from './actions';

export default function Page() {
  const [isPending, startTransition] = useTransition();
  return (
    <button onClick={() => startTransition(() => deleteTodo('1'))}>
      {isPending ? 'Deleting...' : 'Delete'}
    </button>
  );
}
```

### Error Handling and Showing Feedback to User

Return errors from actions and display them.

---

## Advanced Next.js Features

### Understanding Middlewares in Next.js

Run code before requests complete:

```js
// middleware.js
export function middleware(request) {
  if (request.nextUrl.pathname === '/admin') {
    return NextResponse.redirect(new URL('/', request.url));
  }
}
```

### What are Edge Functions?

Functions running at the network edge for low latency.

### Performance Optimization Techniques

- Use dynamic imports.
- Optimize images.
- Leverage server components.

### Using NextAuth.js for Google Login

Install `next-auth` and configure:

```js
// app/api/auth/[...nextauth]/route.js
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
};

export default NextAuth(authOptions);
```

---

## Industry Level Next.js Project Setup with TypeScript

### Introduction to Project Setup

Set up a professional Next.js project with TypeScript and tools.

### Initializing a Next.js Project with TypeScript

```bash
npx create-next-app@latest my-app --typescript
```

### Setting Up ESLint

```bash
npm install eslint --save-dev
npx eslint --init
```

### Configuring Prettier

```bash
npm install prettier --save-dev
```

```json
// .prettierrc
{ "semi": true, "singleQuote": true }
```

### Automating Code Quality with Husky and Lint-Staged

```bash
npm install husky lint-staged --save-dev
```

```json
// package.json
{
  "husky": { "hooks": { "pre-commit": "lint-staged" } },
  "lint-staged": { "*.{ts,tsx}": ["eslint --fix", "prettier --write"] }
}
```

### Project Directory Structure

```
my-app/
├── app/
├── components/
├── lib/
├── styles/
├── public/
```

### Adding Git and Commit Guidelines

Add `.gitignore` and define commit rules.

### Environment Variables

Use `.env` files for configuration.

---

## Understanding Legacy Pages Router

The Pages Router uses the `pages` directory for routing, e.g., `pages/index.js` for `/`. It’s legacy but still supported.

