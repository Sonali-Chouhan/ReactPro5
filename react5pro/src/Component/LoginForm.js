import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {register,formState: { errors },handleSubmit} = useForm();
 
 
  const handleRegistration = (data) => {
    console.log("dddd", data);
  
    };
  return (
    <div className="Registration">
       <form onSubmit={handleSubmit(handleRegistration)}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter User Name"
          {...register("name", { required: true })}
        />
        {errors.name && <p>This is required.</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter User Email"
          {...register("email", { required: true })}
        />
        {errors.email?.type === "required" && "Email Address is required"}
      </div>
      <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
