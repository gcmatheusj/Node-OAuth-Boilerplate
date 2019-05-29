import passport from 'passport'
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth'
import User, { UserInterface } from '../models/User'
import passportConfig from '../../config/passport'

class Passport {
  public constructor () {
    this.config()
  }

  private config (): void {
    passport.use(new GoogleStrategy({
      clientID: passportConfig.id,
      clientSecret: passportConfig.secret,
      callbackURL: 'http://www.example.com/auth/google/callback'
    },
    async (accessToken, refreshToken, profile): Promise<UserInterface> => {
      const existingUser: UserInterface = await User.findOne({ googleId: profile.id })

      if (existingUser) {
        return existingUser
      }

      const user: UserInterface = await User.create({ googleId: profile.id })

      return user
    }
    ))
  }
}

export default new Passport()
