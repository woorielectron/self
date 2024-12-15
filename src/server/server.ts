import http, { IncomingMessage, ServerResponse } from 'http';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
dotenv.config();

import { myUser } from './components/user';
console.log(__dirname);
fs.readFile(`${__dirname}/components/user.js`, 'utf-8', (err, data) =>
{
  console.log(err);
  console.log(data);
});




// const server = http.createServer((req: IncomingMessage, res: ServerResponse) =>
// {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello world6\n');
// });
// const hostName: string = 'localhost';
// server.listen(Number(process.env.NEXT_PUBLIC_PORT), hostName, () =>
// {
//   console.log('서버시작');
// })