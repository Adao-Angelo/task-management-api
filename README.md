
# Task Management API

NestJS-based API developed for portfolio, featuring a complete task management system.

## Overview

This project demonstrates the implementation of:

- CRUD operations for tasks
- DTO validation with class-validator
- Environment variables management with ConfigService
- JWT Authentication
- Password hashing
- TypeORM with PostgreSQL
- Docker support

## Technologies Used

| Technology   | Description                                      |
|--------------|--------------------------------------------------|
| NestJS       | Framework for scalable server-side applications  |
| TypeScript   | Typed superset of JavaScript                     |
| TypeORM      | ORM for TypeScript and JavaScript                |
| Docker       | Containerization platform                        |
| JWT          | JSON Web Tokens for authentication               |
| PostgreSQL   | Relational database                              |

## Installation

### Prerequisites

- Node.js v18.12.0 or higher
- Docker

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Adao-Angelo/task-management-api.git
   ```

2. Navigate to the project directory:
   ```bash
   cd task-management-api
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

## Configuration

1. Copy the `.env.example` file to `.env` and fill in the required variables.

2. Start the database:
   ```bash
   docker-compose up -d
   ```

3. Run the database migrations:
   ```bash
   npm run migration:run
   ```

## Database Migrations

- Create a new migration:
  ```bash
  npm run migration:create -name=your-migration-name
  ```

- Run migrations:
  ```bash
  npm run migration:run
  ```

- Revert last migration:
  ```bash
  npm run migration:revert
  ```

## Usage

### Users

Create user:
```bash
curl --request POST --url http://localhost:3000/users --header 'Content-Type: application/json' --data '{
    "username": "username",
    "password": "password"
  }'
```

### Authentication

Login:
```bash
curl --request POST --url http://localhost:3000/auth/login --header 'Content-Type: application/json' --data '{
    "username": "username",
    "password": "password"
  }'
```

### Tasks

- **Create Task:**
```bash
curl --request POST --url http://localhost:3000/task --header 'Authorization: Bearer token' --header 'Content-Type: application/json' --data '{
    "title": "title",
    "description": "description",
    "expirationDate": "2024-01-01"
  }'
```

- **Update Task:**
```bash
curl --request PUT --url http://localhost:3000/task --header 'Authorization: Bearer token' --header 'Content-Type: application/json' --data '{
    "id": "uuid-here",
    "title": "updated title",
    "description": "updated description",
    "status": "IN_PROGRESS",
    "expirationDate": "2024-01-04"
  }'
```

- **Get Task by ID:**
```bash
curl --request GET --url http://localhost:3000/task/1 --header 'Authorization: Bearer token'
```

- **Search Tasks:**
```bash
curl --request GET --url 'http://localhost:3000/task?title=task%203&status=IN_PROGRESS' --header 'Authorization: Bearer token'
```

- **Delete Task:**
```bash
curl --request DELETE --url http://localhost:3000/task/uuid-here --header 'Authorization: Bearer token'
```
