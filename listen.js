const express = require('express');
const request = require('request');

const config = {
  host: 'localhost',
  port: 7175,
  workerPort: 7176
};

const app = express();
app.get('/sites/:siteId', (req, res) => {
  request(`http://${config.host}:${config.workerPort}/sites/${req.params.siteId}`).pipe(res);
});

app.listen(config.port, () => {
  console.log(`listening on ${config.port}`);
});
