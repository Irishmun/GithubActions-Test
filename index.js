// Imports
const express = require('express')
const router = require('./routes')

// Setup
const app = express()
app.use(express.json())

// Router
app.use('/api', router)

// Start API
app.listen(3000, () => {
    console.log('listening on port 3000')
})