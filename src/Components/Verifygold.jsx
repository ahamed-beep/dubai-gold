import React from 'react';


const Verifygold = () => {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-2xl ">
        <h1 className="text-4xl   mt-10 font-bold text-foreground mb-15 text-start md:ml-25">
          Verify Your <span className=' text-[#F0B100]' >Gold</span>
        </h1>
        <div className="space-y-6 md:ml-25 w-full md:w-250">
          <div className="space-y-2">
            <label
              htmlFor="item-code" 
              className="text-sm font-medium text-muted-foreground"
            >
              Item code
            </label>
            <input
              id="item-code"
              type="text"
              className="md:w-250.
                border-gray-300  w-full h-9 px-3 border border-input  rounded-md focus:outline-none focus:ring-0 focus:ring-ring focus:border-yellow-300"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="item-serial" 
              className="text-sm font-medium text-muted-foreground"
            >
              Item serial number
            </label>
            <input
              id="item-serial"
              type="text"
              className="md:w-250.
                border-gray-300  w-full h-9 px-3 border border-input  rounded-md focus:outline-none focus:ring-0 focus:ring-ring focus:border-yellow-300"
            />
          </div>
          <hr className="border-t-1 border-gray-300" />
          <div className="pt-4">
            <button className="bg-yellow-300  text-gray-600  text-sm px-5 py-2 rounded-md transition-colors duration-200">
              VIEW CERTIFICATE
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Verifygold;