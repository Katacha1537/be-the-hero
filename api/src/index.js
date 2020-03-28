const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler ligando na porta %s', port);
});