const express  = require(`express`)
const app = express()
app.use(express.json())


const  allStudentInfo =[
            {
                id: 1,
                name: `imam`,
                email: `imam.rashid@example.com`
            },
            {
                id: 2,
                name: `ali hassan`,
                email: `ali.hassan@example.com`
            },
            {
                id: 3,
                name: `hyder`,
                email: `hyder.alison@example.com`
            }
        ]
   //                                                        get method
     app.get(`/`, (req, res) => {
        res.send(`Welcome to the Student API`)
})

app.get(`/studentInfo`, (req, res) => {
    res.send(allStudentInfo)
})

//                                                          post method
app.post(`/studentInfo`, (req, res) => {
    const newStudent = req.body
    allStudentInfo.push(newStudent)
    res.status(201).send(allStudentInfo)
})


               //                                              put method
app.put(`/studentInfo/:id` , (req, res) => {
            const {id} = req.params
            const studentIndex = allStudentInfo.find((student) => student.id ==  parseInt(id))
            if (studentIndex) {
                const updatedStudent = req.body
                allStudentInfo[studentIndex] = updatedStudent
                res.send(updatedStudent)
            } else {
                res.status(404).send({ message: `Student with ID ${id} not found` })
            }
})


//                                                         delete method
app.delete(`/studentInfo/:id`, (req, res) => {
            const {id} = req.params
            const studentIndex = allStudentInfo.findIndex((student) => student.id == parseInt(id))
            if (studentIndex !== -1) {
              const deletedStudent = allStudentInfo.splice(studentIndex, 1)
                res.send({ message: `Student with ID ${id} deleted successfully`, deletedStudent: deletedStudent })
            } else {
                res.status(404).send({ message: `Student with ID ${id} not found` })
            }
})
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})