import express from 'express';
import path from 'path';
import open from 'open'; // open the site in the browser
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../webpack.config.dev';

const port = 3000; // choose port available for you

// create an instance of express
const app = express();

// webpack compiler
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.dev.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

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


