import React from 'react';
import centre from '../assets/images/demo-centre.png';
import star from '../assets/images/star.svg';

const CentreInfo = () => {
  return (
    <div className="py-12 pr-12">
      <div className="flex justify-between">
        <div className="text-3xl font-bold">
          Centre Information
        </div>

        <div className="flex gap-2.5 px-3 py-1.5 bg-primary-green w-fit rounded-3xl text-white hover:bg-teal-900 ease-in-out duration-300 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus">
            <path d="M5 12h14" /><path d="M12 5v14" />
          </svg>

          <div className="font-semibold">
            Add Centre
          </div>
        </div>
      </div>

      <div className="bg-white px-9 py-7 rounded-xl mt-4">
        <div className="flex gap-11">
          <div className="w-1/2">
            <div>
              <img src={centre}
                alt="demo centre"
                className='w-full'
              />
            </div>
            <div className='flex gap-2 mt-2 py-1.5 px-2.5 border rounded-md bg-white overflow-hidden'>
              <img src={centre}
                alt="demo centre"
                className='w-28 rounded-lg'
              />
              <img src={centre}
                alt="demo centre"
                className='w-28 rounded-lg'
              />
              <img src={centre}
                alt="demo centre"
                className='w-28 rounded-lg'
              />
              <img src={centre}
                alt="demo centre"
                className='w-28 rounded-lg'
              />
              <img src={centre}
                alt="demo centre"
                className='w-28 rounded-lg'
              />

            </div>
          </div>
          <div className='flex justify-center flex-col gap-3 bg-white w-1/2'>
            <div className='font-semibold'>
              Sân cầu lông Đại học FPT Hồ Chí Minh
            </div>
            <div className='flex gap-1'>
              <img src={star} alt="Star" className='cursor-pointer w-5' />
              <img src={star} alt="Star" className='cursor-pointer w-5' />
              <img src={star} alt="Star" className='cursor-pointer w-5' />
              <img src={star} alt="Star" className='cursor-pointer w-5' />
              <img src={star} alt="Star" className='cursor-pointer w-5' />
            </div>
            <div>
              <span className='font-semibold'>Address: </span>
              Lô E2a-7, Đường D1, Khu Công nghệ cao, P.Long Thạnh Mỹ, Tp. Thủ Đức, TP.HCM.
            </div>
            <div className='flex gap-3'>
              <div>
                <span className='font-semibold'>Open time: </span>
                10h-22h
              </div>
              <div>
                <span className='font-semibold'>Number of courts: </span>
                8
              </div>
            </div>
            <div>
              <span className='font-semibold'>Price: </span>
              <span className='font-semibold text-rose-600'>100.000₫/h</span>
            </div>
            <div className="font-semibold flex gap-6">
              <div className="flex justify-center gap-2.5 text-white bg-primary-green w-1/2 py-2 rounded-md hover:bg-teal-900 ease-in-out duration-300 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                <div className="">
                  Edit
                </div>
              </div>
              <div className="flex justify-center gap-2.5 text-red-600 border-2 border-red-600 w-1/2 py-2 rounded-md hover:bg-red-600 hover:text-white ease-in-out duration-300 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
                <div className="">
                  Delete
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-9">
          <div className="font-bold text-lg">
            FEEDBACKS
          </div>
          <div className="mt-3 h-96 overflow-y-scroll border-2 rounded-xl divide-y">
            <div className="px-4 py-4 flex flex-col gap-2">
              <div className="flex gap-7">
                <div className=" font-semibold">
                  Huỳnh Đoàn Thanh Phong
                </div>
                <div className='flex gap-1'>
                  <img src={star} alt="Star" className='cursor-pointer w-5' />
                  <img src={star} alt="Star" className='cursor-pointer w-5' />
                  <img src={star} alt="Star" className='cursor-pointer w-5' />
                  <img src={star} alt="Star" className='cursor-pointer w-5' />
                  <img src={star} alt="Star" className='cursor-pointer w-5' />
                </div>
              </div>
              <div className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id diam eget nisl suscipit elementum ac vel justo. Etiam congue varius sem sit amet vehicula. Nunc non porta orci. Nullam bibendum convallis nunc, eget eleifend quam vehicula id. Praesent tempor urna a iaculis tincidunt. Fusce fermentum nunc et nulla malesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo. 
              </div>
              <div className="w-full bg-slate-500"></div>
            </div>
            <div className="px-4 py-4 flex flex-col gap-2">
              <div className="flex gap-7">
                <div className=" font-semibold">
                  Huỳnh Đoàn Thanh Phong
                </div>
                <div className='flex gap-1'>
                  <img src={star} alt="Star" className='cursor-pointer w-5' />
                  <img src={star} alt="Star" className='cursor-pointer w-5' />
                  <img src={star} alt="Star" className='cursor-pointer w-5' />
                  <img src={star} alt="Star" className='cursor-pointer w-5' />
                  <img src={star} alt="Star" className='cursor-pointer w-5' />
                </div>
              </div>
              <div className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id diam eget nisl suscipit elementum ac vel justo. Etiam congue varius sem sit amet vehicula. Nunc non porta orci. Nullam bibendum convallis nunc, eget eleifend quam vehicula id. Praesent tempor urna a iaculis tincidunt. Fusce fermentum nunc et nulla malesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.
              </div>
              <div className=" bg-slate-500"></div>
            </div>
            <div className="px-4 py-4 flex flex-col gap-2">
              <div className="flex gap-7">
                <div className=" font-semibold">
                  Huỳnh Đoàn Thanh Phong
                </div>
                <div className='flex gap-1'>
                  <img src={star} alt="Star" className='cursor-pointer w-5' />
                  <img src={star} alt="Star" className='cursor-pointer w-5' />
                  <img src={star} alt="Star" className='cursor-pointer w-5' />
                  <img src={star} alt="Star" className='cursor-pointer w-5' />
                  <img src={star} alt="Star" className='cursor-pointer w-5' />
                </div>
              </div>
              <div className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id diam eget nisl suscipit elementum ac vel justo. Etiam congue varius sem sit amet vehicula. Nunc non porta orci. Nullam bibendum convallis nunc, eget eleifend quam vehicula id. Praesent tempor urna a iaculis tincidunt. Fusce fermentum nunc et nulla malesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.
              </div>
              <div className=" bg-slate-500"></div>
            </div>
            <div className="px-4 py-4 flex flex-col gap-2">
              <div className="flex gap-7">
                <div className=" font-semibold">
                  Huỳnh Đoàn Thanh Phong
                </div>
                <div className='flex gap-1'>
                  <img src={star} alt="Star" className='cursor-pointer w-5' />
                  <img src={star} alt="Star" className='cursor-pointer w-5' />
                  <img src={star} alt="Star" className='cursor-pointer w-5' />
                  <img src={star} alt="Star" className='cursor-pointer w-5' />
                  <img src={star} alt="Star" className='cursor-pointer w-5' />
                </div>
              </div>
              <div className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id diam eget nisl suscipit elementum ac vel justo. Etiam congue varius sem sit amet vehicula. Nunc non porta orci. Nullam bibendum convallis nunc, eget eleifend quam vehicula id. Praesent tempor urna a iaculis tincidunt. Fusce fermentum nunc et nulla malesuada consequat. In ac sem ornare, consectetur neque ut, commodo sapien. Donec ut turpis nec erat tempor porttitor id id est. Morbi est erat, dignissim vel hendrerit non, scelerisque sit amet leo.
              </div>
              <div className=" bg-slate-500"></div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default CentreInfo;
