#💡 Loading Strategy Overview
---
| 🔍 **Use Case**                          | ⚙️ **Loading Technique**        |
| ---------------------------------------- | ------------------------------- |
| **Server Component (App Router)**        | `<Suspense fallback={...}>`     |
| **Whole Route Loading**                  | `loading.js` in the same folder |
| **Client-Side Fetching (`useEffect`)**   | `useState` + `useEffect`        |
| **Static Generation (`getStaticProps`)** | No loading needed at runtime    |
