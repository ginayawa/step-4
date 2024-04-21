import React,{useState} from "react";

const Size = ()=> {

  // size
  const [selectedSize, setSelectedSize] = useState<string>("");
  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>)  => {
      const selected:any = e.target.value;
    setSelectedSize(selected);
  };

  return (

    <>
      <div className="mt-5">
        <div className="flex justify-start items-center">
          <p className="text-gray-500 mr-2 text-xs">膨れている大きさ</p>
          <div className="bg-[#f993b8] text-white text-2xs w-5 h-3 text-center rounded-sm items-center flex justify-center"><p>必須</p></div>
        </div>
        <select
          id="size"
          className=" focus:ring-indigo-500 focus:border-indigo-500 w-1/3 shadow-sm border rounded-sm text-xs text-gray-500"
          value={selectedSize}
          onChange={handleSizeChange}
        >
          <option value="--</"> --</option>
          <option value="膨れていない">膨れていない</option>
          <option value="5mm">5mm</option>
          <option value="1cm">1cm</option>
          <option value="3cm以上">3cm以上</option>
        </select>
      </div>
    </>

  );

};

export default Size