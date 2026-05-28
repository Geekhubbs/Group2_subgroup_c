require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const { colleges, departments, students, } = require('./data')

//json parsing
app.use(express.json());

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


//GET departments under a college 
app.get('/colleges/:collegeId/departments', (req, res) => {
    const collegeId = parseInt(req.params.collegeId)
    const college = colleges.find(      //find the college
        c => c.collegeId === collegeId
    )
    if (!college) {                      //validate if college existed
        return res.status(404).json({ message: "College not found" })
    }

    const collegeDepartments = departments.filter(   //find departments in the college
        d => d.collegeId === college.collegeId
    )

    const departmentNames = collegeDepartments.map( //Extract department names 
        dept => dept.name
    )

    return res.status(200).json({
        college: college.name,
        NumberOfDept: collegeDepartments.length,
        departments: departmentNames
    })

})

//GET students in a department
app.get('/departments/:departmentid/students', (req, res) => {
    const departmentId = parseInt(req.params.departmentid)
    const department = departments.find(     //find the dept
        d => d.departmentId === departmentId
    )
    if (!department) {                            //validate if department exist
        return res.status(404).json({ message: "Department not found" })
    }

    const departmentStudents = students.filter(     //Extract students from the dept
        s => s.departmentId === department.departmentId
    )

    return res.status(200).json({
        department: department.name,
        NumberOfStudents: departmentStudents.length,
        students: departmentStudents
    })
})

//GET students in a college
app.get('/colleges/:collegeId/students', (req, res) => {
    const collegeId = parseInt(req.params.collegeId)
    const college = colleges.find(        //find the college
        c => c.collegeId === collegeId
    )
    if (!college) {                        //validate if college exist
        return res.status(404).json({ message: "College Not Found" })
    }
    const collegeStudents = students.filter(  //Extract students in the college
        s => s.collegeId === college.collegeId
    )

    return res.status(200).json({
        college: college.name,
        NumberOfStudents: collegeStudents.length,
        students: collegeStudents
    })
})

//POST for College
app.post('/colleges', (req, res) => {
    const { name, code } = req.body;
    if (!name || !code) {
        return res.status(400).json({
            message: "Enter all needed data required"
        })
    }
    const newCollege = {
        collegeId: colleges.length + 1,
        name,
        code
    }
    colleges.push(newCollege)
    res.status(201).json(newCollege)

})
//POST for Department
app.post('/departments', (req, res) => {

    const { name, code } = req.body
    const collegeId = parseInt(req.body.collegeId)
    if (!name || !code || !collegeId) {
        return res.status(400).json({
            message: "Enter all needed data"
        })
    }
    const departmentCollege = colleges.find(
        c => c.collegeId === collegeId
    ) //finds college

    if (!departmentCollege) {
        return res.status(400).json({
            message: "College does not exist"
        }) //college validation
    }

    const newDepartment = {
        departmentId: departments.length + 1,
        name,
        code,
        collegeId
    }

    departments.push(newDepartment)
    res.status(201).json(newDepartment)
})
//POST method for student
app.post('/students', (req, res) => {
    const { fullName, gender, level, email, year } = req.body;
    const departmentId = parseInt(req.body.departmentId);

    if (!fullName || !gender || !departmentId || !level || !email || !year) {
        return res.status(400).json({
            message: "Enter all needed data"
        })
    }
    //finding department
    const studentDepartment = departments.find(
        d => d.departmentId === departmentId
    )
    //Validation
    if (!studentDepartment) {
        return res.status(400).json({
            message: "Department does not exist"
        })
    }




    const collegeId = studentDepartment.collegeId;
    const studentCollege = colleges.find(
        c => c.collegeId === collegeId
    )
    const collegeCode = studentCollege.code;
    const sequence = students.filter(s => s.matricNumber.startsWith(`${collegeCode}/${year}`)).length + 1;

    const newStudent = {
        studentId: students.length + 1,
        fullName,
        gender,
        matricNumber: `${collegeCode}/${year}/${sequence.toString().padStart(3, "0")}`,
        collegeId,
        departmentId,
        level,
        email
    };

    students.push(newStudent);
    res.status(201).json(newStudent);

});

//Patch methods


// PATCH /colleges/:id - edit college details

app.patch('/colleges/:id', (req, res) => {
    const collegeId = Number(req.params.id);
    const college = colleges.find(c => c.collegeId === collegeId);

    if (!college) {
        return res.status(404).json({ message: "College does not exist" });
    }

    const { name, code } = req.body;
    if (name) college.name = name;
    if (code) college.code = code;

    res.status(200).json(college);
});

// PUT /departments/:id - update department

app.put('/departments/:id', (req, res) => {
    const departmentId = Number(req.params.id);
    const department = departments.find(d => d.departmentId === departmentId);

    if (!department) {
        return res.status(404).json({ message: "Department does not exist" });
    }

    const { name, code, collegeId } = req.body;

    // Validate new collegeId if provided
    
    if (collegeId) {
        const collegeExists = colleges.find(c => c.collegeId === Number(collegeId));
        if (!collegeExists) {
            return res.status(400).json({ message: "College does not exist" });
        }
        department.collegeId = Number(collegeId);
    }

    if (name) department.name = name;
    if (code) department.code = code;

    res.status(200).json(department);
});

// PATCH /students/:id - update student details
app.patch('/students/:id', (req, res) => {
    const studentId = Number(req.params.id);
    const student = students.find(s => s.studentId === studentId);

    if (!student) {
        return res.status(404).json({ message: "Student Not Found" });
    }

    const { fullName, gender, level, email } = req.body;

    if (fullName) student.fullName = fullName;
    if (gender) student.gender = gender;
    if (level) student.level = level;
    if (email) student.email = email;

    res.status(200).json(student);
});

// ==================== DELETE ROUTES ====================

// DELETE /colleges/:id - remove a college
app.delete('/colleges/:id', (req, res) => {
    const collegeId = Number(req.params.id);
    const collegeIndex = colleges.findIndex(c => c.collegeId === collegeId);

    if (collegeIndex === -1) {
        return res.status(404).json({ message: "College not found" });
    }

    // Prevent deletion if departments are linked
    const hasDepartments = departments.some(d => d.collegeId === collegeId);
    if (hasDepartments) {
        return res.status(400).json({ message: "Cannot delete college with existing departments" });
    }

    colleges.splice(collegeIndex, 1);
    res.status(200).json({ message: "College deleted successfully" });
});

// DELETE /departments/:id - remove a department
app.delete('/departments/:id', (req, res) => {
    const departmentId = Number(req.params.id);
    const departmentIndex = departments.findIndex(d => d.departmentId === departmentId);

    if (departmentIndex === -1) {
        return res.status(404).json({ message: "Department not found" });
    }

    // Prevent deletion if students are enrolled
    const hasStudents = students.some(s => s.departmentId === departmentId);
    if (hasStudents) {
        return res.status(400). json({ message: "Cannot delete department with enrolled students" });
    }

    departments.splice(departmentIndex, 1);
    res.status(200).json({ message: "Department deleted successfully" });
});

// DELETE /students/:id - remove a student
app.delete('/students/:id', (req, res) => {
    const studentId = Number(req.params.id);
    const studentIndex = students.findIndex(s => s.studentId === studentId);

    if (studentIndex === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    students.splice(studentIndex, 1);
    res.status(200).json({ message: "Student deleted successfully" });
});

// ==================== ERROR HANDLER & SERVER START ====================

// Error handler (must be after all routes)
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ error: "Server Error!" })
})

// Start the server
app.listen(port, () => {
    console.log(`Student Management API listening on port ${port}`)
})