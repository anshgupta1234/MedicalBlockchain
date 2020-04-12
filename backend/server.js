const express     = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');
const db          = require('./config/db');

const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

MongoClient.connect(db.url, (err, client) => {
  if (err) return console.log(err);
  const db = client.db('Cluster0');
  require('./app/routes')(app, db);
  app.listen(port, () => {
    console.log("We are live on " + port)
  });
});


