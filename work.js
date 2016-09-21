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
  const siteId = req.params.siteId

  request(`${sites[siteId]}`)
  .on('error', error => {
    console.error(`error in request to site ${siteId}`, error);
    res.status(504);
    res.end('error with request');
  })
  .pipe(res);
});

app.listen(config.port, () => {
  console.log(`listening on ${config.port}`);
});
