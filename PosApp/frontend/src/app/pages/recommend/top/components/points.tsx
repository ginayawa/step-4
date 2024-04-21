import React from "react";

const Points = ()=> {
  return(
    <>
      <div className="bg-gray-100">
          <div className=" flex justify-center mx-20 ">
            <div>
              <h2 className="text-xl font-bold text-[#D54B7D] mt-10 mb-10 text-center">3つのポイント</h2>
              <div className=" my-10  flex justify-between">
                <div className="w-1/4  transition-transform duration-300 hover:scale-110">
                  <div className="flex justify-center">
                    <div className="text-[#D54B7D] border-4 border-[#D54B7D] rounded-full w-24 h-24 flex items-center justify-center mb-5 shadow-lg">
                      <div className="text-center text-lg">
                        <p>Point1</p>
                        <p className="font-bold ">提案</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-gray-700 text-xs">
                    <p>10000種類のお薬の中から、あなたの症状と要望に一番近いお薬を提案</p>
                  </div>
                </div>
                <div className="w-1/4  transition-transform duration-300 hover:scale-110">
                  <div className="flex justify-center">
                    <div className="text-[#D54B7D] border-4 border-[#D54B7D] rounded-full w-24 h-24 flex items-center justify-center mb-5 shadow-lg text-lg">
                      <div className="text-center  ">
                        <p>Point2</p>
                        <p className="font-bold ">公平</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-gray-700 text-xs">
                    <p>薬剤師の観点で、公平にお薬を選びます</p>
                  </div>
                </div>
                <div className="w-1/4  transition-transform duration-300 hover:scale-110">
                  <div className="flex justify-center">
                    <div className="text-[#D54B7D] border-4 border-[#D54B7D] rounded-full w-24 h-24 flex items-center justify-center mb-5 shadow-lg">
                      <div className="text-center text-lg">
                        <p>Point3</p>
                        <p className="font-bold ">無料</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-gray-700 text-xs">
                    <p>お薬の提案までは無料です</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
    </>
  );
};

export default Points;