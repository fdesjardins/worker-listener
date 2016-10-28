const express = require('express');
const request = require('request');

const sites = require('./sitelist').sites;

const config = {
  host: 'localhost',
  port: 7176
};

app = express();
app.get('/sites/:siteId', (req, res) => {
  const siteId = req.params.siteId;

  new Promise((resolve, reject) => {
    request(`${sites[siteId]}`)
      .on('error', (err) => {
        reject(err)
      })
      .pipe(res);
  })
  .catch(err => {
    res.status(500).send({
      error: err,
      message: 'error with request in work.js'
    });
  });
});

app.listen(config.port, () => {
  console.log(`listening on ${config.port}`);
});
