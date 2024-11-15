module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', 'e+TWLvz/TgWbSD+dctAzEg=='),
  },
});
