export default () => ({
  username: process.env.USERNAME,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  queue: {
    host: process.env.QUEUE_HOST,
    port: +process.env.QUEUE_PORT,
  },
});
