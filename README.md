# Castify - Backend App
This is the backend API for Castify, a podcast listening platform. Built with **Node.js** and **Express**, it handles user authentication, podcast retrieval, board management, and user profiles. Media is retrieved from **Cloudinary**, and data is stored in **MongoDB**.

[Frontend Repository](https://github.com/zahralmosawi/castify-front-end-app)

## Features
- JWT Authentication (Signup, Login, Change Password)
- User Profile (Read, Update, Delete)
- Boards CRUD (Create, Read, Update, Delete)
- Podcasts (Read-only: List & Show)
- Media retrieval via Multer + Cloudinary

## Tech Stack
| Tech | Description |
|------|-------------|
| ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white) | Server runtime |
| ![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white) | Web framework |
| ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white) | Database |
| ![Mongoose](https://img.shields.io/badge/-Mongoose-880000?logo=mongoose&logoColor=white) | ODM for MongoDB |
| ![Multer](https://img.shields.io/badge/-Multer-563D7C?logo=multer&logoColor=white) | File uploads |
| ![Cloudinary](https://img.shields.io/badge/-Cloudinary-3448C5?logo=cloudinary&logoColor=white) | Media hosting |
| ![JWT](https://img.shields.io/badge/-JWT-000000?logo=jsonwebtokens&logoColor=white) | Auth token |
| ![CORS](https://img.shields.io/badge/-CORS-0069D9?logo=cors&logoColor=white) | Cross-origin resource sharing |

## Setup
### 1. Install dependencies
npm install

### 2. Create .env file
touch .env

#### Sample .env
PORT=3000
MONGO_URI=mongodb://localhost:27017/castify
JWT_SECRET=change_me_to_a_long_random_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

### 3. Run the Server
npm run dev

## API Routes
### Auth Routes
| Method | Endpoint              | Description                |
|--------|-----------------------|----------------------------|
| POST   | `/auth/signup`        | Register                   |
| POST   | `/auth/login`         | Login → JWT                |
| POST   | `/auth/changePassword`| Change password            |

### Board Routes
| Method | Endpoint              | Description         |
|--------|-----------------------|---------------------|
| POST   | `/boards/new`         | Create board        |
| GET    | `/boards/`            | List all boards     |
| GET    | `/boards/:id`         | Get board by ID     |
| PUT    | `/boards/:boardId`    | Update board        |
| DELETE | `/boards/:boardId`    | Delete board        |

### Podcast Routes
| Method | Endpoint                  | Description          |
|--------|---------------------------|----------------------|
| GET    | `/podcasts`               | List all podcasts    |
| GET    | `/podcasts/:podcastId`    | Show single podcast  |

### User Routes
| Method | Endpoint                | Description               |
|--------|-------------------------|---------------------------|
| GET    | `/users/profile`        | Get current user profile  |
| PUT    | `/users/profile`        | Update profile            |
| DELETE | `/users/profile/:id`    | Delete account by ID      |