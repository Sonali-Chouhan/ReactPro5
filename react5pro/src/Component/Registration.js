import React,{useEffect} from "react";
import { useForm } from "react-hook-form";
import {addData} from "../Redux/Action/RegiAction";
import { useDispatch,useSelector} from "react-redux";
const Registration = () => {
  const {register,formState: { errors },handleSubmit} = useForm();
  const dispatch = useDispatch();
  const Record = useSelector((state) => state.ListReducer.List);
  {
    console.log("record",Record);
  }
  //submit and update functionalty here
  const handleRegistration = (data) => {
    console.log("dddd", data);
    dispatch(addData(data));
    };
    useEffect(() => {
    if(Record){
        var item=Record
        localStorage.setItem("record", JSON.stringify(item));
      }

    },[Record])
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
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter User Password"
            {...register("password", { required: true })}
          />
          {errors.password?.type === "required" && "Password  required"}
        </div>
        <button type="submit">Registration</button>
           
      </form>
    </div>
  );
};

export default Registration;
