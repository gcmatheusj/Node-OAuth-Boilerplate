import { Request, Response } from 'express'

class SessionController {
  public async google (req: Request, res: Response): Promise<Response> {
    // handle with passport
    return res.send('Signin with google')
  }
}

export default new SessionController()
