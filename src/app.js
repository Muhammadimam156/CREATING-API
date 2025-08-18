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
app.get(`/studentInfo`, (req, res) => {
    res.send(allStudentInfo)
})

app.get(`/about`, (req, res) => {
    res.send(`This is the about page`)
})
const user  = true
app.post(`/addStudent` ,(req, res) => {
    const newStudent = req.body
    allStudentInfo.push(newStudent)
    if(user) {
        res.send({
            message: 'Student Added successfully',
            addedStudent: newStudent
        })
    }else{
        res.status(401).send('Student added failed !')
    }
})



app.listen(3000, () => {
    console.log('Server is running on port 3000')
})