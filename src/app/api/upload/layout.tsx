'use client'
import AppHeader from '@/app/components/app.header';
import AppFooter from '@/app/components/app.footer';

export default function UploadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <div>
      <AppHeader />
      <div className='container'>{children}</div>
      <AppFooter />
    </div>
  );
}