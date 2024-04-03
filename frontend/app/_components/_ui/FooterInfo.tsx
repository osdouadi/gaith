import React from 'react'
import Logo from './Logo';
import Description from './Description';
import Slogan from './Slogan';
import { contactInfo } from '../../_lib/data';


function FooterInfo() {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-2 text-white">
        <Logo textColor="text-white" type="logo" />
        <Description />
        <Slogan fontSize="text-xl" />
      </div>
      <div className="flex flex-col text-white gap-4 mt-3">
        {contactInfo.map((item, index) => (
          <div className="flex items-center gap-2" key={index}>
            <span className="flex items-center gap-2">
              <item.icon />
              {item.title}
            </span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FooterInfo
