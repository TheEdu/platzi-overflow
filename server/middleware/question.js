import { handleError } from './../utils'
import { question } from '../db-api'

export const questionMiddleware = async (req, res, next) => {
    try {
      req.question = await question.findById(req.params.id)
      next()
    } catch (err) {
      handleError(err, res)
    }
  }