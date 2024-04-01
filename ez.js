const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 8888;
const headers = JSON.parse(process.env.HEADERS_JSON || '{}');

console.log("Endpoint: " + process.env.GRAPHQL_URL);
console.log("Subscriptions: " + process.env.WSS_URL);
console.log("Headers");
console.log(headers);

app.get('/', (req, res) => {
  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
      return;
    }
    // Replace placeholders with environment variable values
    let modifiedData = data.replace('<URL>', process.env.GRAPHQL_URL)
                           .replace('"<HEADERS>"', JSON.stringify(headers))
                           .replace('"<WSHEADERS>"', JSON.stringify(headers))
                           .replace('<WSS_URL>', process.env.WSS_URL)
    res.send(modifiedData);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
