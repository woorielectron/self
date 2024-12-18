'use client';
import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useRef, useState } from 'react';

const port = process.env.NEXT_PUBLIC_PORT;

export default function HomePage(props: any)
{

  const [page, setPage] = useState<any>(null);
  async function connect()
  {
    const i: AxiosResponse = await axios.get(`http://localhost:${port}/com`,
      {
        email: 'woori3@wooori.com',
        firstName: '우주선3',
        lastName: '통뼈3',
        age: 100,
        address: '퉁구스3',

      }
    );
    // i.data.forEach((d, i) =>
    // {

    // })
    // setPage(JSON.stringify(i.data));
    console.log(i.data);
    // setPage(i.data);

  }
  return (
    <>
      <form>
        <input type='button' value="버튼" onClick={connect} />
      </form>
      {page}
    </>
  )
}