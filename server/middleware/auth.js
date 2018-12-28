import Debug from 'debug'
import { secret } from '../config'
import jwt from 'jsonwebtoken'

const debug = new Debug('platzi-overflow:auth-middleware')

export const users = [
  {
    firstName: 'Sacha',
    lastName: 'Lifszyc',
    email: 'sacha@platzi.com',
    password: '123456',
    _id: 123
  }
]

export const findUserByEmail = e => users.find(({ email }) => email === e)

export const required = (req, res, next) => {
    jwt.verify(req.body.token, secret, (err, token) => {

        if (err) {
            debug('JWT no se encripto con nuestro secreto')
            return res.status(401).json({
                message: 'Unauthorized',
                error: err
            })
        }

        debug(`Token verificado!!!! ${token}`)
        req.user = token.user
        next()
    })
}