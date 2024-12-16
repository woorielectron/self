import http, { IncomingMessage, ServerResponse } from 'http';
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import fs from 'fs';
import express from 'express';

const hostname: string = 'localhost';
const port = Number(process.env.NEXT_PUBLIC_PORT);

const server = express();
server.use(express.json());

server.listen(port, hostname, () =>
{
  console.log('listening');
});
server.get('/home/:id', (req, res) =>
{
  res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf8' });
  res.end(`get 전송  ${req.params.id}`);
});
server.post('/home/:id', (req, res) =>
{
  console.log(req.body);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`post 전송 ${req.params.id}`);

});






