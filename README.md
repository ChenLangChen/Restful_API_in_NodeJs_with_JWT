How to create a restful API in Node Js with JWT

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









