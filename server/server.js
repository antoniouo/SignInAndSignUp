require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors');
const axios = require('axios');

const apiUserRouter = require('./routes/apiUserRouter');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
credentials: true,
origin: true,
}));

app.use(session({
name: 'sid',
store: new FileStore({}),
secret: 'jdkjelkwjelk',
saveUninitialized: false,
resave: false,
cookie: {
expires: 24 * 60 * 60e3,
httpOnly: true,
},
}));

app.use('/api/user', apiUserRouter); 

app.listen(PORT, () => {
console.log('server start on port ', PORT);
});