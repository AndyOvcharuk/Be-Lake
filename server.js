const express = require('express')
const app = express()
const router = express.Router()

const lake = require('./controllers/lake.js')

app.use(express.json())
app.use(express.static('public'))

app.use('/api/lake', router)

router.get('/all', lake.readAll)

app.listen(process.env.PORT || 8080, () => console.log('Server running'))
