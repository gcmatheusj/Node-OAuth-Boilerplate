import { Request, Response } from 'express'

import User from '../models/User'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find()

    return res.json(users)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body)

    return res.json(user)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true
    })

    return res.json(user)
  }

  public async destroy (req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    await User.findByIdAndDelete(id)

    return res.send()
  }
}

export default new UserController()
