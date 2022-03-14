import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch} from "react-redux";
import {editTodo}  from "../Redux/Action/ListAction";


const Table = () => {

  const dispatch = useDispatch();
  const data=useSelector((state)=>state.ListReducer.List)
  let navigate = useNavigate()
 const  handleEdit=(id)=>{
  dispatch(editTodo(id));

  navigate('/form');
    
  }
  return (
    <div>
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>name</th>
            <th>email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,id)=>{
              return(
                <tr key={id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>
                    <button onClick={()=>handleEdit(id)}>Edit</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table