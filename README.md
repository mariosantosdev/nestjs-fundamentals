# NestJS Fundamentals Project

Welcome to the NestJS Fundamentals project! This project is built based on the principles of clean architecture and is divided into modules to provide a structured and maintainable codebase. Below, you'll find information about the project's architecture, modules, and instructions for getting started.

## Modules

The project is divided into several modules to ensure modularity and encapsulation. Each module serves a specific purpose and contains related controllers, services, and data models. The following modules are included:

- **Accounts Module:**
  - **Routes:**
    - `POST /accounts`: Create a new account.

- **Auth Module:**
  - **Routes:**
    - `POST /sessions`: Log in and authenticate users.

- **Questions Module:**
  - **Routes:**
    - `POST /questions`: Create a new question.
    - `GET /questions`: Retrieve questions for the authenticated user.

## Getting Started

To run the NestJS Fundamentals project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/nestjs-fundamentals.git`
2. Navigate to the project directory: `cd nestjs-fundamentals`
3. Install dependencies: `npm install`
4. Configure your database connection and other environment variables.

### Generating JWT Keys

To enable JWT-based authentication, you need to generate private and public keys.
This instruction is to MacOS users, if you use another OS search how to generate RSA keys.

1. Generate a private key using the following command: `genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048`
2. Convert the private key to base64: `base64 -i private_key.pem -o private_key_base64.txt`
3. Generate a public key using the following command: `openssl rsa -pubout -in private_key.pem -out public_key.pem`
4. Convert the public key to base64: `base64 -i public_key.pem -o public_key_base64.txt`
5. Set the following environment variables in your project:
   1. JWT_PRIVATE_KEY= # Base64 private key
   2. JWT_PUBLIC_KEY= # Base64 public key
6. Run the project: `npm run start`

Feel free to explore the different modules, routes, and their respective implementations to understand how the project is structured and how the Clean Architecture principles are applied.

For more details on NestJS, refer to the official documentation: [NestJS Documentation](https://docs.nestjs.com/)

