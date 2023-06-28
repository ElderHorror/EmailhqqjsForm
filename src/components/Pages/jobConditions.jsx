import React from "react";
import Form from "../form";

function renderJobCondition({ formData, setFormData }) {
  

  return (
    <div className=" flex flex-col items-center space-y-12 font-['Lato'] font-semibold text-black w-fit">
      <div className="self-center space-y-3 mt-4">
    
        <p className="font-semibold text-3xl sm:text-4xl">Our team is looking for you!</p>
        <div className="flex flex-col items-center leading-7 sm:text-xl text-[#575B60] text-[18px] font-medium">
          <p>Tax clerk</p>
          <p>Tax Specialists</p>
          <p>Accountant</p>
          <p className="text-sm">(m/w/d)</p>
        </div>
      </div>

      <img
        className="rounded-lg w-[400px] h-[300px] sm:w-[500px] sm:h-[350px] md:w-[600px] lg:w-[700px]md:h-[450px]"
        src="https://perspective.imgix.net/63932cfd01e0a2065b8c2d56.jpg"
        alt=""
      />
      <div className="flex flex-col space-y-12">
        <div className="flex flex-col items-center font-light text-[#575B60]">
          <p className="font-semibold">📍 Leightonstraße 2, 97074 Würzburg</p>
          <p>🏡 80% home office and flexibility</p>
          <p>💸 Above-average salary in the region</p>
          <p>👶 Family-friendly law firm</p>
          <p>👥 A great team!</p>
        </div>
        <div className="flex flex-col space-y-6 items-center text-center sm:text-2xl text-xl mb-8">
          <p className="text-[#575B60] font-semibold w-[400px] sm:w-[600px]">
            Determine your desired conditions and qualifications now and receive
            an individual job offer
          </p>
          <p className="font-semibold text-2xl sm:text-3xl w-[560px] leading-8">
            What are the desired conditions for your new employer?
          </p>
          <p className="text-sm font-light sm:text-md">(Please select at least 3 desired conditions)</p>
        </div>
      </div>

      <Form className='' formData={formData} setFormData={setFormData} />
      <div>
        <div className="flex flex-col">
          <p className="self-center p-1 px-2 border-2 border-black bg-[#0078D7] text-white text-xl mb-5">⬇</p>
          <p className="self-center text-2xl sm:text-3xl font-bold mb-10">This is what you can expect from us:</p>
          <div className="flex flex-col md:flex-row items-center md:ml-6 md:space-x-6 md:justify-between justify-center space-y-4 ">
            <div className="h-[400px] space-y-6 text-left">
              <p className="text-md md:text-left">
                <span className="text-3xl mr-6">🏡</span>80% home office and flexible working hours
                possible
              </p>
              <p className="text-md">
                <span className="text-3xl mr-6">💶</span>Above-average salary package
              </p>
              <p className="text-md">
                <span className="text-3xl mr-6">💻</span>Digitized DATEV law firm
              </p>
              <p className="text-md">
                <span className="text-3xl mr-6">🎓</span>Promotion of vocational seminars and further
                training
              </p>
              <p className="text-md">
                <span className="text-3xl mr-6">👶</span>High degree of family-friendliness and
                understanding
              </p>
              <p className="text-md">
                <span className="text-3xl mr-7">💰</span>Wage optimazation, fuel voucher and kindergaten
                subsidy
              </p>
              <p className="text-md">
                <span className="text-3xl mr-6">😍</span>High level of trust in employees
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-md">
                <span className="text-3xl mr-6">🚗</span>Mitarbeiterparkplätze
              </p>

              <p className="text-md">
                <span className="text-3xl mr-6">🚌</span>Good transport connections incl. public transport
              </p>

              <p className="text-md">
                <span className="text-3xl mr-7">🌴</span>30 days of relaxing vacation with flexible
                vacation planning
              </p>

              <p className="text-md">
                <span className="text-3xl mr-6">🤝</span>Teamwork and cohesion
              </p>

              <p className="text-md">
                <span className="text-3xl mr-6">🎉</span>Summer festivals and Christmas parties take place
                regularly
              </p>
              <p className="text-md">
                <span className="text-3xl mr-7">🧁</span>Coffee, tea and snacks are always available
              </p>
              <p className="text-md">
                <span className="text-3xl mr-10 md:mr-8 md:pl-2">📍</span>Central location in Würzburg
              </p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="flex flex-col items-center">
        <p className="self-center px-2 border-2 border-black bg-[#0078D7] text-white text-xl mb-6">⬇</p>
        <p className="text-center text-xl pb-5">Götz & Partner mbB <br/> at a glance</p>
        <p className="text-[#575B60] pb-6 font-medium text-center w-[440px] sm:w-[640px] md:w-[700px]">
          The aim of our advisory approach is to provide each of our clients
          with tax and legal support tailored to their individual needs.
          Interdisciplinary advice from a single source guarantees that all
          legal and tax aspects are taken into account equally.
        </p>
        <p className="text-2xl w-[400px] sm:text-3xl sm:w-[450px] text-center">We look forward to receiving your application!</p>
        <p className="font-normal">Your team of</p>
        <p> Götz & Partner mbB</p>
      </div>
      <div className="text-left flex flex-col items-start w-[430px] sm:w-[580px] md:w-[700px] text-[#575B60]">
        <p className="">Götz & Partner mbB</p>
        <p className="font-normal"><span className="font-bold">Address:</span> Leightonstraße 2, 97074 Würzburg</p>
        <p className="font-normal"><span className="font-bold">Tel:</span> +49 931 355520 </p>
        <p className="font-normal"><span className="font-bold">Mail:</span> kanzlei@goetz-partner.de</p>
      </div>
    </div>
  );
}

export default renderJobCondition;
