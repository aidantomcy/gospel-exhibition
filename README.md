# gospel-exhibition
This is a website for a Sunday school project of mine and is a list of many famous parables in the New Testament.

## Backend
The backend for this website has been written in TypeScript. I have used Express.js, Mongoose and Zod to build it.  
I may update the codebase to use Prisma later on.

## Frontend
The frontend for this website has also been written in TypeScript, and I have used Next.js and Tailwind CSS.

## Running locally
1. Install the dependencies for the backend with PNPM:
   ```
   cd server
   pnpm i
   ```
1. Rename the `.env.example` file to .env, and add values for the given fields.
1. Compile the TypeScript code:
   ```
   pnpm dev
   ```
1. Run the compiled JavaScript code:
   ```
   pnpm start
   ```
1. Install the dependencies for the frontend:
   ```
   cd ../client
   pnpm i
   ```
1. Run the frontend server:
   ```
   pnpm dev
   ```
   Or, you can use Turbopack:
   ```
   pnpm turbo:dev
   ```
