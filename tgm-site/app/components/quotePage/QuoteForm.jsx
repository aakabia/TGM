"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";

export default function QuoteForm() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");
  //console.log("service:", service);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  //console.log(errors);

  return (
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

      <input
        className="w-full focus:outline-none focus:ring-2 focus:ring-accent/50  text-black border-[5px] border-solid border-emeraldOp rounded-lg p-1"
        type="tel"
        placeholder="phone #"
        {...register("phone #", {
          required: "* A Phone number is required!",
          validate: {
            isValidPhone: (value) =>
              /^\d{10}$/.test(value) ||
              "* Phone number must be 10 digits with no special chars!", // Adjust regex as needed
          },
        })}
      />

      {errors["phone #"] && (
        <span className="inline-block self-start font-bold text-sm">
          {errors["phone #"].message}
        </span>
      )}

      <select
        className="w-full focus:outline-none focus:ring-2 focus:ring-accent/50 border-[5px] border-solid border-emeraldOp rounded-lg p-1 text-black"
        defaultValue={service || ""}
        {...register("service", { required: "* A Service is required!" })}
      >
        <option value="" disabled>Choose a service</option>
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

      <input
        className="px-10 py-4 shadow-lg bg-emerald text-white border-accent/30 border-emeraldOp rounded-lg border-solid hover:shadow-glass-sm  focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
        type="submit"
      />
    </form>
  );
}

// Above is a form component built from the react hook form website and styled by me.
// The form uses the register function for the inputs and conditional rending for the errors.
// useSearchParams helps us get our params passed in our route