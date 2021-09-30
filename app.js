require('dotenv').config();
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const { notFound } = require('./middleware/not-found')
const { errorHandler } = require('./middleware/error-handler')


//middleware
app.use(express.json())

//Serving static files
app.use(express.static('./public'))


//Routes
app.use('/api/v1/tasks', tasks);

app.use(notFound)
app.use(errorHandler)

const start = async() => {
    try {
        await connectDB(process.env.MONGODB_URL)
        const port = process.env.PORT || 3005
        app.listen(port, () => console.log(`Server started on port http://localhost:${port}`))
    } catch (error) {
        console.log(error)        
    }
}

start()