import React,{useEffect} from "react";
import { useForm } from "react-hook-form";
import { addTodo,updataTodo} from "../Redux/Action/ListAction";
import { useDispatch,useSelector} from "react-redux";
import { useNavigate,useParams} from "react-router-dom";
 import "./From.css";

//  main form
const FromC = () => {
  const { register,formState:{errors}, handleSubmit,setValue} = useForm();
  let navigate =useNavigate();
  const dispatch = useDispatch();
  let { id } = useParams();
  const data = useSelector((state) => state.ListReducer.List);

//submit and update functionalty here
  const handleRegistration = (user) => {
    if(id){
    dispatch(updataTodo(id,user))
     }else{
      console.log("hhh",user)
      dispatch(addTodo(user));
    }
    
    navigate('/userlist');
  }

// cancel Here
  const handleCancel=()=>{
  navigate("/userlist");
  }
  //useEffect
  useEffect(() => {
   var item=data[id]
    if(item){
      setValue("name",item.name)
      setValue("email",item.email)
      setValue("password",item.password)
    }}, []);
 
  return (
    <div className="FromC">
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div>
          <label>Name</label>
          <input type="text" 
                 name="name" 
                 placeholder="Enter User Name" 
                 {...register("name",{ required: true })} />
                 {errors.name && <p>This is required.</p>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" 
                 name="email" 
                 placeholder="Enter User Email" 
                 {...register("email",{required:true})} />
                   {errors.email?.type === 'required' && "Email Address is required"}
        
        </div>
        <div>
          <label>Password</label>
          <input type="password"  
                 name="password" 
                 placeholder="Enter User Password" 
                 {...register("password",{required:true})} />
                {errors.password?.type === 'required' && "Password  required"}
          
        </div>
        {
          id ?
          (
            <span>
              <button type="submit">Save</button>{' '}
              <button onClick={handleCancel}>Cancel</button>
            </span>
           )
         
          :
          <input type="submit" name="Submit" />
          
        }
    </form>
      
    </div>
  );
};

export default FromC;
