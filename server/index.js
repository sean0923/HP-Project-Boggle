const express = require('express');

const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
