'use client'

import { useEffect } from 'react';
import AppTable from '@/app/components/app.table';
import React from "react";
import useSWR from "swr";
import CreateModal from '@/app/components/create.modal';

export default function Upload() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <>
      <div className='container mx-auto px-4'>
        <AppTable blogs={data?.sort((a: any , b: any)=> b.id - a.id) } />
      </div>
    </>
  )
}