import { Router } from 'express'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'

export const routes = Router()

routes.get('/users', UserController.index)

export const authRoutes = Router()

authRoutes.get('/google', SessionController.google)
