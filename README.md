# 🛒 E-commerce Backend

## Overview
This is the **backend server** for the E-commerce web application built with **Node.js**, **Express.js**, and **MongoDB**.  
It provides secure API endpoints for user authentication, product management, cart operations, and order processing.

---

## Features
- **User Authentication** (Signup/Login) using JWT  
- **Product CRUD** (Create, Read, Update, Delete)  
- **Cart Management** (Add/Remove products)  
- **Order Processing**  
- **MongoDB** database to store users, products, and orders  
- **Secure API endpoints** with proper validation  

---

## Tech Stack
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **Authentication:** JWT (JSON Web Tokens)  
- **Other Tools:** dotenv (environment variables), bcrypt (password hashing), nodemon (development)  

---

## Project Structure
/server
├── controllers # Business logic for routes
├── models # MongoDB schemas
├── routes # API routes
├── middleware # Authentication & validation
├── config # DB connection & environment config
└── server.js # Entry point


---

## Installation
1. Clone the repository:
```bash
git clone https://github.com/mahedihsharif/ekhonie_server

cd server
npm install
