require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

// use cors
app.use(cors());

// set static folder
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>');
});

// put router here
app.use('/api/restaurant', require('./routes/restaurant'));
app.use('/api/restaurant-pic', require('./routes/restaurant-pic'));
app.use('/api/spmenu', require('./routes/spmenu'));
app.use('/api/menu-pic', require('./routes/menu-pic'));

app.use((req, res) => {
    res.status(404).send('<h1>404</h1>');
});

app.listen(5000, () => {
    console.log('Server is running');
});
