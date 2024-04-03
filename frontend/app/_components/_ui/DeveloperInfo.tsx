import React from 'react'
import DecoratedWord from './DecoratedWord';
import { developerContact } from '../../_lib/data';
import Button from './Button';
import Link from 'next/link';

function DeveloperInfo() {
    return (
      <>
      <h3 className="text-xl text-white pb-3">
        نبذة عن <DecoratedWord textColor="yellow-300">المطور</DecoratedWord>
      </h3>
      <div className="flex flex-col text-white text-lg gap-2">
        <span>اسامة دوادي</span>
        <span>Full-stack Developer</span>
        <h3 className="text-xl text-white pb-3">
          حسابات <DecoratedWord textColor="yellow-300">المطور</DecoratedWord>
        </h3>
        <div className="flex items-center gap-3 mb-3">
          {developerContact.map((item, index) => (
            <Link href={item.href} key={index}>
              <item.icon
                className={`bg-[${item.color}] text-[2.2rem] rounded-full`}
              />
            </Link>
          ))}
        </div>
        <div>
          <Button bgColor="yellow-300" textColor="black">
            تواصل مع المطور
          </Button>
        </div>
      </div>
    </>
  );
}

export default DeveloperInfo
