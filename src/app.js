const express = require('express');
const { userLoginRoutes, userCreateRoutes, categoryRoutes, postRoutes } = require('./routes');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/login', userLoginRoutes);
app.use('/user', userCreateRoutes);
app.use('/categories', categoryRoutes);
app.use('/post', postRoutes);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
