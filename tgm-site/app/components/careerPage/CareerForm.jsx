"use client";
import React, { forwardRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { sendEmail } from "../../../helpers/helpers.js";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function QuoteForm() {
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
      message: data.message || "There was no Message body from sender.",
      phone: data.phone,
    };

    sendEmail(templetParams, toast, reset);
  };

  //console.log(errors);   <--uncomment to see errors from form

  const CustomInput = forwardRef((props, ref) => (
    <input {...props} ref={ref} className="focus:outline-none " />
  ));

  //ForwardRef is a function in React that allows you to pass a ref (reference) from a parent component to a child component.

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

        <textarea
          placeholder="message"
          className="w-full h-[150px] focus:outline-none focus:ring-2 focus:ring-accent/50  text-black border-[5px] border-solid border-emeraldOp rounded-lg p-1 "
          {...register("message", {
            maxLength: {
              value: 500,
              message: "Message should be less than 500 characters!",
            },
          })}
        />

        {errors.message && (
          <span className="inline-block self-start font-bold text-sm">
            {errors.message.message}
          </span>
        )}

        <input
          className="px-10 py-4 shadow-lg bg-emerald text-white border-accent/30 border-emeraldOp rounded-lg border-solid hover:shadow-glass-sm  focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
          type="submit"
        />
      </form>
    </>
  );
}
