// src/server.ts
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/api/beta', (req: Request, res: Response) =>
{
  res.status(200).send('beta')
});

app.listen(port, () =>
{
  console.log(`Server is running on http://localhost:${port}`);
});
