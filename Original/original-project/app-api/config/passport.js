/*                                                                              
 *******************************************************************************
 * Travlr Getaways                                                             *
 * File: /passport.js                                                          *
 * Purpose: Configures Passport local authentication so API login uses the     *
 *          project User model consistently.                                   *
 * Author: Alysha Pursley                                                      *
 * Copyright: (c) 2026 Alysha Pursley.                                         *
 * License: Proprietary; see LICENSE                                           *
 *******************************************************************************
*/                                                                              

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/users");

// Local authentication uses email as the username and delegates hash checking to the User model.
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      try {
        // Email normalization matches the lowercase storage rule in the user schema.
        const user = await User.findOne({ email: email.toLowerCase() });

        // Use one generic response for missing users and bad passwords to avoid account disclosure.
        if (!user || !user.validPassword(password)) {
          return done(null, false, {
            message: "Invalid email or password.",
          });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

module.exports = passport;
