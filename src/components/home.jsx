import React from "react";

const Home = () => {
  return ( <>
    <div className="sectioon-first h-[466px] flex">
      <div className="content bg-[#F2F4F6] w-[50%]">
        <div className="items ml-24 mr-24">
          <p className="text-[#52525B] font-normal mt-20 text-lg">
            A Joint Initiative of ITDA & NTRO
          </p>
          <h1 className="text-5xl text-[#18181B] font-bold mt-6  ">
            DRONE APPLICATION & RESEARCH CENTER
          </h1>
          <p className="text-[#52525B] mt-6">
            Lorem ipsum dolor sit amet consectetur. Ullamcorper eget est dictum
            condimentum malesuada. Euismod diam cursus leo ac.
          </p>
          <div className="logos flex mt-6 gap-4">
            <a href="https://itda.uk.gov.in/"> <img src="itda-logo.svg" alt="itda-logo"/> </a>
            <a href="https://ntro.gov.in/welcome.do"> <img className="-mt-2" src="ntro-logo.svg" alt="ntro-logo" /> </a>
          </div>
        </div>
      </div>
      <div className="image float-right w-[50%]">
        <img
          className="overflow-auto"
          src="team-picture.svg"
          alt="team-picture"
        />
      </div>
    </div>

    {/* <div>
      <img src="section-image.svg" alt="section-image" />
    </div> */}
    
    <div style={{
      backgroundImage: 'url("cm-yogi.png")',
      height: "710px", width: "100%", backgroundRepeat: "no-repeat", backgroundAttachment: "", backgroundPosition: "center", backgroundSize: "cover"
    }}>
      <div className="container w-72 h-80 bg-slate-700 ml-20 pt-24">
     helllo
      </div>
    </div>
    </>
  );
};

export default Home;
