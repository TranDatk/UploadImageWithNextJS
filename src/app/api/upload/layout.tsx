'use client'
import AppHeader from '@/app/components/app.header';
import AppFooter from '@/app/components/app.footer';

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
    </>
  );
}
