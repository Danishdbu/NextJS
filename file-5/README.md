### 🚀 Rendering Methods in Web Development (Next.js Focus)

| **Method** | **Render Time**           | **SEO Friendly** | **Speed**     | **Best Use Case**                    |
|------------|---------------------------|------------------|---------------|--------------------------------------|
| **CSR**    | Client-side (runtime)     | ❌ No             | 🟡 Medium      | SPAs, dashboards, highly interactive |
| **SSR**    | Server-side (per request) | ✅ Yes            | 🔴 Slower      | Dynamic content, auth pages          |
| **SSG**    | At build time (static)    | ✅ Yes            | 🟢 Fast        | Blogs, marketing, landing pages      |
| **ISR**    | Build + revalidate later  | ✅ Yes            | 🟢 Fast        | News sites, product listings, hybrid |

> ✅ **Tip**: Use **ISR** when you want the speed of static pages **plus** some freshness without full rebuilds.

----
dsfffff
