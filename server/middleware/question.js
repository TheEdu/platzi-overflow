import { handleError } from './../utils'
import { question as  questionDB } from '../db-api'

const question = {
    _id: 1,
    title: '¿Cómo reutilizo un componente en Android?',
    description: 'Miren esta es mi pregunta...',
    createdAt: new Date(),
    icon: 'devicon-android-plain',
    answers: [],
    user: {
      firstName: 'Sacha',
      lastName: 'Lifszyc',
      email: 'sacha@platzi.com',
      password: '123456'
    }
  }
  
const questions = new Array(10).fill(question)

export const questionsMiddleware = (req, res, next) => {
    req.questions = questions
    next()
}

export const questionMiddleware = (req, res, next) => {
    const { id } = req.params
    req.question = questions.find(({ _id }) => _id === +id)
    next()
}

export const questionMiddleware2 = async (req, res, next) => {
    try {
      req.question = await questionDB.findById(req.params.id)
      next()
    } catch (err) {
      handleError(err, res)
    }
  }