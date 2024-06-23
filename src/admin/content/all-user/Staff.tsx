import React from 'react'
import Dropdown from "../../components/dropdown";
import InputText from "../../components/input-text";

type Props = {}

const Staff = (props: Props) => {
  const items = [
    {
      key: 1,
      label: 'Item 1'
    },
    {
      key: 2,
      label: 'Item 2'
    }
  ];

  const handleSelect = (item) => {
    console.log(`Selected: ${item}`);
  };

  return (
    <div className="py-5 px-7">
      <div className="flex justify-between">
        <div className="text-3xl font-bold">
          Staffs
        </div>
      </div>

      <div className="bg-white rounded-xl mt-5">
        <div className="px-10 pt-6 flex gap-2">
          <div className="w-1/4">
            <InputText
              id="name"
              name="name"
              placeholder="Enter the user's name"
              label="Name"
              value=''
              onchange={() => { }}
            />
          </div>
          <div className="w-1/3">
            <InputText
              id="email"
              name="email"
              placeholder="Enter the user's email"
              label="Email"
              value=''
              onchange={() => { }}
            />
          </div>
          <div className="w-1/5">
            <InputText
              id="phone"
              name="phone"
              placeholder="Enter the user's phone number"
              label="Phone number"
              value=''
              onchange={() => { }}
            />
          </div>
          <div className="">
            <div className="font-semibold mb-2">Role</div>
            <Dropdown
              placeholder="Select role"
              items={items}
              onSelect={handleSelect}
            />
          </div>
          <div className=""></div>
        </div>
        <div className="divide-y-2 font-medium">
          <div className="px-10 py-3 flex items-center gap-2 ">
            <div className="w-1/4 pl-10 truncate">
              Huỳnh Đoàn Thanh Phong
            </div>
            <div className="w-1/3 pl-14 truncate">
              huynhdoanthanhphong@gmail.com
            </div>
            <div className="w-1/5 flex justify-center">
              0987654321
            </div>
            <div className="flex justify-center items-center flex-1 ">
              <div className="pl-9 font-semibold">
                Customer
              </div>
            </div>
            <div className="flex flex-1 items-center justify-end gap-3">
              <div className="p-1.5 rounded-full hover:bg-emerald-900 hover:text-white cursor-pointer ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
              </div>
              <div className="p-1.5 rounded-full hover:bg-red-600 hover:text-white cursor-pointer ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
              </div>
            </div>
          </div>

          <div className="px-10 py-3 flex items-center gap-2 ">
            <div className="w-1/4 pl-10 truncate">
              Huỳnh Đoàn Thanh Phong
            </div>
            <div className="w-1/3 pl-14 truncate">
              huynhdoanthanhphong@gmail.com
            </div>
            <div className="w-1/5 flex justify-center">
              0987654321
            </div>
            <div className="flex justify-center items-center flex-1 ">
              <div className="pl-9 font-semibold">
                Customer
              </div>
            </div>
            <div className="flex flex-1 items-center justify-end gap-3">
              <div className="p-1.5 rounded-full hover:bg-emerald-900 hover:text-white cursor-pointer ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
              </div>
              <div className="p-1.5 rounded-full hover:bg-red-600 hover:text-white cursor-pointer ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
              </div>
            </div>
          </div>

          <div className="px-10 py-3 flex items-center gap-2 ">
            <div className="w-1/4 pl-10 truncate">
              Huỳnh Đoàn Thanh Phong
            </div>
            <div className="w-1/3 pl-14 truncate">
              huynhdoanthanhphong@gmail.com
            </div>
            <div className="w-1/5 flex justify-center">
              0987654321
            </div>
            <div className="flex justify-center items-center flex-1 ">
              <div className="pl-9 font-semibold">
                Customer
              </div>
            </div>
            <div className="flex flex-1 items-center justify-end gap-3">
              <div className="p-1.5 rounded-full hover:bg-emerald-900 hover:text-white cursor-pointer ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
              </div>
              <div className="p-1.5 rounded-full hover:bg-red-600 hover:text-white cursor-pointer ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
              </div>
            </div>
          </div>

          <div className="px-10 py-3 flex items-center gap-2 ">
            <div className="w-1/4 pl-10 truncate">
              Huỳnh Đoàn Thanh Phong
            </div>
            <div className="w-1/3 pl-14 truncate">
              huynhdoanthanhphong@gmail.com
            </div>
            <div className="w-1/5 flex justify-center">
              0987654321
            </div>
            <div className="flex justify-center items-center flex-1 ">
              <div className="pl-9 font-semibold">
                Customer
              </div>
            </div>
            <div className="flex flex-1 items-center justify-end gap-3">
              <div className="p-1.5 rounded-full hover:bg-emerald-900 hover:text-white cursor-pointer ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
              </div>
              <div className="p-1.5 rounded-full hover:bg-red-600 hover:text-white cursor-pointer ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
              </div>
            </div>
          </div>

          <div className="px-10 py-3 flex items-center gap-2 ">
            <div className="w-1/4 pl-10 truncate">
              Huỳnh Đoàn Thanh Phong
            </div>
            <div className="w-1/3 pl-14 truncate">
              huynhdoanthanhphong@gmail.com
            </div>
            <div className="w-1/5 flex justify-center">
              0987654321
            </div>
            <div className="flex justify-center items-center flex-1 ">
              <div className="pl-9 font-semibold">
                Customer
              </div>
            </div>
            <div className="flex flex-1 items-center justify-end gap-3">
              <div className="p-1.5 rounded-full hover:bg-emerald-900 hover:text-white cursor-pointer ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
              </div>
              <div className="p-1.5 rounded-full hover:bg-red-600 hover:text-white cursor-pointer ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
              </div>
            </div>
          </div>

          <div className="px-10 py-3 flex items-center gap-2 ">
            <div className="w-1/4 pl-10 truncate">
              Huỳnh Đoàn Thanh Phong
            </div>
            <div className="w-1/3 pl-14 truncate">
              huynhdoanthanhphong@gmail.com
            </div>
            <div className="w-1/5 flex justify-center">
              0987654321
            </div>
            <div className="flex justify-center items-center flex-1 ">
              <div className="pl-9 font-semibold">
                Customer
              </div>
            </div>
            <div className="flex flex-1 items-center justify-end gap-3">
              <div className="p-1.5 rounded-full hover:bg-emerald-900 hover:text-white cursor-pointer ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
              </div>
              <div className="p-1.5 rounded-full hover:bg-red-600 hover:text-white cursor-pointer ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
              </div>
            </div>
          </div>

          <div className="px-10 py-3 flex items-center gap-2 ">
            <div className="w-1/4 pl-10 truncate">
              Huỳnh Đoàn Thanh Phong
            </div>
            <div className="w-1/3 pl-14 truncate">
              huynhdoanthanhphong@gmail.com
            </div>
            <div className="w-1/5 flex justify-center">
              0987654321
            </div>
            <div className="flex justify-center items-center flex-1 ">
              <div className="pl-9 font-semibold">
                Customer
              </div>
            </div>
            <div className="flex flex-1 items-center justify-end gap-3">
              <div className="p-1.5 rounded-full hover:bg-emerald-900 hover:text-white cursor-pointer ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
              </div>
              <div className="p-1.5 rounded-full hover:bg-red-600 hover:text-white cursor-pointer ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
              </div>
            </div>
          </div>

          <div className="px-10 py-3 flex items-center gap-2 ">
            <div className="w-1/4 pl-10 truncate">
              Huỳnh Đoàn Thanh Phong
            </div>
            <div className="w-1/3 pl-14 truncate">
              huynhdoanthanhphong@gmail.com
            </div>
            <div className="w-1/5 flex justify-center">
              0987654321
            </div>
            <div className="flex justify-center items-center flex-1 ">
              <div className="pl-9 font-semibold">
                Customer
              </div>
            </div>
            <div className="flex flex-1 items-center justify-end gap-3">
              <div className="p-1.5 rounded-full hover:bg-emerald-900 hover:text-white cursor-pointer ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
              </div>
              <div className="p-1.5 rounded-full hover:bg-red-600 hover:text-white cursor-pointer ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
              </div>
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Staff
