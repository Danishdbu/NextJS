# Next.js Frontend Development Notes for Beginners to Advanced 

## Section 1: Introduction to Next.js

### Next.js Course Syllabus
This course covers Next.js 15 fundamentals to advanced concepts:
- **Section 1**: Introduction, setup, and differences from React.
- **Section 2**: App Router, layouts, dynamic routes, and metadata.
- **Section 3**: Rendering paradigms (SSR, CSR, SSG, ISR) and hydration.
- **Section 4**: Data fetching with Server Components and state management.
- **Section 5**: Error handling with `error.js`, recovery, and global errors.
- **Section 6**: Styling with CSS, CSS Modules, SCSS, Tailwind v4, and image optimization.
- 
## Introduction to Next.js
Next.js is a React-based framework for building modern web applications. It simplifies React development by providing features like server-side rendering (SSR), static site generation (SSG), file-based routing, and API routes, making it ideal for performance-driven, SEO-friendly applications.

### Why Learn Next.js?
- **React Foundation**: Built on React, so knowing React basics helps.
- **Performance**: Automatic optimization (e.g., code splitting, image optimization).
- **SEO-Friendly**: Supports SSR and SSG for better search engine indexing.
- **Developer Experience**: Features like hot reloading, file-based routing, and built-in API routes.
- **Scalability**: Suitable for small projects to large-scale applications.

### Prerequisites
- Basic HTML, CSS, and JavaScript.
- Familiarity with React (components, hooks, props, state).
- Node.js and npm/yarn installed.

---

### Creating Our First Next.js App
**Steps**:
1. Install Next.js 15:
   ```bash
   npx create-next-app@15 my-next-app
   cd my-next-app
   npm run dev
   ```
2. Open `http://localhost:3000` to view the app.
3. Use Turbopack for faster development:
   ```bash
   npm run dev -- --turbo
   ```

**Example**: Basic homepage.
```jsx
// app/page.js
export default function Home() {
  return <h1>My First Next.js 15 App</h1>;
}
```

**Directory Structure**:
- `app/`: Routes, layouts, and pages.
- `public/`: Static assets (images, fonts).
- `components/`: Reusable components.
- `lib/`: Utilities and data-fetching logic.

### Difference Between React.js and Next.js
- **React.js**:
  - Client-side framework for building UI.
  - Requires manual setup for routing, SSR, and optimization.
  - No built-in file-based routing.
- **Next.js 15**:
  - Built on React 19, adds server-side features.
  - App Router for file-based routing.
  - Supports SSR, SSG, ISR, and Server Components.
  - Built-in image optimization, API routes, and SEO tools.

---

## Section 2: Routing in Next.js

### Creating Routes with the App Router
Next.js 15 uses the `app/` directory for routing. Each `page.js` file defines a route.

**Example**: Create a homepage and about page.
```jsx
// app/page.js
export default function Home() {
  return <h1>Home Page</h1>;
}
```
```jsx
// app/about/page.js
export default function About() {
  return <h1>About Page</h1>;
}
```
- Access at `/` and `/about`.

### Understanding Layouts: layout.js and page.js
- **`page.js`**: Defines the content for a specific route.
- **`layout.js`**: Wraps pages with shared UI (e.g., navigation).

**Example**: Root layout with navigation.
```jsx
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <a href="/">Home</a> | <a href="/about">About</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
```

### Nested Routing with App Router
Nested routes are created by nesting folders in `app/`.

**Example**: Blog section with nested routes.
```jsx
// app/blog/page.js
export default function Blog() {
  return <h1>Blog Home</h1>;
}
```
```jsx
// app/blog/post/page.js
export default function Post() {
  return <h1>Blog Post</h1>;
}
```
- Access at `/blog` and `/blog/post`.

### Dynamic Routes and Route Groups
Dynamic routes use `[param]` folder names.

**Example**: Dynamic blog post.
```jsx
// app/blog/[id]/page.js
export default function Post({ params }) {
  return <h1>Post ID: {params.id}</h1>;
}
```
- Access at `/blog/1`.

**Route Groups**: Use `(group)` to organize routes without affecting URLs.
```jsx
// app/(marketing)/about/page.js
export default function About() {
  return <h1>About Page</h1>;
}
```
- URL remains `/about`, but organized under `(marketing)`.

### Catch-All and Optional Routes
- **Catch-All**: `[...slug]` captures all segments.
- **Optional Catch-All**: `[[...slug]]` includes the root path.

**Example**: Catch-all route.
```jsx
// app/blog/[...slug]/page.js
export default function CatchAll({ params }) {
  return <h1>Segments: {params.slug?.join('/')}</h1>;
}
```
- Access at `/blog/a/b/c` → Shows `a/b/c`.

**Optional Catch-All**:
```jsx
// app/blog/[[...slug]]/page.js
export default function OptionalCatchAll({ params }) {
  return <h1>Segments: {params.slug?.join('/') || 'Root'}</h1>;
}
```
- Works for `/blog` and `/blog/a/b`.

### Building Reusable Layouts using layout.js File
Layouts can be nested for specific routes.

**Example**: Blog-specific layout.
```jsx
// app/blog/layout.js
export default function BlogLayout({ children }) {
  return (
    <div>
      <h2>Blog Header</h2>
      {children}
    </div>
  );
}
```
- Applies to all routes under `/blog`.

### Metadata API in Next.js
The Metadata API sets page metadata for SEO.

**Example**: Add metadata to homepage.
```jsx
// app/page.js
import { metadata } from 'next';

export const metadata = {
  title: 'My Next.js 15 App',
  description: 'A Next.js 15 learning app',
};

export default function Home() {
  return <h1>Home</h1>;
}
```
- For dynamic metadata:
```jsx
// app/blog/[id]/page.js
export async function generateMetadata({ params }) {
  const id = params.id;
  return {
    title: `Post ${id}`,
    description: `Details for post ${id}`,
  };
}
```

### Custom 404 Page in Next.js
Create a custom 404 page in the App Router.

**Example**:
```jsx
// app/not-found.js
export default function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}
```
- Displays for undefined routes.

### What are Route Groups?
Route groups (`(group)`) organize routes without affecting URLs, useful for separating concerns (e.g., marketing vs. app routes).

**Example**:
- `app/(marketing)/about/page.js` → `/about`
- `app/(app)/dashboard/page.js` → `/dashboard`

### What are Private Routes?
Private routes restrict access using middleware.

**Example**:
```js
// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const isAuthenticated = request.cookies.get('token');
  if (!isAuthenticated && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
```

---

## Section 3: Rendering Paradigms in Next.js

### Understanding Different Rendering Paradigms (SSR & CSR)
- **Server-Side Rendering (SSR)**: Renders on each request, ideal for dynamic data.
- **Client-Side Rendering (CSR)**: Renders in the browser, suitable for interactive UIs.
- Next.js 15 combines both with Server Components (server) and Client Components (`'use client'`).

### Static vs Dynamic Rendering
- **Static**: Pre-rendered at build time (SSG) or incrementally (ISR).
- **Dynamic**: Rendered on each request (SSR) or in the browser (CSR).

### Static Site Generation (SSG)
SSG pre-renders pages at build time using Server Components.

**Example**:
```jsx
// app/posts/page.js
async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'force-cache',
  });
  return res.json();
}

export default async function Posts() {
  const posts = await getPosts();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

### Incremental Static Regeneration (ISR)
ISR updates static pages without rebuilding the site.

**Example**:
```jsx
// app/posts/page.js
async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 10 },
  });
  return res.json();
}

export default async function Posts() {
  const posts = await getPosts();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

### Server Side vs Client Side Components
- **Server Components**: Run on the server, reduce client-side JavaScript.
- **Client Components**: Run in the browser, marked with `'use client'`.

**Example**:
```jsx
// app/page.js (Server Component)
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'force-cache' });
  return res.json();
}

export default async function Home() {
  const posts = await getData();
  return <ClientComponent posts={posts} />;
}
```
```jsx
// components/ClientComponent.js (Client Component)
'use client';
import { useState } from 'react';

export default function ClientComponent({ posts }) {
  const [filter, setFilter] = useState('');
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter posts"
      />
      <ul>
        {posts
          .filter((post) => post.title.includes(filter))
          .map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
      </ul>
    </div>
  );
}
```

### Hydration Demystified: Bringing Pre-Rendered Pages to Life
Hydration makes static HTML interactive by attaching React event listeners in the browser.

**How it Works**:
1. Server renders HTML (SSR/SSG).
2. Browser loads HTML and JavaScript.
3. React “hydrates” the HTML, enabling interactivity.

### Why Hydration Error Comes?
Hydration errors occur when server-rendered HTML doesn’t match the client’s DOM, often due to:
- Conditional rendering differences (e.g., `Date.now()`).
- Third-party scripts modifying the DOM.
- Incorrect use of `'use client'`.

**Fix**:
- Ensure consistent rendering (e.g., avoid browser-specific APIs on the server).
- Use dynamic imports for client-only components:
```jsx
import dynamic from 'next/dynamic';
const ClientOnly = dynamic(() => import('../components/ClientOnly'), { ssr: false });
```

---

## Section 4: Data Fetching and State Management

### Data Fetching in the App Router
Use `fetch` with Server Components for data fetching.

**Example**:
```jsx
// app/posts/page.js
async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'force-cache',
  });
  return res.json();
}

export default async function Posts() {
  const posts = await getPosts();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

### Fetching Server-Side Data with React Server Components
Server Components simplify server-side data fetching.

**Example**:
```jsx
// app/user/[id]/page.js
async function getUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: 'no-store',
  });
  return res.json();
}

export default async function User({ params }) {
  const user = await getUser(params.id);
  return <h1>User: {user.name}</h1>;
}
```

### Managing State with React Hooks and Context
Use React hooks (`useState`, `useContext`) for simple state management.

**Example**:
```jsx
// app/context.js
'use client';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('light');
  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
```
```jsx
// app/layout.js
import { AppProvider } from './context';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
```
```jsx
// app/page.js
'use client';
import { useAppContext } from './context';

export default function Home() {
  const { theme, setTheme } = useAppContext();
  return (
    <div>
      <h1>Theme: {theme}</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}
```

### Integrating Third-Party Libraries (Redux)
Use Redux Toolkit for complex state management.

**Setup**:
1. Install:
   ```bash
   npm install @reduxjs/toolkit react-redux
   ```
2. Create store:
```jsx
// lib/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```
```jsx
// lib/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
```
3. Wrap app:
```jsx
// app/layout.js
'use client';
import { Provider } from 'react-redux';
import { store } from '../lib/store';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
```
4. Use in component:
```jsx
// app/page.js
'use client';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../lib/counterSlice';

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}
```

---

## Section 5: Error Handling in Next.js

### Error Handling with error.js File
Use `error.js` for route-specific error boundaries.

**Example**:
```jsx
// app/blog/[id]/error.js
'use client';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Error: {error.message}</h2>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
```
- Catches errors in `/blog/[id]` route.

### How to Recover from Errors Without Hard Reload?
Use the `reset` function to retry rendering.

**Example** (see above): The `reset()` function re-renders the route.

### Error Handling in Nested Routes
Nested `error.js` files handle errors for specific routes.

**Example**:
```jsx
// app/blog/error.js
'use client';
export default function BlogError({ error, reset }) {
  return (
    <div>
      <h2>Blog Error: {error.message}</h2>
      <button onClick={() => reset()}>Retry</button>
    </div>
  );
}
```
- Applies to all `/blog/*` routes.

### Handling Client-Side Exceptions
Use `'use client'` components with try-catch blocks.

**Example**:
```jsx
// components/ClientComponent.js
'use client';
import { useState } from 'react';

export default function ClientComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const res = await fetch('https://invalid-api');
      setData(await res.json());
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {error && <p>Error: {error}</p>}
      {data && <p>Data: {JSON.stringify(data)}</p>}
    </div>
  );
}
```

### Global Error Handling in Next.js
Use `app/global-error.js` for top-level errors.

**Example**:
```jsx
// app/global-error.js
'use client';
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Global Error: {error.message}</h2>
        <button onClick={() => reset()}>Try Again</button>
      </body>
    </html>
  );
}
```

---

## Section 6: Different Ways of Styling in Next.js

### Adding Styles In Next.js Apps Using CSS
Use global CSS in `app/globals.css` or import CSS files.

**Example**:
```css
/* app/globals.css */
body {
  font-family: Arial, sans-serif;
}
```
```jsx
// app/page.js
import '../globals.css';

export default function Home() {
  return <h1>Styled Home</h1>;
}
```

### Using CSS Modules In Next.js
CSS Modules scope styles locally.

**Example**:
```jsx
// components/Button.js
import styles from './Button.module.css';

export default function Button() {
  return <button className={styles.btn}>Click Me</button>;
}
```
```css
/* components/Button.module.css */
.btn {
  background-color: blue;
  color: white;
  padding: 10px;
}
```

### Using SCSS In Next.js
Next.js 15 supports SCSS with `sass`.

**Setup**:
1. Install:
   ```bash
   npm install sass
   ```
2. Create SCSS file:
```scss
// app/styles/button.scss
$primary: blue;

.btn {
  background-color: $primary;
  color: white;
  padding: 10px;
}
```
3. Import in component:
```jsx
// components/Button.js
import styles from '../styles/button.module.scss';

export default function Button() {
  return <button className={styles.btn}>SCSS Button</button>;
}
```

### Setting Up Tailwind v4 In Next.js
Tailwind v4 is a lightweight, modern CSS framework.

**Setup**:
1. Install:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
2. Configure `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {} },
  plugins: [],
};
```
3. Update `app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Example**:
```jsx
// app/page.js
export default function Home() {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded">
      Tailwind v4 Button
    </button>
  );
}
```

### Setting Up Tailwind v4 In Existing Next.js Project
1. Follow the setup steps above.
2. Ensure `content` in `tailwind.config.js` includes all relevant paths.
3. Remove conflicting CSS to avoid specificity issues.

### Image Optimization In Next.js
The `next/image` component optimizes images automatically.

**Example**:
```jsx
// app/page.js
import Image from 'next/image';

export default function Home() {
  return (
    <Image
      src="/example.jpg"
      alt="Example"
      width={500}
      height={300}
      priority
    />
  );
}
```
- `priority`: Loads image eagerly for above-the-fold content.
- Supports AVIF/WebP formats and lazy loading.
