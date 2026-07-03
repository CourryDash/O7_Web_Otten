import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import users from '../models/users.js';
import 'dotenv/config';

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
},
async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await users.findOne({ where: { google_id: profile.id } });
        if(user){
            return done(null, user);
        }

        const email = profile.emails[0].value;
        user = await users.findOne({ where: { email: email} });

        if(user){
            user.google_id = profile.id;
            await user.save();
            return done(null, user);
        }

        const baseUsername = profile.displayName.replace(/\s+/g, '').toLowerCase();
        const uniqueUsername = `${baseUsername}${Math.floor(100 + Math.random() * 900)}`;

        const newUser = await users.create({
            username: uniqueUsername,
            email: email,
            google_id: profile.id,
        });

        return done(null, newUser);
    } catch (err) {
        console.error('Error pada Google Strategy', err);
        return done(err, null);
    }
}));

export default passport;
