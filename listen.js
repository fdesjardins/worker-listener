const express = require('express');
const request = require('request');

const config = {
  host: 'localhost',
  port: 7175,
  workerPort: 7176
};

const app = express();
app.get('/sites/:siteId', (req, res) => {
  const siteId = req.params.siteId;

  new Promise((resolve, reject) => {
    request(`http://${config.host}:${config.workerPort}/sites/${siteId}`)
      .on('error', (err) => {
        reject(err)
      })
      .pipe(res);
  })
  .catch(err => {
    res.status(500).send({
      error: err,
      message: 'error with request in listen.js'
    });
  });
});

app.listen(config.port, () => {
  console.log(`listening on ${config.port}`);
});
