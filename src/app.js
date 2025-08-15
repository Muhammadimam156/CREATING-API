const express  = require(`express`)
const app = express()


app.get(`/`, (req, res) => {
    res.send(
        [
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
    )
})

app.get(`/about`, (req, res) => {
    res.send(`This is the about page`)
})

app.post(`/contact`, (req, res) => {
    req.
    res.send({
  username: "testuser",
  password: "123456",
}
)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})