import React from "react";
import {Label} from "../label";
import {cn} from "../../../utils/cfn";
import {Input} from "../input";
import {useForm} from "react-hook-form";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-neutral-800 from-neutral-500 to-neutral-600">
      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              type="text"
              register={register("name", {
                required: true,
              })}
            />
            {errors.name && errors.name.type === "required" && (
              <p className="font-normal text-sm text-red-500">
                Name is required.
              </p>
            )}
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="user@domain.com"
            type="email"
            name="email"
            register={register("email", {
              required: true,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <p className="font-normal text-sm text-red-500">
              Email is required.
            </p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">Contact</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="9222222222"
            type="number"
            maxLength={10}
            register={register("phone", {
              required: true,
              minLength: 10,
              maxLength: 10,
            })}
          />
          {errors.phone && errors.phone.type === "required" && (
            <p className="font-normal text-sm text-red-500">
              Phone Number is required.
            </p>
          )}
        </LabelInputContainer>

        <button
          className="relative group/btn from-black to-neutral-600 block w-full text-white bg-neutral-800 rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
          type="submit"
          disabled={errors.length || isSubmitting}
        >
          Submit &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({children, className}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
