let env = process.env.NODE_ENV || 'production';

let config = {
  development: {
    db: 'mongodb://localhost/node-seed-development'
  },
  test: {
    db: 'mongodb://localhost/node-seed-test'
  },
  production: {
    db: 'mongodb://localhost/node-seed-production'
  }
};

module.exports = config[env];
