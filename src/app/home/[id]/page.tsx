'use client'
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface IProps
{
  params: {
    id: string;
  };
}

export default function HomePageID(props: IProps)
{
  const [params, setParams] = useState<{ id: string } | null>(null);
  const [count, setCount] = useState<number>(0);
  let ref = useRef(0);

  useEffect(() =>
  {
    const i = async () =>
    {
      const j = await props.params;
      setParams(j);
    };
    i();

    const timer = setInterval(() =>
    {
      if (ref.current === 0)
      {
        if (params !== null) { ref.current = 1; setCount(Number(params.id)); }
      }
      else
      {
        setCount(e => e + 1);
      }
    }, 1000);
    return () => clearInterval(timer);

  }, [props.params, params]);

  if (!params)
  {
    return (
      <h1>로딩중!!!!!</h1>
    )
  }
  return (
    <>
      <h2>{count}</h2>
      <Link href='https://www.naver.com' target="_blank">네이버연결({params.id})</Link>
    </>
  );
};

