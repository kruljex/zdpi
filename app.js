const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config('.env');
const mailRouter = require('./routes/mailRouter');
const confRouter = require('./routes/confRouter');
app.use(express.json());

let corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

//Static
app.use(express.static('client/build'));

const path = require('path');
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

//CORS
app.use('/api/mail', cors(), mailRouter);
app.use('/api/konfiguracija', cors(), confRouter);

app.get('/', (req, res) => {
  res.send(`<h1>Willkomen zu ZDPI API!</h1>`);
});

//console.log(process.env.PORT);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
