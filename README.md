## Introduction
In this tutorial, we're gonna create a restful API in Node.js with JWT. 
![alt](/screenshots/api-restaurant.jpeg)

**API** stands for application programming interface. It allows the programs to communicate with each other under the specified rules. We create API on the server so that the clients can talk to the server, such as asking for data. 
Take dining in a restaurant as an example, you are the client of an application, the backend is the kitchen, and the API is the waiter or waitress.

**REST** stands for 'Representational State Transfer'. It is a set of rules that allow you to retrieve data (response) with the specified URL.[1]

**JWT** stands for JSON Web Token. The server generates a token that certifies the user identity, and sends it to the client. The client can stay logged in inside the application for the specified amount of time without being asked to verify the identity again and again, which is especially convenient when you're hopping between different pages within the app. 
Let's take going to a club for example. At the door, the bouncer asks for your ID , then he stamps on your wrist. This stamp is like JWT, you can go in and out of the club with the stamp, without checking ID.

## Directory tree
```script
├── app.js
├── models
│   └── user.js
├── package-lock.json
├── package.json
├── routes
│   ├── auth.js
│   ├── posts.js
│   └── verifyToken.js
└── validation.js
```

### Initiate a package
```shell
npm init 
```
### Install packages 
```shell
npm install 
```
- @hapi/joi
- bcryptjs
- dotenv
- jsonwebtoken
- mongoose 
- express 

### MongoDB 
- Create a project 
- Build a new cluster 
- Security setup (Network Access)
1. Adding IP address 
You can specify it to be accessed anywhere or from a specific IP address. 
2. Add an user 
- Connect to the cluster
    * Connect your application 

```script
mongodb+srv://chenlang:<password>@cluster0.z5p1a.mongodb.net/<dbname>?retryWrites=true&w=majority
```
- Create database 
COLLECTIONS -- Add My Own Data -- Create Database 


### Create app.js 

### Create .env 
```bash
DB_CONNECTION=mongodb+srv://chenlang:<password>@cluster0.z5p1a.mongodb.net/<dbname>?retryWrites=true&w=majority
TOKEN_SECRET=itcanbeanythingyouwant
```

### Create models folder
- user.js 

### Create routes folder 
- auth.js 

- * A. User registration 
1. Data validation (userName, email, password)
2. Checking if the user has already existed by checking the email.
3. Hashing the password
4. Create a new user 

- * B. User login 
1. Data validation (email, password)
2. Checking if the user has already existed by checking the email.
3. Checking password 
4. Create and assign a token 
5. Add the token to the header 

### validation.js 
There're 2 types of validations, registration & login validation. 

### verifyToken.js 
Code path: '/routes/verifyToken.js'

After a user is logged in, we need to verity the token presented.

### posts.js
Code path: '/routes/posts.js'
- This is for dealing with user requests to other pages using the presented token.
- The token is already included in the request header 
```script
{'auth-token': token}
```

## References
[1]Smashing Magazine. 2021. Understanding And Using REST APIs — Smashing Magazine. [online] Available at: <https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/> [Accessed 18 March 2021].

### Image References
[Cover image] https://retirementincomejournal.com/wp-content/uploads/2019/07/api-restaurant-analogy-example1.jpg











