const express = require('express')
const bodyParser = require('body-parser')
const {Student} = require('./../db/db')
let app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/students', (_, response) => {
    Student.findAll().then((data) => response.json(data))
                     .catch(error => response.json(error))
})

app.post('/students' , (request, response) => {
    Student.create({
        rollNo: request.body.rollNo,
        name: request.body.name,
        subject: request.body.subject,
        marks: request.body.marks
    }).then((added_student) => response.json(added_student))
      .catch (error => response.json(error))
})

app.listen(9000, () => console.log("SERVER STARTED AT PORT 9000"))
