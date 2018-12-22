import express from 'express'
import { question } from './routes'

const app = express()

app.use('/api/questions', question)
app.use('/', (req, res) => res.send("Hola Mundo!"))

export default app