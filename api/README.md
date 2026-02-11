# Blog API Integration

This document explains the blog API integration with fallback mechanism.

## Overview

The blog system fetches data from the backend API and automatically falls back to local data if the API fails or is unavailable.

## Backend API Endpoints

- **Base URL**: `http://localhost:8080/api/v1/public`
- **Get All Blogs**: `GET /blogs/get-blogs`
- **Get Blog by Slug**: `GET /blogs/get-blog/:slug`

## Configuration

The backend base URL is configured in the `.env` file:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api/v1/public
```

## Files Structure

```
api/
├── api.js              # Axios instance with interceptors
└── blogService.js      # Blog API service with fallback logic

src/
├── components/
│   └── blog/
│       └── Blog.jsx    # Blog listing component
├── app/
│   └── blogs/
│       ├── page.js     # Blog listing page
│       └── [slug]/
│           └── page.js # Blog detail page
└── data/
    └── BlogData.js     # Fallback data
```

## How It Works

### 1. API Instance (`api/api.js`)

- Creates an axios instance with base URL from environment variables
- Sets timeout to 10 seconds
- Includes request/response interceptors for error handling

### 2. Blog Service (`api/blogService.js`)

- **getAllBlogs()**: Fetches all blogs from backend
  - On success: Returns backend data
  - On failure: Returns local fallback data from `BlogData.js`
- **getBlogBySlug(slug)**: Fetches a single blog by slug
  - On success: Returns backend data
  - On failure: Searches local fallback data for matching slug
- **getRelatedBlogs(category, currentSlug, limit)**: Gets related blogs by category
  - Filters blogs by category and excludes current blog
- **createSlug(title)**: Converts blog title to URL-friendly slug

### 3. Fallback Mechanism

The service always returns a response object with:

```javascript
{
  success: boolean,    // Whether the operation was successful
  data: Array|Object,  // The blog data
  source: string,      // 'backend' or 'fallback'
  error: string        // Error message if any
}
```

**Example Response:**

```javascript
// Backend success
{
  success: true,
  data: [...blogs],
  source: 'backend'
}

// Fallback on error
{
  success: true,
  data: [...blogs],
  source: 'fallback',
  error: 'Network Error: timeout of 10000ms exceeded'
}
```

## Usage

### Blog Listing Component

```javascript
import { getAllBlogs, createSlug } from "@/../../api/blogService";

const Blog = () => {
  const [blogs, setBlogs] = useState(fallbackBlogs);
  const [dataSource, setDataSource] = useState("fallback");

  useEffect(() => {
    const fetchBlogs = async () => {
      const result = await getAllBlogs();
      if (result.success && result.data) {
        setBlogs(result.data);
        setDataSource(result.source);
        console.log(`Blogs loaded from: ${result.source}`);
      }
    };
    fetchBlogs();
  }, []);

  // ... rest of component
};
```

### Blog Detail Page

```javascript
import { getBlogBySlug, getRelatedBlogs } from "@/../../api/blogService";

const BlogDetailPage = () => {
  const params = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      const result = await getBlogBySlug(params.slug);

      if (result.success && result.data) {
        setBlog(result.data);
        console.log(`Blog loaded from: ${result.source}`);
      }
    };
    fetchBlogData();
  }, [params.slug]);

  // ... rest of component
};
```

## Slug Generation

Blog URLs are generated from titles using the `createSlug()` function:

**Example:**

- Title: "How to Set Up a Business in Dubai Freezone"
- Slug: "how-to-set-up-a-business-in-dubai-freezone"
- URL: `/blogs/how-to-set-up-a-business-in-dubai-freezone`

## Error Handling

The system handles errors gracefully:

1. **Network Errors**: Falls back to local data
2. **Timeout**: Falls back to local data (10s timeout)
3. **Invalid Response**: Falls back to local data
4. **Blog Not Found**: Shows "Blog Not Found" page with link back to listing

## Testing

### Test with Backend Running

1. Start your backend server on `http://localhost:8080`
2. Run the frontend: `npm run dev`
3. Navigate to `/blogs`
4. Check console: Should see "Blogs loaded from: backend"

### Test with Backend Down

1. Stop your backend server
2. Run the frontend: `npm run dev`
3. Navigate to `/blogs`
4. Check console: Should see "Blogs loaded from: fallback"
5. Blogs should still display using local data

## Data Source Indicator

You can check which data source is being used by looking at the console logs:

- `Blogs loaded from: backend` - Data from API
- `Blogs loaded from: fallback` - Data from local file

## Future Enhancements

- Add loading states with skeleton screens
- Implement caching with React Query or SWR
- Add pagination support for large datasets
- Implement search and filtering
- Add blog content editor integration
- Support for featured images and galleries
