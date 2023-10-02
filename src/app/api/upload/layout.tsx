'use client'
import AppHeader from '@/app/components/app.header';
import AppFooter from '@/app/components/app.footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function UploadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
      <ToastContainer position='top-center'/>
    </>
  );
}
