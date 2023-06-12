const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require('./user/routes/authRoute')

const app = express();
app.use(bodyParser.json());
app.use('/', userRoutes)

app.listen(3000, () => {
    console.log('server started');
})