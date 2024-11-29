import React from "react";

const Loading = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <hr className="line h-[9px] rounded-lg border-none bg-gradient-to-r from-[#9ed7ff] via-[#4b90ff] to-[#9ed7ff] animate-loader" />
      <hr className="line h-[9px] rounded-lg border-none bg-gradient-to-r from-[#9ed7ff] via-[#4b90ff] to-[#9ed7ff] animate-loader" />
      <hr className="line h-[9px] rounded-lg border-none bg-gradient-to-r from-[#9ed7ff] via-[#4b90ff] to-[#9ed7ff] animate-loader" />
      <hr className="loader-line h-[9px] rounded-lg border-none bg-gradient-to-r from-[#9ed7ff] via-[#4b90ff] to-[#9ed7ff] w-1/2 animate-loader" />
    </div>
  );
};

export default Loading;
