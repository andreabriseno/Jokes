const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/jokes_api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) /// this is going to return a promis so I need a .then and .catch
//bascially a promise trying to connect to the database

.then(() => console.log('Established a connection to the database'))
.catch(err => console.log('Something went wrong when connecting to the database ', err));