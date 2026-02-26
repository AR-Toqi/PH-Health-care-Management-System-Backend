import express,{ Application, Request, Response } from 'express';
import { prisma } from './app/lib/prisma';
import { indexRoute } from './app/routes';
import { globalErrorHandler } from './middleware/globalErrorHandler';
import { notFound } from './middleware/notFound';
// import cors from "cors";


const app: Application = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));


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

app.use(globalErrorHandler);
app.use (notFound);
export default app;