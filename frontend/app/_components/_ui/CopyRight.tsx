import React from "react";

function CopyRight() {
    const year = new Date().getFullYear();
    
  return (
    <div className="copy-right text-center mt-16 pt-1 relative">
      <span className="text-white">
        جميع الحقوق محفوظة لدى نادي غيث &copy; {year}
      </span>
    </div>
  );
}

export default CopyRight;
