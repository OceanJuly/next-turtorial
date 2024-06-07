import NextAuth from "next-auth";
import Github from "next-auth/providers/github";

export default NextAuth({
    providers: [
        Github({
            client: process
        })
    ]
})