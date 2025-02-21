import React from "react";
import { useFormContext } from "react-hook-form";


const Radiolabel = ({question,id1,id2,option1,option2,registerName,errorMessage}) => {

    const {
        register,
        formState: { errors },
      } = useFormContext(); // Access parent form context

    
    


  return (
    <>

      <div className="w-full h-auto flex flex-col p-3 space-y-3">
        <label htmlFor="consent">{question}</label>
        <label>
          <input
            type="radio"
            id={id1}
            value={option1}
            className="m-2"
            {...register(registerName, { required: errorMessage})}
          />
          {option1}
        </label>

        <label>
          <input
            type="radio"
            id={id2}
            value={option2}
            className="m-2"
            {...register(registerName, { required: errorMessage })}
          />
          {option2}
        </label>
        {errors[registerName] && <p className="text-red-500 text-sm font-bold">{errors[registerName].message}</p>}
      </div>
      
    </>
  );
};

export default Radiolabel;
