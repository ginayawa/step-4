import React from "react";

const Name = ()=> {
  return (
    <>
     <div className="mt-5">
        <div className="flex justify-start items-center">
          <p className="text-gray-500 mr-2">ニックネーム</p>
          <div className="bg-[#f993b8] text-white text-2xs w-5 h-3 text-center rounded-sm items-center flex justify-center"><p>必須</p></div>
        </div>
        <form action="" className="ml-5">
          <input type="text" id="name"  className="border text-xs w-1/2 rounded-sm" placeholder="にんじゃわんこ"/>
        </form>
      </div>
    </>
  );
};

export default Name