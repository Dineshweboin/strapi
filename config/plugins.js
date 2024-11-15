module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET', 'FOl74KX4lJnowQcmjssvQw=='),
      },
    },
  });
  