const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())                                      //getting data pasrse in json
app.use(userRouter)                                         
app.use(taskRouter)                                         //registering the data coming from different file

app.listen(port, () => {
    console.log(`server is up on port ${port}`)
})

