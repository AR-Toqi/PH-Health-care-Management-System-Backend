import express,{ Application, Request, Response } from 'express';
import { prisma } from './app/lib/prisma';
import { indexRoute } from './app/routes';
// import cors from "cors";


const app: Application = express();

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     credentials: true,
//   })
// )

app.use('/api/v1', indexRoute)
// Basic route
app.get('/', async (req: Request, res: Response) => {
  const result = await prisma.specialty.create({
    data:{
      title: "test"
    }
  })
  res.status(201).json(
    {
    success: true,
    massage: 'api is running',
    data: result
  }
  )
});

export default app;