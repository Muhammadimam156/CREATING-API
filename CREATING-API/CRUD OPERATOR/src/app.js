const express = require('express');
const app = express();
const port = 6000;
app.use(express.json());

const student = [
    {
        id: 1,
        name: 'John Doe',
        age: 20
    },
    {
        id: 2,
        name: 'Jane Smith',
        age: 22
    },
    {
        id: 3,
        name: 'Alice Johnson',
        age: 19
    }
]

app.use('/api/:id', (req, res) => {
    if (req.method === 'GET') {
        const studentId = parseInt(req.params.id);
        const selectedStudent = student.find(s => s.id === studentId);
        if (selectedStudent) {
            res.send(selectedStudent);
        } else {
            res.status(404).send({ message: 'Student not found' });
        }
    } else if (req.method === 'POST') {
        const newStudent = req.body;
        student.push(newStudent);
        res.status(201).send(newStudent);
    } else if (req.method === 'PUT') {
        const studentId = parseInt(req.params.id);
        const studentIndex = student.findIndex(s => s.id === studentId);
        if (studentIndex !== -1) {
            const updatedStudent = { ...student[studentIndex], ...req.body };
            student[studentIndex] = updatedStudent;
            res.send(updatedStudent);
        } else {
            res.status(404).send({ message: 'Student not found' });
        }
    } else if (req.method === 'DELETE') {
        const studentId = parseInt(req.params.id);
        const studentIndex = student.findIndex(s => s.id === studentId);
        if (studentIndex !== -1) {
            student.splice(studentIndex, 1);
            res.send({ message: 'Student deleted successfully' });
        } else {
            res.status(404).send({ message: 'Student not found' });
        }
    }
});

app.use(`/`, (req, res) => {
    res.send(student);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
