This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Authentication

Authentication verifies who a user is, while authorization controls what a user can access. Next.js supports multiple authentication patterns, each designed for different use cases. 


## Getting Started

> npm i next-auth

The default base path is `/api/auth` but it is configurable by specifying a custom path in `NEXTAUTH_URL`

```js

//When deploying to production, set the NEXTAUTH_URL environment variable to the canonical URL of your site.

```

## OAuth

Authentication Providers in NextAuth.js are OAuth definitions that allow your users to sign in with their favorite preexisting logins. You can use any of our many predefined providers, or write your own custom OAuth configuration.

- Using a built-in OAuth Provider (e.g `Github`, `Twitter`, `Google`, etc...)
- Using a custom OAuth Provider
