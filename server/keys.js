module.exports = {
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
  pgUser: process.env.PGUSER,
  pgHost: process.env.PGHOST,
  pgDatabase: process.env.PGDATABASE,
  pgPassword: process.env.PGPASSWORD,
  pgPort: process.env.PGPORT
};

// module.exports = {
//   redisHost: process.env.REDIS_HOST,
//   redisPort: process.env.REDIS_PORT,
//   POSTGRES_USER: process.env.POSTGRES_USER,
//   pgHost: process.env.PGHOST,
//   POSTGRES_DB: process.env.POSTGRES_DB,
//   POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
//   POSTGRES_HOST_AUTH_METHOD: process.env.POSTGRES_HOST_AUTH_METHOD,
//   pgPort: process.env.PGPORT
// };
