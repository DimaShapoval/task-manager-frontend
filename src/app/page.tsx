'use client';

import { useGetBoardsQuery } from '@/redux/services/board';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  const { data, isFetching } = useGetBoardsQuery({});

  useEffect(() => {
    console.log('data', data);
  }, [data, isFetching])

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
     
    </div>
  );
}
