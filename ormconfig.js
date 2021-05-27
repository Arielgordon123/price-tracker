const join = require('path').join;

module.exports = {
  type: 'mongodb',
  url: process.env.DATABASE_URL,
  autoLoadEntities: true,
  useUnifiedTopology: true,
  synchronize: true,
  logging: true,
  ssl: true,
  entities: ['dist/**/*.entity.js'],
  subscribers: ['src/subscriber/*.js'],
  migrations: ['src/migration/*.js'],
};
