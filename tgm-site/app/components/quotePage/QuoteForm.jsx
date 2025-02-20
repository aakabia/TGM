"use client";
import React, { forwardRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { Toaster, toast } from "sonner";
import { sendEmail } from "../../../helpers/helpers.js";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function QuoteForm() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");

  //console.log("service:", service);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const templetParams = {
      to_name: "Bryan Macko",
      from_name: data.name,
      reply_to: data.email,
      service: data.service,
      message: data.message,
      phone: data.phone,
    };

    sendEmail(templetParams, toast, reset);
  };

  //console.log(errors);   <--uncomment to see errors from form

  const CustomInput = forwardRef((props, ref) => (
    <input {...props} ref={ref} className="focus:outline-none " />
  ));

  return (
    <>
      <Toaster richColors={true} />
      {/* make sure the toaster is outside the form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" max-w-md w-full h-auto flex flex-col items-center justify-center space-y-3 p-5 "
      >
        <input
          className="w-full focus:outline-none focus:ring-2 focus:ring-accent/50  text-black border-[5px] border-solid border-emeraldOp rounded-lg p-1 "
          type="text"
          placeholder="name"
          {...register("name", {
            required: "* A name is required!",
            minLength: {
              value: 3,
              message: "* Name must be atleast 3 charcters long!",
            },
          })}
        />

        {errors.name && (
          <span className="inline-block self-start font-bold text-sm">
            {errors.name.message}
          </span>
        )}

        {/* name input above */}

        <input
          className="w-full focus:outline-none focus:ring-2 focus:ring-accent/50  text-black border-[5px] border-solid border-emeraldOp rounded-lg p-1"
          type="email"
          placeholder="email "
          {...register("email", { required: "* A valid email is required!" })}
        />
        {errors.email && (
          <span className="inline-block self-start font-bold text-sm">
            {errors.email.message}
          </span>
        )}

        {/* email input above */}

        <Controller
          name="phone"
          control={control}
          defaultValue=""
          rules={{
            required: "* A phone number is required!",
            validate: {
              isValidPhone: (value) => {
                let cleanedValue = value.replace(/\D/g, ""); // Remove non-digit characters

                if (cleanedValue.startsWith("1")) {
                  cleanedValue = cleanedValue.slice(1);
                }
                console.log("Validating phone number:", cleanedValue);
                if (cleanedValue.length !== 10) {
                  return "* United States number with exactly 10 digits!";
                }
                return true; // If valid, return true
              },
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <div className=" w-full text-black border-[5px] border-solid border-emeraldOp rounded-lg p-1">
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={onChange}
                defaultCountry="US"
                inputComponent={CustomInput}
              />
            </div>
          )}
        />

        {errors.phone && (
          <span className="inline-block self-start font-bold text-sm">
            {errors.phone.message}
          </span>
        )}

        {/* Phone input above */}

        <select
          className="w-full focus:outline-none focus:ring-2 focus:ring-accent/50 border-[5px] border-solid border-emeraldOp rounded-lg p-1 text-black"
          defaultValue={service || ""}
          {...register("service", { required: "* A Service is required!" })}
        >
          <option value="" disabled>
            Choose a service
          </option>
          <option value="Lawn Management">Lawn Management</option>
          <option value="Property Management">Property Management</option>
          <option value="Tree Pruning & Fertilizer">
            Tree Pruning & Fertilizer
          </option>
          <option value="Pressure Washing">Pressure Washing</option>
          <option value="Leaf & Gutters">Leaf & Gutters</option>
          <option value="Aeration & Topdressing">Aeration & Topdressing</option>
          <option value="Sod & Mulch Installation">
            Sod & Mulch Installation
          </option>
          <option value="Flowers & Rock Installation">
            Flowers & Rock Installation
          </option>
          <option value="Property Clean-Up">Property Clean-Up</option>
        </select>

        {errors.service && (
          <span className="inline-block self-start font-bold text-sm">
            {errors.service.message}
          </span>
        )}

        {/* select input above */}

        <textarea
          placeholder="message"
          className="w-full h-[150px] focus:outline-none focus:ring-2 focus:ring-accent/50  text-black border-[5px] border-solid border-emeraldOp rounded-lg p-1 "
          {...register("message", {
            required: "* A massage is required!",
            maxLength: {
              value: 500,
              message: "Message should be less than 500 characters!",
            },
            minLength: {
              value: 50,
              message: "Message should be more than 50 characters!",
            },
          })}
        />

        {errors.message && (
          <span className="inline-block self-start font-bold text-sm">
            {errors.message.message}
          </span>
        )}

        {/* text area input above */}

        <input
          className="px-10 py-4 shadow-lg bg-emerald text-white border-accent/30 border-emeraldOp rounded-lg border-solid hover:shadow-glass-sm  focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
          type="submit"
        />
      </form>
    </>
  );
}

// Above is a form component built from the react hook form website and styled by me.
// The form uses the register function for the inputs and conditional rending for the errors.
// useSearchParams helps us get our params passed in our route
// Controller is used to manage control input like (input or textarea)
// Inside the render prop, you destructure the onChange, onBlur, and value functions to bind the input component to the form state.
// A Phone Input is a specialized input component designed to accept phone numbers. It often includes features like formatting, validation, and country selection.
// The CustomInput component allows you to define styles and behaviors in one place. (used this because phone input was not acceptinfg dirext styles due to not supporting UseClass or className directly)
// ForwardRef is a function in React that allows you to pass a ref (reference) from a parent component to a child component.
