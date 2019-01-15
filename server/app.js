const express = require('express')
const bodyParser = require('body-parser')
let app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.listen(9000, () => console.log("SERVER STARTED AT PORT 9000"))
