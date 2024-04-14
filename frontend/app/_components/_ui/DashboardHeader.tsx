import { Bell, LogOut, Mail } from 'lucide-react';
import React from 'react'

function DashboardHeader() {
  return (
    <div className="w-full h-[4.5rem] bg-gray-100 shadow-md px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <LogOut />
        <h1 className="font-semibold text-gray-900">Cerrar sesión</h1>
      </div>
     <div>لوحة تحكم موقع غيث</div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-5">
          <div className="relative">
            <Mail size={26} />
            <span className="message-notification"></span>
          </div>
          <div className="relative">
            <Bell size={26} />
            <span className="general-notification"></span>
          </div>
        </div>
        <div className="w-[3.5rem] h-[3.5rem] rounded-full relative overflow-hidden">
         img
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader
