import React from "react";
import {BackgroundBeams} from "../components/background-beam";
import SignUpForm from "../components/signup-form";

const SignUp = () => {
  return (
    <div className="h-screen w-screen rounded-md bg-[#021219] relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-screen-2xl mx-auto z-[100000]">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-neutral-200 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered.
        </p>
        <SignUpForm />
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default SignUp;
