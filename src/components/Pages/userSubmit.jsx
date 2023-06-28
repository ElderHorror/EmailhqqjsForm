import React from "react";


function UserSubmit() {
  return (
    <div className="font-['lato'] text-black xs:max-[700px]:w-screen flex flex-col items-center">
      <p className="text-2xl xs:max-sm:w-[300px] sm:text-3xl font-semibold mb-8 text-center ">
        We have received your application! ✅
      </p>
      <p className="mb-8">We look forward to getting to know you!</p>
      <div className="flex flex-col items-center w-[300px] sm:w-[580px] lg:w-[1000px]">
        <img
          className="sm:w-[480px] sm:h-[280px] md:w-[600px] md:h-[340px] md:h-[280px] h-[220px] rounded-md mb-8"
          src="https://perspective.imgix.net/6393336aeb03e806e07f7baf.jpg"
          alt=""
        />
        <p className="text-center text-[#575B60]">
          We will contact you as soon as possible! Please make sure that you can
          be reached at your specified time
        </p>
      </div>

<div className="py-8 w-[40px]">
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {" "}
        <path d="M21,11.109L21,11.109c0-1.329-1.481-2.122-2.587-1.385L12,14L5.587,9.725C4.481,8.988,3,9.78,3,11.109v0 c0,0.556,0.278,1.076,0.741,1.385l7.15,4.766c0.672,0.448,1.547,0.448,2.219,0l7.15-4.766C20.722,12.185,21,11.666,21,11.109z"></path>
      </svg>

</div>
  
     
     <p className="text-center text-2xl font-semibold mb-8">Here's what happens next:</p>
      <div className="flex flex-col  md:items-start md:flex-row   w-[300px] md:w-[700px] lg:w-[800px] sm:w-[500px]">
        
        <div className="flex flex-col justify-center items-start w-[600px]">
      
        <div className="flex flex-col items-start space-y-6 text-[#575B60] mb-10 w-[400px]">
          <div className="flex flex-row space-x-4 w-[320px] sm:max-md:w-[500px] md:max-xl:w-[400px]">
            <p className="text-3xl">📃</p>
            <div className="flex flex-col w-[300px] sm:max-md:w-[500px] md:max-xl:w-[300px]">
              <p className="font-semibold">We will review your application</p>
              <p className="">
                We will look at your application and see if we are a good fit
              </p>
            </div>
          </div>
          <div className=" flex flex-row space-x-3 w-[340px] sm:max-md:w-[500px] md:max-xl:w-[400px]">
            <p className="text-3xl">☎️</p>
            <div className="flex flex-col">
              <p className="font-semibold">Introductory Meeting</p>
              <p>
                We will call you and get to know each other in a short phone
                call
              </p>
            </div>
          </div>
        </div>
       
      
      </div>
         <div className="space-x-2 flex flex-row mb-8 md:space-x-3 text-[#575B60]">
            <p className="text-3xl ">✅</p>
            <div className="flex flex-col ">
              <p className="font-semibold">Individual Job Offer</p>
              <p>
                If your and our expectations match, we will talk about your
                individual career start at Gotz & Partner mbB in a personal
                conversation
              </p>
            </div>
          </div>
        
        </div>
      
           <button className="w-full xs:max-sm:w-[300px] sm:w-[400px] h-[50px] rounded-md bg-[#222F65] text-white text-bold text-xl">
          To Our Career Section
        </button>
        <p className="my-6 underline text-center text-[#222F65]">Recruiting by OD Solutions GmbH</p>
    </div>
  );
}

export default UserSubmit;
