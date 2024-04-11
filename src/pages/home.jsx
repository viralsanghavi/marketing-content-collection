import React from "react";
import {useNavigate} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-auto w-screen rounded-md bg-[#021219] relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-screen-2xl mx-auto p-4 z-[100000]">
        <div className="my-20 md:my-0">
          <div className="flex md:flex-row flex-col-reverse h-screen w-full items-center justify-end md:justify-between md:gap-16 gap-2">
            <div className="max-w-sm">
              <h1 className="relative z-10 text-3xl md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-left font-sans font-bold leading-[2.5rem] md:leading-[4.5rem]">
                Stay connected with friends.
              </h1>
              <p className="relative z-10 text-lg md:mt-20 mt-6 bg-clip-text text-neutral-200 text-left font-sans font-bold">
                Are you done with ads, influencer&apos;s, and want to stay
                connected with friend?
              </p>
              <button
                className="bg-neutral-200 p-4 mt-10 rounded-sm"
                onClick={() => navigate("/sign-up")}
              >
                <p className="text-bold font-sans text-lg">Be in QUEUE.</p>
              </button>
            </div>
            <div>
              <img src="/illustration.gif" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
