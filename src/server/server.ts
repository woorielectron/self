import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const hostname = 'localhost';

const port = Number(process.env.NEXT_PUBLIC_PORT);
const server = express();
const router = express.Router();
/*------------------------------------------------
  CORS설정(제일 상단에 위치필요), use 메서드 
-------------------------------------------------*/
server.use(cors());
server.use(express.json());
server.use(router);
router.route('/com')
  .get(async (req, res) =>
  {
    // test
    const users = await prisma.post.create({
      data: {}
    })
    res.status(202).json('ok');
  })
  .post(async (req, res) =>
  {

  });


server.listen(port, hostname, () =>
{
  console.log('서버시작-PRISMA')
})

