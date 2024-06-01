# API Documentation

## Profiles

### Create Profile

- **URL:** `/api/profile/sign/`
- **Method:** `POST`
- **Description:** Create a new profile.
- **Request Body:**
  ```json
  {
    "user_address": "string",
    "name": "string",
    "bio": "string"
  }
  ```

### Update Profile

- **URL:** `/api/profile/<user_address>/update/`
- **Method:** `PUT`
- **Description:** Update an existing profile.
- **Request Body:**
  ```json
  {
    "name": "string",
    "bio": "string"
  }
  ```

## Blogs

### Create Blog

- **URL:** `/api/blogs/create/`
- **Method:** `POST`
- **Description:** Create a new blog post.
- **Request Body:**
  ```json
  {
    "title": "string",
    "content": "string",
    "author_address": "string"
  }
  ```

### Update Blog

- **URL:** `/api/blogs/<pk>/update/`
- **Method:** `PUT`
- **Description:** Update an existing blog post.
- **Request Body:**
  ```json
  {
    "title": "string",
    "content": "string",
    "author_address": "string"
  }
  ```

### Delete Blog

- **URL:** `/api/blogs/<pk>/delete/`
- **Method:** `DELETE`
- **Description:** Delete an existing blog post.

### List Blogs

- **URL:** `/api/blogs/`
- **Method:** `GET`
- **Description:** Get a list of all blog posts.

### Get Blog Details

- **URL:** `/api/blogs/<pk>/`
- **Method:** `GET`
- **Description:** Get details of a specific blog post.

### Like/Unlike Blog

- **URL:** `/api/blogs/<pk>/like/`
- **Method:** `POST`
- **Description:** Like or Unlike a specific blog post.

## Comments

### Create Comment

- **URL:** `/api/blogs/<pk>/comment/add/`
- **Method:** `POST`
- **Description:** Add a comment to a blog post.
- **Request Body:**
  ```json
  {
    "author_address": "string",
    "content": "string"
  }
  ```

### Update Comment

- **URL:** `/api/blogs/comments/<comment_id>/update/`
- **Method:** `PUT`
- **Description:** Update an existing comment.
- **Request Body:**
  ```json
  {
    "author_address": "string",
    "content": "string"
  }
  ```

### Delete Comment

- **URL:** `/api/blogs/comments/<comment_id>/delete/`
- **Method:** `DELETE`
- **Description:** Delete an existing comment.

### List Comments for a Blog

- **URL:** `/api/blogs/<pk>/comments/`
- **Method:** `GET`
- **Description:** Get a list of all comments for a specific blog post.


