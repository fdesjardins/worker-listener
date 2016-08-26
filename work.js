const express = require('express');
const request = require('request');

const config = {
  host: 'localhost',
  port: 7176
};

const sites = [
  'http://www.fillmurray.com/g/50/50'
];

app = express();
app.get('/sites/:siteId', (req, res) => {
  request(`${sites[req.params.siteId]}`).pipe(res);
});

app.listen(config.port, () => {
  console.log(`listening on ${config.port}`);
});
