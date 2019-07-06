const express = require('express');
const path = require('path');

// open the site in the browser
const open = require('open');

// choose port available for you
const port = 3000;

// create an instance of express
const app = express();

// sample route
app.get('/', (req, res) => {
  // __dirname: current working directory
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

// tell express to listen the port
app.listen(port, (error) =>  {
  if(error) {
    console.log(error);
  } else {
    open(`http://localhost:${port}`);
  }
});


