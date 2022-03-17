import React ,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import{deleteTodo} from "../Redux/Action/ListAction";

import "./Table.css"
const Table = () => {
  //useSelector
const data = useSelector((state) => state.ListReducer.List);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  //Redirect Page
  const handleEdit = (id) => {
     navigate(`/userfrom/${id}`);
  };
  const handledelete=(id)=>{
    console.log("6766",id)
   dispatch(deleteTodo(id))
  }

  useEffect(()=>{

  },[data])

  
  return (
    <div className="tableDiv">
      <h1>Table</h1>

      <table className="table">
        <thead className="thead">
          <tr>
            <th>Id</th>
            <th>name</th>
            <th>email</th>
            <th>Password</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {data.map((item, id) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                  <button 
                   onClick={() => handleEdit(id)}>Edit</button>
                </td>
                <td>
                  <button 
                   onClick={() => handledelete(id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
//App code
// import React from "react";
// import Home from "./Component/Home";
// import Table from "./Component/Table";
// import From from "./Component/From";
// import { ToastContainer} from 'react-toastify';
// import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
// import "./App.css";
// function App() {
//   return (
//     <div className="App">
//       <ToastContainer/>
//       <Router>
//         <div className="header">
//           <Link to="/">Home</Link>
//           <Link to="/userfrom">Form</Link>
//           <Link to="/userlist">Table</Link>
//         </div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/userfrom" element={<From />} />
//           <Route path="/userlist" element={<Table />} />
//           <Route path="/userfrom/:id" element={<From />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }
// export default App;
// .header{
//   background-color: black;
//   padding: 20px 0px;
// }
// .header a{
//   text-decoration: none;
//   padding: 0px 20px;
//   color: #fff;
//   transition: .4s;
//   font-size: 19px;
// }
// .header a:hover{
//   color:#ec6100;
// }

