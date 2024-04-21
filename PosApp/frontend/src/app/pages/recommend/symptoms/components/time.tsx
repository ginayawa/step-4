import React,{useState} from "react";

const Time = ()=> {

  // いつから
  const [selectedTime, setSelectedTime] = useState<string>("");
  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>)  => {
      const selected:any = e.target.value;
    setSelectedTime(selected);
  };

  return (

    <>
      <div className="mt-5">
        <div className="flex justify-start items-center">
          <p className="text-gray-500 mr-2 text-xs">いつから</p>
          <div className="bg-[#f993b8] text-white text-2xs w-5 h-3 text-center rounded-sm items-center flex justify-center"><p>必須</p></div>
        </div>
        <select
          id="time"
          className=" focus:ring-indigo-500 focus:border-indigo-500 w-1/3 shadow-sm border rounded-sm text-xs text-gray-500"
          value={selectedTime}
          onChange={handleTimeChange}
        >
        <option value="--</"> --</option>
        <option value="昨日">昨日</option>
        <option value="数日前">数日前</option>
        <option value="１週間前">１週間前</option>
        <option value="数週間前">数週間前</option>
        <option value="1ヶ月前">1ヶ月前</option>
        <option value="それ以上">それ以上</option>
        </select>
      </div>
    </>

  );

};

export default Time