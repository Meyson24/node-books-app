## How to use this code?

Make sure you have the latest stable version of Node.js installed

  ```
  $ sudo npm cache clean -f
  $ sudo npm install -g n
  $ sudo n stable
  ```
  
Configure your database and jsonwebtoken in `config/env`. E.g.:

  ```javascript
  module.exports = {
    mysql: {
      host: 'localhost',
      port: 3306,
      database: 'jwt_dev',
      username: 'root',
      password: 'root',
    },
    jwt: {
      jwtSecret: '$eCrEt',
      jwtDuration: '2 hours',
    }
  };
  ```
Install dependencies:

  ```
  $ npm install
  ```
Start server:
  
  ```
  $ npm start
  ```
  