import { Fragment, use, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ArrowUpOnSquareIcon } from '@heroicons/react/24/outline'
import { toast } from 'react-toastify';


interface Iprops {
    showModalCreate: boolean;
    setModalCreate: (v: boolean) => void;
}

export default function CreateModal(props: Iprops) {

    const { showModalCreate, setModalCreate } = props;

    const [title, setTitle] = useState<string>("");

    const [author, setAuthor] = useState<string>("");

    const [content, setContent] = useState<string>("");

    const handleSubmit = () => {
        if(!title) {
            toast.error("Empty title");
            return;
        }
        if(!author) {
            toast.error("Empty author");
            return;
        }
        if(!content) {
            toast.error("Empty content");
            return;
        }
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, author, content })
        }).then(res => res.json())
            .then(res => {
                if(res){
                    toast.success("Create succeed");
                    handleCloseModal();
                }else{
                    toast.error("Create error");
                }
            });

        // toast.success("Create succeed");
        // console.log("check data: ", title, author, content);
    }

    const handleCloseModal = () => {
        setTitle("");
        setContent("");
        setAuthor("");
        setModalCreate(false);
    }

    return (
        <Transition.Root show={showModalCreate} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => handleCloseModal()}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:justify-between w-full">
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <ArrowUpOnSquareIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                                        </div>
                                        <div className="mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                Tạo mới một Blog
                                            </Dialog.Title>
                                            <form className='w-full'>
                                                <div className="space-y-3">
                                                    <div className="border-b border-gray-900/10 pb-12">
                                                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6" >
                                                            <div className="sm:col-span-full">
                                                                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                                                                    Title
                                                                </label>
                                                                <div className="mt-2">
                                                                    <div className="flex rounded-md shadow-sm border sm:max-w-md">
                                                                        <input
                                                                            value={title}
                                                                            onChange={(e) => setTitle(e.target.value)}
                                                                            type="text"
                                                                            name="title"
                                                                            id="title"
                                                                            autoComplete="title"
                                                                            className="block w-full flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 border focus:border-green-500 sm:text-sm sm:leading-6"
                                                                            placeholder="Title"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="sm:col-span-full">
                                                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                                                    Author
                                                                </label>
                                                                <div className="mt-2">
                                                                    <div className="flex rounded-md shadow-sm border sm:max-w-md">
                                                                        <input
                                                                            value={author}
                                                                            onChange={(e) => setAuthor(e.target.value)}
                                                                            type="text"
                                                                            name="author"
                                                                            id="username"
                                                                            autoComplete="username"
                                                                            className="block w-full flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 border focus:border-green-500 sm:text-sm sm:leading-6"
                                                                            placeholder="Jonh Wick"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="sm:col-span-full">
                                                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                                                    Content
                                                                </label>
                                                                <div className="mt-2">
                                                                    <div className="mb-6">
                                                                        <input value={content}
                                                                            onChange={(e) => setContent(e.target.value)} type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-800 sm:ml-3 sm:w-auto"
                                        onClick={() => handleSubmit()}
                                    >
                                        Save
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => handleCloseModal()}

                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}