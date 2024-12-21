
# **Task Management API**

🚀 A NestJS-based API developed for my portfolio, showcasing a task management system with essential features and modern practices.

---

## **Overview**


This project demonstrates the following functionalities:
- 📝 CRUD for tasks (Controllers, Decorators, Services, Modules)
- ✅ DTO Validation with `class-validator`
- 🔧 Environment Variables with `ConfigService`
- 🔒 Authentication (JWT Service, App Guard)
- 🔑 Password Hashing
- 📦 Database Integration
- ⚙️ TypeORM Integration
- 🛡️ Global Guards (App Guard)

---

## **Technologies Used**

| Technology         | Description                                          | Icon |
|--------------------|------------------------------------------------------|------|
| **NestJS**         | Framework for building efficient, reliable, and scalable server-side applications. | ![NestJS](https://img.shields.io/badge/-Nest.Js-05122A?style=flat&logo=nestjs)
 |
| **TypeScript**     | Typed superset of JavaScript that compiles to plain JavaScript. | ![TypeScript](https://img.shields.io/badge/-Typescript-05122A?style=flat&logo=typescript)
 |
| **TypeORM**        | ORM for TypeScript and JavaScript (ES7, ES6, ES5).  | ![TypeORM](https://img.shields.io/badge/-TypeORM-05122A?style=flat&logo=typeorm)
 |
| **Docker**         | Containerization platform for seamless deployment.   | ![Docker](https://img.shields.io/badge/-Docker-05122A?style=flat&logo=docker)
 |
| **JWT**            | Standard for creating access tokens.                 | ![JWT](https://img.shields.io/badge/-JWT-05122A?style=flat&logo=jsonwebtokens)
 |
| **PostgreSQL**     | Robust and scalable relational database.             | ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-05122A?style=flat&logo=postgresql)
 |

---

## **Installation**

### **Pre-requisites**
Ensure you have the following installed on your system:
- [Node.js v18.12.0 LTS](https://nodejs.org/en/blog/release/v18.12.0)
- [Docker](https://www.docker.com/)

### **Steps to Install**

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

---

## **Configuration**

1. Copy the `.env.example` file and rename it to `.env`. Populate all required variables.
2. Start the database container using Docker:
   ```bash
   docker-compose up -d
   ```
3. Run migrations to set up the database schema:
   ```bash
   npm run migration:run
   ```

---

## **Database Migrations**

- **Create a migration:**
   ```bash
   npm run migration:create -name=your-migration-name
   ```

- **Run migrations:**
   ```bash
   npm run migration:run
   ```

- **Revert migrations:**
   ```bash
   npm run migration:revert
   ```

---

## **Usage**

The API provides endpoints for managing tasks and users, including authentication and task CRUD operations.

### **Sample CURL Commands**

#### **Users**
Create a user:
```bash
curl --request POST   --url http://localhost:3000/users   --header 'Content-Type: application/json'   --data '{
    "username": "username",
    "password": "password"
  }'
```

#### **Authentication**
Authenticate a user:
```bash
curl --request POST   --url http://localhost:3000/auth/login   --header 'Content-Type: application/json'   --data '{
    "username": "username",
    "password": "password"
  }'
```

#### **Tasks**

- **Create a Task:**
   ```bash
   curl --request POST      --url http://localhost:3000/task      --header 'Authorization: Bearer token'      --header 'Content-Type: application/json'      --data '{
       "title": "title",
       "description": "description",
       "expirationDate": "2024-01-01"
     }'
   ```

- **Update a Task:**
   ```bash
   curl --request PUT      --url http://localhost:3000/task      --header 'Authorization: Bearer token'      --header 'Content-Type: application/json'      --data '{
       "id": "uuid here",
       "title": "updated title",
       "description": "updated description",
       "status": "IN_PROGRESS",
       "expirationDate": "2024-01-04"
     }'
   ```

- **Find Task by ID:**
   ```bash
   curl --request GET      --url http://localhost:3000/task/1      --header 'Authorization: Bearer token'
   ```

- **Search Tasks with Filters:**
   ```bash
   curl --request GET      --url 'http://localhost:3000/task?title=task%203&status=IN_PROGRESS'      --header 'Authorization: Bearer token'
   ```

- **Delete a Task:**
   ```bash
   curl --request DELETE      --url http://localhost:3000/task/uuid-here      --header 'Authorization: Bearer token'
   ```

---

## **License**
This project is licensed under the MIT License. Feel free to use and modify it for your purposes!

---

## **Screenshots**
(Add relevant screenshots here if available to showcase API functionality or example results.)

---

Happy coding! 💻✨
