💡 Loading Strategy Overview
---
| 🔍 **Use Case**                          | ⚙️ **Loading Technique**        |
| ---------------------------------------- | ------------------------------- |
| **Server Component (App Router)**        | `<Suspense fallback={...}>`     |
| **Whole Route Loading**                  | `loading.js` in the same folder |
| **Client-Side Fetching (`useEffect`)**   | `useState` + `useEffect`        |
| **Static Generation (`getStaticProps`)** | No loading needed at runtime    |
---

# ⚡ Parallel Data Fetching in Next.js

Parallel data fetching improves performance by loading multiple resources simultaneously. This is especially useful in **Next.js App Router ** where both server and client strategies can be combined.

---

## 🚀 Why Parallel Data Fetching?

- ✅ Faster page loads  
- ✅ Efficient resource usage  
- ✅ Better user experience

---

## ✅ Example 1: Using `Promise.all()` in Server Component

```js
// app/posts/page.js

const Page = async () => {
  const todosPromise = fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
  const usersPromise = fetch("https://jsonplaceholder.typicode.com/users");

  const [todosRes, usersRes] = await Promise.all([todosPromise, usersPromise]);
  const [todos, users] = await Promise.all([todosRes.json(), usersRes.json()]);

  return (
    <div>
      <h1>Todos</h1>
      {todos.map(todo => <p key={todo.id}>{todo.title}</p>)}

      <h2>Users</h2>
      {users.map(user => <p key={user.id}>{user.name}</p>)}
    </div>
  );
};

export default Page;
```

> ⚠️ This approach is best when you fetch all data in the same component.

---

## ✅ Example 2: Parallel Fetch with `<Suspense>`

```js
// app/page.js

import { Suspense } from 'react';
import Todos from './Todos';
import Users from './Users';

export default function Page() {
  return (
    <>
      <Suspense fallback={<p>Loading Todos...</p>}>
        <Todos />
      </Suspense>
      <Suspense fallback={<p>Loading Users...</p>}>
        <Users />
      </Suspense>
    </>
  );
}
```

**Each component:**

```js
// app/Todos.js
const Todos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
  const todos = await res.json();
  return <>{todos.map(todo => <p key={todo.id}>{todo.title}</p>)}</>;
};

export default Todos;
```

> ✅ `Suspense` loads both components in **parallel**, showing fallbacks independently.

---

## 🔄 Force Fresh Fetching (No Cache)

```js
fetch(url, { cache: 'no-store' });
```

> Use when you need real-time or uncached data.

---

## 📌 Summary Table

| 🔍 **Use Case**                         | ⚙️ **Strategy**                    |
|-----------------------------------------|-----------------------------------|
| Multiple fetches in one component       | `Promise.all()`                   |
| Fetching in independent components      | `<Suspense>`                      |
| Disable caching for fresh fetch         | `{ cache: 'no-store' }` in fetch  |
