# uTube Server (Express + Mongo + JWT)

## Quick Start
1. `cp .env.sample .env` and set values.
2. `npm install`
3. (optional) `npm run seed` to load sample data.
4. `npm run dev`

## API Overview
- `POST /api/auth/register { username, email, password }`
- `POST /api/auth/login { email, password }` -> `{ token, user }`
- `GET /api/auth/me` (Bearer token)

- `POST /api/channels` (auth) create
- `GET /api/channels/:id`
- `GET /api/channels/:id/videos`

- `GET /api/videos?search=&category=`
- `GET /api/videos/:id`
- `POST /api/videos` (auth) create
- `PUT /api/videos/:id` (auth owner)
- `DELETE /api/videos/:id` (auth owner)
- `POST /api/videos/:id/like` (auth)
- `POST /api/videos/:id/dislike` (auth)

- `GET /api/comments/video/:videoId`
- `POST /api/comments/video/:videoId` (auth)
- `PUT /api/comments/:id` (auth owner)
- `DELETE /api/comments/:id` (auth owner)
