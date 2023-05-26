import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from "@models/user";
import { connectToDB } from "@utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({
        email: session.user.email,
      });
      session.user.role = sessionUser.role;
      console.log(sessionUser.role);
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();

        // check if user already exists
        const userExists = await User.findOne({ email: profile.email });
        console.log(profile);
        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            firstName: profile.given_name,
            lastName: profile.family_name,
            email: profile.email,
            username: profile.name,
            image: profile.picture,
            role:
              profile.email === "ismail.kurtf@gmail.com"
                ? ["veterinary"]
                : ["user"],
          });
        }

        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
