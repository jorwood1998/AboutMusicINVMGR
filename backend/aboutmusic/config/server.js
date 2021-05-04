module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1336),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'b828ed8df4e2e3a2a22a77fe42370a46'),
    },
  },
});
