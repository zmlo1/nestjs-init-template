export default () => ({
  username: process.env.USERNAME,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
});
