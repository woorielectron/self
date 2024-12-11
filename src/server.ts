// const http = require('http');
import http from 'http';
import dotenv from 'dotenv';
dotenv.config();

const server = http.createServer((req: any, res: any) =>
{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello world6\n');
});
const hostName: string = 'localhost';
server.listen(Number(process.env.NEXT_PUBLIC_PORT), hostName, () =>
{
  console.log('서버시작6');
})