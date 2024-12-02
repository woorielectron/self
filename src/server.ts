// server.ts
import express, { Request, Response } from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = 3000;

app.prepare().then(() =>
{
  const server = express();

  server.get('/api/hello', (req: Request, res: Response) =>
  {
    res.status(200).json({ message: 'Hello from Express!' });
  });

  server.all('*', (req: Request, res: Response) =>
  {
    return handle(req, res);
  });

  server.listen(port, (err?: Error) =>
  {
    if (err) throw err;
    console.log(`Server is running on http://localhost:${port}`);
  });
});
