const express = require('express')
const app = express()
const path = require('path');

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/public')));

var routes = require('./routes');  
routes(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})