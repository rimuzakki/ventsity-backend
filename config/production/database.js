module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'remotemysql.com'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'lxh3DfyaAS'),
        username: env('DATABASE_USERNAME', 'lxh3DfyaAS'),
        password: env('DATABASE_PASSWORD', 'ipB1dDiKxf'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
