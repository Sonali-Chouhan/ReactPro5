import React from "react";
import { useForm } from "react-hook-form";
import { addTodo } from "../Redux/Action/ListAction";
import { useDispatch,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

const FromC = () => {
  let navigate =useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const data = useSelector((state) => state.ListReducer);
  const handleRegistration = (data) => {
    
    dispatch(addTodo(data));
    navigate('/table');
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div>
          <label>Name</label>
          <input name="name" {...register("name")} />
        </div>

        <div>
          <label>Email</label>
          <input type="email" name="email" {...register("email")} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" {...register("password")} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FromC;
