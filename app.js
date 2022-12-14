const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
require('dotenv').config();
var cors = require('cors');
const userRouter = require('./routes/users.router');
const topicRouter = require('./routes/topics.router');
const coverUploader = require('./routes/cover.router');
const { graphqlHTTP } = require('express-graphql');
const { schema, rootValue } = require('./schema/schema');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', async (req, res, next) => {
  res.send({ message: 'Awesome it works 🐻' });
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

// app.use('/api', require('./routes/api.route'));
app.use('/uploads', express.static('uploads'));
app.use('/api/users', userRouter);
app.use('/api/topics', topicRouter);
app.use('/api/image', coverUploader);

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Up and runing 🚀 @ http://localhost:${PORT}`)
);
