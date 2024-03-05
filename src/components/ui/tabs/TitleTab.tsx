import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

interface Props {
  title: string;
  urlRedirect?: string;
}

const TitleTab = ({title, urlRedirect}: Props) => {
  return (
    <div className="flex items-center justify-between xl:px-20 px-5 pb-5 ">
      <div className="flex items-center justify-between border-b-2 border-gray-300 w-full">
        <span className="border-b-4 rounded-l-sm rounded-r-sm border-blue-500 text-lg text-gray-800">
          {title}
        </span>
        <Link href={urlRedirect ?? ""} className='flex items-center gap-2'>
          Ver Todos <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
}

export default TitleTab;
