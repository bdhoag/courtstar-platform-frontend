import Dropdown from "../components/Dropdown";
import InputText from "../components/InputText";
// import star from '../assets/images/star.svg';
import Rating from "../components/Rating";

const AllCentre = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  const handleSelect = (item) => {
    console.log(`Selected: ${item}`);
  };

  return (
    <div className="py-5 px-7">
      <div className="flex justify-between">
        <div className="text-3xl font-bold">
          All Centre
        </div>
      </div>

      <div className="bg-white rounded-xl mt-5">
        <div className="px-10 pt-6 flex gap-2">
          <div className="w-1/4">
            <InputText
              id="name"
              name="name"
              placeholder="Enter name of centre"
              label="Name"
            />
          </div>
          <div className="w-1/5">
            <div className="font-semibold mb-2">District</div>
            <Dropdown
              placeholder="Select district"
              items={items}
              onSelect={handleSelect}
            />
          </div>
          <div className="w-1/5 flex gap-2 justify-between">
            <InputText
              id="min"
              name="min"
              placeholder="MIN"
              label="Min Price"
            />

            <span className="pt-10">-</span>

            <InputText
              id="max"
              name="max"
              placeholder="MAX"
              label="Max Price"
            />

          </div>
          <div className="w-1/5">
            <div className="font-semibold mb-2">Feedback</div>
            <Dropdown
              placeholder="Rating star"
              items={items}
              onSelect={handleSelect}
            />
          </div>
          <div className=""></div>
        </div>
        <div className="divide-y-2">
          <div className="px-10 py-3 flex items-center gap-2 font-medium">
            <div className="w-1/4 pl-2 truncate">
              Sân cầu lông Đại học FPT Hồ Chí Minh
            </div>
            <div className="w-1/5 pl-14 truncate">
              Thu Duc City
            </div>
            <div className="w-1/5 flex justify-center">
              100.000₫/h
            </div>
            <div className="flex justify-center items-center flex-1 pl-8">
              <Rating
                ratingWrapper='flex gap-1'
                value={5}
                editable={false}
              />
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

          <div className="px-10 py-3 flex items-center gap-2 font-medium">
            <div className="w-1/4 pl-2 truncate">
              Sân cầu lông Đại học FPT Hồ Chí Minh
            </div>
            <div className="w-1/5 pl-14 truncate">
              Thu Duc City
            </div>
            <div className="w-1/5 flex justify-center">
              100.000₫/h
            </div>
            <div className="flex justify-center items-center flex-1 pl-8">
              <Rating
                ratingWrapper='flex gap-1'
                value={5}
                editable={false}
              />
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

          <div className="px-10 py-3 flex items-center gap-2 font-medium">
            <div className="w-1/4 pl-2 truncate">
              Sân cầu lông Đại học FPT Hồ Chí Minh
            </div>
            <div className="w-1/5 pl-14 truncate">
              Thu Duc City
            </div>
            <div className="w-1/5 flex justify-center">
              100.000₫/h
            </div>
            <div className="flex justify-center items-center flex-1 pl-8">
              <Rating
                ratingWrapper='flex gap-1'
                value={5}
                editable={false}
              />
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

          <div className="px-10 py-3 flex items-center gap-2 font-medium">
            <div className="w-1/4 pl-2 truncate">
              Sân cầu lông Đại học FPT Hồ Chí Minh
            </div>
            <div className="w-1/5 pl-14 truncate">
              Thu Duc City
            </div>
            <div className="w-1/5 flex justify-center">
              100.000₫/h
            </div>
            <div className="flex justify-center items-center flex-1 pl-8">
              <Rating
                ratingWrapper='flex gap-1'
                value={5}
                editable={false}
              />
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

          <div className="px-10 py-3 flex items-center gap-2 font-medium">
            <div className="w-1/4 pl-2 truncate">
              Sân cầu lông Đại học FPT Hồ Chí Minh
            </div>
            <div className="w-1/5 pl-14 truncate">
              Thu Duc City
            </div>
            <div className="w-1/5 flex justify-center">
              100.000₫/h
            </div>
            <div className="flex justify-center items-center flex-1 pl-8">
              <Rating
                ratingWrapper='flex gap-1'
                value={5}
                editable={false}
              />
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

          <div className="px-10 py-3 flex items-center gap-2 font-medium">
            <div className="w-1/4 pl-2 truncate">
              Sân cầu lông Đại học FPT Hồ Chí Minh
            </div>
            <div className="w-1/5 pl-14 truncate">
              Thu Duc City
            </div>
            <div className="w-1/5 flex justify-center">
              100.000₫/h
            </div>
            <div className="flex justify-center items-center flex-1 pl-8">
              <Rating
                ratingWrapper='flex gap-1'
                value={5}
                editable={false}
              />
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

          <div className="px-10 py-3 flex items-center gap-2 font-medium">
            <div className="w-1/4 pl-2 truncate">
              Sân cầu lông Đại học FPT Hồ Chí Minh
            </div>
            <div className="w-1/5 pl-14 truncate">
              Thu Duc City
            </div>
            <div className="w-1/5 flex justify-center">
              100.000₫/h
            </div>
            <div className="flex justify-center items-center flex-1 pl-8">
              <Rating
                ratingWrapper='flex gap-1'
                value={5}
                editable={false}
              />
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

          <div className="px-10 py-3 flex items-center gap-2 font-medium">
            <div className="w-1/4 pl-2 truncate">
              Sân cầu lông Đại học FPT Hồ Chí Minh
            </div>
            <div className="w-1/5 pl-14 truncate">
              Thu Duc City
            </div>
            <div className="w-1/5 flex justify-center">
              100.000₫/h
            </div>
            <div className="flex justify-center items-center flex-1 pl-8">
              <Rating
                ratingWrapper='flex gap-1'
                value={5}
                editable={false}
              />
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

          <div className="px-10 py-3 flex items-center gap-2 font-medium">
            <div className="w-1/4 pl-2 truncate">
              Sân cầu lông Đại học FPT Hồ Chí Minh
            </div>
            <div className="w-1/5 pl-14 truncate">
              Thu Duc City
            </div>
            <div className="w-1/5 flex justify-center">
              100.000₫/h
            </div>
            <div className="flex justify-center items-center flex-1 pl-8">
              <Rating
                ratingWrapper='flex gap-1'
                value={5}
                editable={false}
              />
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

          <div className="px-10 py-3 flex items-center gap-2 font-medium">
            <div className="w-1/4 pl-2 truncate">
              Sân cầu lông Đại học FPT Hồ Chí Minh
            </div>
            <div className="w-1/5 pl-14 truncate">
              Thu Duc City
            </div>
            <div className="w-1/5 flex justify-center">
              100.000₫/h
            </div>
            <div className="flex justify-center items-center flex-1 pl-8">
              <Rating
                ratingWrapper='flex gap-1'
                value={5}
                editable={false}
              />
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
  );
}

export default AllCentre;
