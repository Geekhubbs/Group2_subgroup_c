require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const {colleges,departments,students} = require('./data')

//json parsing
app.use(express.json());

//Student Management Array
/*const colleges = [{
    college_id: 1,
    name: "College of Engineering",
    college_code: "COLENG",
    dean: "Prof. Adewale"
}];

const departments = [{
    department_id: 1,
    name: "Computer Engineering",
    department_code: "CPE",
    college_id: 1,
    hod: "Dr. Johnson"
}];

const students = [{
    student_id: 1,
    full_name: "John Doe",
    email: "doe@yahoo.com",
    level: "200",
    department_id: 1,
    phone: "090675432"
}];*/

//Get methods 
app.get(('/colleges'), (req, res) => {
    if (!colleges.length) {
        return res.status(400).json({ message: "No colleges exist yet" })
    }
    res.json(colleges)
})
app.get(('/departments'), (req, res) => {
    if (!departments.length) {
        return res.status(400).json({ message: "No departments exist yet" })
    }
    res.json(departments)
})
app.get('/students', (req, res) => {

    if (!students.length) {
        return res.status(400).json({ message: 'No students exist yet' })
    }
    res.json(students)
})

//GET methods by id
app.get(('/colleges/:id'), (req, res) => {
    const collegeId = Number(req.params.id);
    const college = colleges.find(
        c => c.collegeId === collegeId
    )

    if (!college) {
        return res.status(400).json({ message: "College does not exist" })
    }

    res.json(college);
})

app.get(('/departments/:id'), (req, res) => {
    const departmentId = Number(req.params.id);
    const department = departments.find(
        d => d.departmentId === departmentId
    )

    if (!department) {
        return res.status(400).json({ message: "Department does not exist" })
    }

    res.json(department);
});

app.get('/students/:id', (req, res) => {
    const studentId = Number(req.params.id);
    const student = students.find(
        s => s.studentId === studentId
    )
    if (!student) {
        return res.status(400).json({ message: "Student Not Found" })
    }

    res.json(student);


});

//POST methods
app.post('/colleges', (req, res) => {

})

app.post('/departments', (req, res) => {

})
app.post('/students', (req, res) => {

})

//Patch methods
//Delete methods
app.get("/",(req,res)=>{
    res.send("Student Management API");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})