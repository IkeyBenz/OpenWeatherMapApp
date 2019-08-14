const express = require('express');
const path = require('path');
require('./database/db');

const app = express();

const { PORT } = process.env;

// Allow full access to static client files
app.use(express.static(path.join(__dirname, 'public')));

// Allow submission of form data
app.use(express.urlencoded({ extended: false }));

// Listen for weather or mood requests
app.use(require('./controllers/openweather'));
app.use(require('./controllers/moods'));

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
