# Server Component + Client Component Pattern

## Problem Solved

Next.js does not allow `"use client"` directive and `generateStaticParams()` in the same file because:

- `generateStaticParams()` must run on the **server** at build time
- `"use client"` marks a component to run on the **client** (browser)

### Error Message

```
Page "/blogs/[slug]/page" cannot use both "use client" and export function "generateStaticParams()".
```

## Solution: Split into Two Components

### 1. Server Component (page.js)

**Purpose**: Handles static generation and server-side logic

- ✅ Exports `generateStaticParams()` for static site generation
- ✅ No `"use client"` directive
- ✅ Receives params from Next.js routing
- ✅ Passes slug to Client Component

```javascript
// src/app/blogs/[slug]/page.js
import { blogs as fallbackBlogs } from "@/data/BlogData";
import { createSlug } from "@/../../api/blogService";
import BlogDetailClient from "./BlogDetailClient";

export async function generateStaticParams() {
  return fallbackBlogs.map((blog) => ({
    slug: createSlug(blog.title),
  }));
}

export default function BlogDetailPage({ params }) {
  return <BlogDetailClient slug={params.slug} />;
}
```

### 2. Client Component (BlogDetailClient.jsx)

**Purpose**: Handles interactive UI and client-side data fetching

- ✅ Has `"use client"` directive
- ✅ Uses React hooks (useState, useEffect)
- ✅ Fetches data from API with fallback
- ✅ Handles user interactions (modals, buttons, etc.)

```javascript
// src/app/blogs/[slug]/BlogDetailClient.jsx
"use client";
import React, { useState, useEffect } from "react";
// ... other imports

const BlogDetailClient = ({ slug }) => {
  const [blog, setBlog] = useState(null);
  // ... component logic

  useEffect(() => {
    // Fetch blog data
  }, [slug]);

  return (
    // ... UI
  );
};

export default BlogDetailClient;
```

## How It Works

### Build Time (Static Generation)

1. Next.js calls `generateStaticParams()` in **page.js** (Server Component)
2. Gets list of all blog slugs
3. Pre-renders a static HTML page for each slug
4. Each page includes the Client Component code

### Runtime (Browser)

1. User navigates to `/blogs/some-slug`
2. Server Component (page.js) receives `params.slug`
3. Passes slug to Client Component
4. Client Component hydrates in browser
5. useEffect runs, fetches blog data from API
6. Falls back to local data if API fails

## File Structure

```
src/app/blogs/[slug]/
├── page.js              # Server Component (generateStaticParams)
└── BlogDetailClient.jsx # Client Component (interactive UI)
```

## Benefits of This Pattern

### ✅ Best of Both Worlds

- **Server Component**: Static generation, SEO, fast initial load
- **Client Component**: Interactivity, dynamic data, user interactions

### ✅ Static Export Compatible

- Works with `output: "export"` in next.config.mjs
- All pages pre-generated at build time
- Can deploy to static hosting (Hostinger, Netlify, etc.)

### ✅ Dynamic Data with Static Pages

- Pages are pre-rendered (fast, SEO-friendly)
- Client-side fetching updates content (fresh data)
- Fallback mechanism ensures reliability

### ✅ Clean Separation of Concerns

- Server logic in page.js
- Client logic in BlogDetailClient.jsx
- Easy to maintain and understand

## When to Use This Pattern

Use this pattern when you need:

1. **Static site generation** (`output: "export"`)
2. **Dynamic routes** (like `/blogs/[slug]`)
3. **Client-side interactivity** (hooks, state, events)
4. **API data fetching** on the client

## Alternative Patterns

### If You Don't Need Static Export

If you're not using `output: "export"`, you can use Server Components with dynamic rendering:

```javascript
// page.js - Server Component with dynamic rendering
export default async function BlogDetailPage({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return <BlogDetailClient blog={blog} />;
}
```

### If You Don't Need Client Interactivity

If your page is purely static (no hooks, no events):

```javascript
// page.js - Pure Server Component
export async function generateStaticParams() { ... }

export default function BlogDetailPage({ params }) {
  // Fetch data at build time
  const blog = fallbackBlogs.find(b => createSlug(b.title) === params.slug);

  return (
    <div>
      <h1>{blog.title}</h1>
      {/* Static content only */}
    </div>
  );
}
```

## Common Pitfalls

### ❌ Don't Do This

```javascript
// page.js - WRONG!
"use client";  // ❌ Can't use with generateStaticParams

export async function generateStaticParams() { ... }

export default function Page() { ... }
```

### ✅ Do This Instead

```javascript
// page.js - Server Component
export async function generateStaticParams() { ... }

export default function Page({ params }) {
  return <ClientComponent slug={params.slug} />;
}

// ClientComponent.jsx - Client Component
"use client";
export default function ClientComponent({ slug }) { ... }
```

## Summary

This pattern allows you to:

- ✅ Use static site generation with dynamic routes
- ✅ Have interactive client-side features
- ✅ Fetch data from APIs with fallback
- ✅ Deploy to static hosting platforms
- ✅ Maintain clean, organized code

The key is **separation**: Server Component handles build-time logic, Client Component handles runtime interactivity.
