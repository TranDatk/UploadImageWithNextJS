'use client'

import { useEffect } from 'react';
import AppTable from '@/app/components/app.table';

export default function Upload() {



  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:8000/blogs');
      const data = await res.json();
      console.log("Check : ", data)
    }
    fetchData();
  }, [])

  return (
    <>
      <div className='container mx-auto px-4'>
        <AppTable />
      </div>
    </>
  )
}