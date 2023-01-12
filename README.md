
# Newsletter Api

newsletter api for [newsletter-webpage](https://github.com/avi465/newsletter-webpage) repository



## Tech Stack

**Client:** Html, Css, Javascript

**Server:** Node, Express, Mongodb



## Features

GET, POST, PUT, PATCH, DELETE



## Run Locally

Clone the project

```bash
  git clone https://github.com/avi465/newsletter-REST-API
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Add .env

```bash
  touch .env
```

Add environment variables

```bash
  open .env
```

Start the server

```bash
  node app.js
```



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URL`

ex:
    
    MONGODB_URL=mongodb://localhost:27017/database_name
or

    MONGODB_URL=mongodb+srv://{user}:{password}@{project_name}.mongodb.net/{dataase_name}

Note: 

- If using localhost url then make sure to spin mogod local mongo server
- You can get mongodb url from from mongoDB atlas if want to use cloud mongodb database



## API Reference

API Endpoint: https://ruby-adder-coat.cyclic.app/

#### Get all user data

```http
  GET /users
```

#### Get specific user data

```http
  GET /users/{email}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. fetch user data  with specified email  |


#### Delete all user data

```http
  DELETE /users
```

#### Delete specific user data

```http
  DELETE /users/{email}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Delete user data  with specified email  |


#### Post user data

```http
  POST /users
```

| Content-type | Type     | 
| :-------- | :------- |
| `application/x-www-form-urlencoded`      | `string` | 

**Body:**
| Name | Value     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `firstName`      | `EX: {Avinash}` | **Required**. First Name Here  |
| `lastName`      | `EX: {Karmjit}` | **Required**. Last Name Here  |
| `email`      | `EX: {avi@gmail.com}` | **Required**. Email Here  |



#### Update specific user data

```http
  PUT /users/{email}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. update user data  with specified email  |

```http
  PATCH /users/{email}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. update user data  with specified email  |
  
