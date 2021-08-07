
# newsletter-REST-API

newsletter-REST-API for [newsletter-webpage](https://github.com/avi465/newsletter-webpage) repository



## Tech Stack

**Client:** Html, Css, Javascript

**Server:** Node, Express, Mongodb, Ejs



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

