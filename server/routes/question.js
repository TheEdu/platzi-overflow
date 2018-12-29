import express from 'express'
import {
  required,
  questionMiddleware,
  questionsMiddleware
} from '../middleware'
import { question } from '../db-api'
import { handleError } from './../utils';

const app = express.Router()

// /api/questions middleware way
// app.get('/', questionsMiddleware, (req, res) => {
//   res.status(200).json(req.questions)
// })

// /api/questions db-api
app.get('/', async (req, res) => {
  try {
    const questions = await question.findAll()
    res.status(200).json(questions)
  } catch (error) {
    handleError(error, res)
  }
})

// /api/questions/:id middleware way
// app.get('/:id', questionMiddleware, (req, res) => {
//   res.status(200).json(req.question)
// })

// /api/questions/:id
app.get('/:id', async (req, res) => {
  try {
    const q = await question.findById(req.params.id)
    res.status(200).json(q)
  } catch (error) {
    handleError(error, res)
  }
})

// POST /api/questions
app.post('/', required, questionsMiddleware,(req, res) => {
  const question = req.body
  question._id = +new Date()
  question.user = req.user
  question.createdAt = new Date()
  question.answers = []
  req.questions.push(question)
  res.status(201).json(question)
})

// POST /api/questions/id/answers
app.post('/:id/answers', required, questionMiddleware, (req, res) => {
  const answer = req.body
  const q = req.question
  answer.createdAt = new Date()
  answer.user = req.user
  q.answers.push(answer)
  res.status(201).json(answer)
})

export default app