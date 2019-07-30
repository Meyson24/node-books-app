module.exports = {
    postgres: {
    host: 'localhost',
    port: 5432,
    database: 'books_db_test_task',
    username: 'fusion',
    password: 'fusion',
  },
  jwt: {
    jwtSecret: '$eCrEt',
    jwtDuration: '24 hours',
  }
};
