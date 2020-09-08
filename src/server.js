require('dotenv').config();

const express = require('express')
const boryParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const app = express();

const routes = require('./router')

app.use(cors())
app.use(boryParser.json())
app.use(boryParser.urlencoded({extended: false}))
app.use('/api',routes)
app.use('/api/tmp/uploads',express.static(path.resolve(__dirname, '..','tmp','uploads')));

app.listen(3333)

