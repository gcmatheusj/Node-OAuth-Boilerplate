import {} from 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import { routes, authRoutes } from './routes'

class Server {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.database()
    this.middlewares()
    this.routes()
  }

  private database (): void {
    mongoose.connect('mongodb://localhost:27017/tsnode', {
      useNewUrlParser: true,
      useCreateIndex: true
    })
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private routes (): void {
    this.express.use('/auth', authRoutes)
    this.express.use(routes)
  }
}

export default new Server().express
