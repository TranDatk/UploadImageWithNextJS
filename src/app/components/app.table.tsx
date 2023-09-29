'use client'

import { useState } from "react";
import CreateModal from "./create.modal";
import Image from "next/image";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

interface IProps {
  blogs: IBlogs[]
}

const AppTable = (props: IProps) => {
  const { blogs } = props;
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false)

  console.log(">>> check ", blogs)
  return (
    <>
      <div className='flex justify-between m-8'>
        <div className='flex justify-between items-center'>
        <h1 className='font-bold text-4xl mb-0'>Danh sách</h1>
        <Image
          id=''
          src='/images/Image.gif'
          width={80}
          height={80}
          alt='Picture of the author'
        />
        </div>
       
        <button onClick={() => setShowModalCreate(true)} className=" bg-green-600 m-3 hover:bg-green-700 text-white font-bold py-2 px-4 border-b-4 border-orange-300 hover:border-orange-400 rounded">
          Add
        </button>
      </div>
      <div className="flex flex-col w-11/12 mx-auto">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block py-2 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="text-center text-sm font-light">
                <thead
                  className="border-b bg-orange-500 p-6 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                  <tr>
                    <th scope="col" className=" px-6 py-4">STT</th>
                    <th scope="col" className=" px-6 py-4 w-2/6">Content</th>
                    <th scope="col" className=" px-6 py-4">Author</th>
                    <th scope="col" className=" px-6 py-4 w-1/12">Title</th>
                    <th scope="col" className=" px-6 py-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs?.map(blog => {
                    return (
                      <tr key={blog.id} className="border-b dark:border-neutral-500">
                        <td className="px-6 py-4 font-medium w-1/10">{blog.id}</td>
                        <td className=" px-6 py-4 w-2/6">
                          {blog.content}
                        </td>
                        <td className="px-6 py-4 w-1/10">{blog.author}</td>
                        <td className="px-6 py-4 w-1/10">{blog.title}</td>
                        <td className="mx-6 py-4 ">
                          <button className="mx-3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                            View
                          </button>
                          <button className="mr-3 bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-4 border-b-4 border-amber-200 hover:border-amber-300 rounded">
                            Edit
                          </button>
                          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 border-b-4 border-pink-500 hover:border-pink-600 rounded">
                            Delete
                          </button>
                        </td>
                      </tr>
                    )
                  })}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <CreateModal
        showModalCreate={showModalCreate}
        setModalCreate={setShowModalCreate}
      />
    </>

  );
}

export default AppTable;