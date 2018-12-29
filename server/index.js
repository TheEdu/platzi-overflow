import Debug from 'debug'
import app from './app'
import mongoose from'mongoose'
import { mongoUrl } from'./config'

const PORT = 3000
const debug = new Debug('platzi-overflow:root')

const start = async () => {

  await mongoose.connect(mongoUrl, {
    useNewUrlParser: true 
  })

  app.listen(PORT, () => {
    debug(`Server running at port ${PORT}`)
  })

}

start()