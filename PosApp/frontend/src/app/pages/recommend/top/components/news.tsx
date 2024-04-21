import React from "react";

const News = () => {
  return (
    <>
    {/* ニュース */}
    <div className="bg-gray-100 py-10 ">
        <h1 className="text-center text-xl text-[#D54B7D] font-bold mb-5 ">ニュース</h1>
        <div className="flex justify-center">
          <div className="bg-white flex justify-center w-2/3">
            <div className="flex flex-col my-10  text-xs text-gray-500">
              <ul>
                <li className="border-b-2">
                    <div className=" flex justify-start space-x-4">
                      <div>2024/4/1</div> <div>Tech0 Step4 最終発表</div>
                    </div>
                </li>
                <li className="border-b-2 mt-5">
                    <div className=" flex justify-start space-x-4">
                      <div>2024/3/1</div> <div>7期生の募集について</div>
                    </div>
                </li>
                <li className="border-b-2 mt-5">
                    <div className=" flex justify-start space-x-4">
                      <div>2024/1/1</div> <div>Tech0 Step3 最終発表</div>
                    </div>
                </li>
                <li className="border-b-2 mt-5">
                    <div className=" flex justify-start space-x-4">
                      <div>2023/12/1</div> <div>オフラインイベントのお知らせ</div>
                    </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;