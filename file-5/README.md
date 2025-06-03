### 🚀 Rendering Methods in Web Development (Next.js Focus)

| **Method** | **Render Time**           | **SEO Friendly** | **Speed**     | **Best Use Case**                    |
|------------|---------------------------|------------------|---------------|--------------------------------------|
| **CSR**    | Client-side (runtime)     | ❌ No             | 🟡 Medium      | SPAs, dashboards, highly interactive |
| **SSR**    | Server-side (per request) | ✅ Yes            | 🔴 Slower      | Dynamic content, auth pages          |
| **SSG**    | At build time (static)    | ✅ Yes            | 🟢 Fast        | Blogs, marketing, landing pages      |
| **ISR**    | Build + revalidate later  | ✅ Yes            | 🟢 Fast        | News sites, product listings, hybrid |

> ✅ **Tip**: Use **ISR** when you want the speed of static pages **plus** some freshness without full rebuilds.

----
# 🧭 Client Components vs Server Components in Next.js

| Feature                    | **Client Components**                            | **Server Components**                            |
| -------------------------- | ------------------------------------------------ | ------------------------------------------------ |
| **Rendered**               | In the browser (client-side)                     | On the server (before sending to browser)        |
| **Use Case**               | Interactive UI: modals, dropdowns, forms         | Data fetching, heavy logic, non-interactive UI   |
| **File Marker**            | `"use client"` at top of file                    | No need to specify — default is server component |
| **Bundle Size**            | Increases bundle size (code shipped to browser)  | Reduces bundle size (runs only on server)        |
| **Access to Browser APIs** | ✅ Yes (e.g. `localStorage`, event listeners)     | ❌ No (can’t use DOM or browser APIs)             |
| **Data Fetching**          | Fetch data with `useEffect()`                    | Can use `async/await` and direct DB/API access   |
| **Performance**            | Slightly slower due to hydration                 | Faster load, less JS needed on the client        |
| **State Management**       | Uses React state/hooks (`useState`, `useEffect`) | Cannot use client-side state or effects          |
| **Interactivity**          | ✅ Yes                                            | ❌ No                                             |
| **Security**               | Less secure (code is exposed in browser)         | More secure (code stays on server)               |

