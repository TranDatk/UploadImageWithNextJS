/** @format */
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/api/upload");
  };

  return (
    <div className='h-[100vh] justify-center flex items-center'>
      <div className='w-[800px] h-[392px] border rounded-[8px] flex flex-row'>
        <div className='bg-[#DD748C] max-h-full w-[600px] h-[392px] flex-col flex '>
          <Image
            id=''
            src='/images/Ellipse.png'
            width={80}
            height={80}
            alt='Picture of the author'
          />
          <h1 className=' text-[#FFFFFF] flex items-center justify-center w-[258px] h-[66px] text-[14px] ml-10 mb-20'>
            Đăng nhập để nhận được các voucher giảm giá và các lời khuyên dinh
            dưỡng từ Chuyên Gia.
          </h1>
          <Image
            className='ml-20'
            id=''
            src='/images/Subtract.svg'
            width={300}
            height={300}
            alt='Picture of the author'
          />
        </div>
        <div className='h-full w-full'>
          <Image
            className='ml-5 mt-5'
            id=''
            src='/images/Logo.png'
            width={65}
            height={60}
            alt='Picture of the author'
          />
          <h1 className='mt-[30px] w-full block text-center font-extrabold text-[30px]'>
            Đăng nhập
          </h1>
          <form action='' className='h-full w-[400px] flex flex-col ml-[30px]'>
            <input
              type='tel'
              placeholder='   Tel: +84 '
              className='border border-e-green-400 h-[40px] w-full inline-block rounded-3xl mt-[20px] '
            />
            <input
              type='tel'
              placeholder='   Nhập mật khẩu:'
              className='border border-e-green-400 h-[40px] w-full block rounded-3xl mt-[20px]'
            />
            <button
              type='button'
              className='border rounded-lg mt-[20px] mx-auto p-2 w-auto text-center'
              onClick={handleLogin}>
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
