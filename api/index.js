/**
const express = require('express')

var cors = require('cors')

const bodyParser = require('body-parser')

// Create express instance
const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyParser.json({ limit: '50mb', extended: true }))

// Require API routes
const pdf = require('./routes/pdf')
const screenshot = require('./routes/screenshot')
const preview = require('./routes/preview')

// Import API Routes
app.use(pdf)
app.use(screenshot)
app.use(preview)

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
    const port = process.env.PORT || 3001
    app.listen(port, () => {
        // eslint-disable-next-line no-console
        console.log(`API server listening on port ${port}`)
    })
}
*/