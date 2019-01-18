const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./router');


mongoose.connect('mongodb://localhost:27017/auth');

const app = express();
app.use(morgan('combined'));
app.use(cors()); // accepts requests from anywhere without any configuration
app.use(bodyParser.json());
router(app);

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);

console.log('Server listening on:', port);