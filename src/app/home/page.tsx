'use client';
import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useRef, useState } from 'react';



export default function HomePage(props: any)
{

  const [page, setPage] = useState<any>(null);
  async function connect()
  {
    const i: AxiosResponse = await axios.post('http://localhost:4000/home/99',
      { name: '권용화', com: 999 }
    );
    setPage(i.data);
    console.log(i.config.url);
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