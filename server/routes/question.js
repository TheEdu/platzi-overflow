import express from 'express'
import {
  required,
  questionMiddleware,
  questionsMiddleware,
  questionMiddleware2
} from '../middleware'
import { question } from '../db-api'
import { handleError } from './../utils'
import { User } from './../models'

import Debug from 'debug'
const debug = new Debug('platzi-overflow:routes:question')

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
app.get('/:id', questionMiddleware2, async (req, res) => {
  try {
    // const q = await question.findById(req.params.id)
    // res.status(200).json(q)
    res.status(200).json(req.question)
  } catch (error) {
    handleError(error, res)
  }
})

// POST /api/questions middleware way
// app.post('/', required, questionsMiddleware,(req, res) => {
//   const question = req.body
//   question._id = +new Date()
//   question.user = req.user
//   question.createdAt = new Date()
//   question.answers = []
//   req.questions.push(question)
//   res.status(201).json(question)
// })

// POST /api/questions
app.post('/', required, async (req, res) => {
  const { title, description, icon } = req.body
  const q = {
    title,
    description,
    icon,
    user: req.user._id
  }
  try {
    const savedQuestion = await question.create(q)
    res.status(201).json(savedQuestion)
  } catch (error) {
    handleError(error, res)
  }
})

// POST /api/questions/id/answers middleware way
// app.post('/:id/answers', required, questionMiddleware, (req, res) => {
//   const answer = req.body
//   const q = req.question
//   answer.createdAt = new Date()
//   answer.user = req.user
//   q.answers.push(answer)
//   res.status(201).json(answer)
// })

app.post('/:id/answers', required, questionMiddleware2, async (req, res) => {
  const a = req.body
  const q = req.question
  a.createdAt = new Date()
  a.user = new User(req.user)
  try {
    const savedAnswer = await question.createAnswer(q, a)
    res.status(201).json(savedAnswer)
  } catch (error) {
    handleError(error, res)
  }
})

export default app