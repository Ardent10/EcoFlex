import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import { deleteProducts, getClients } from "../../redux/apiCalls";


export default function UserList() {
  const dispatch = useDispatch();
  const clients = useSelector(state=>state.client.users);

  useEffect(()=>{
    
    getClients(dispatch);


  },[dispatch]);

  const handleDelete = (id) => {
    deleteProducts(id,dispatch);
  };
  
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.img || "https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-user-interface-kiranshastry-gradient-kiranshastry.png"} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "isAdmin",
      headerName: "Admin",
      width: 120,
    },
    {
      field: "amount",
      headerName: "Transaction ",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
       <div className="userTitleContainer">
        <h1 className="userTitle">User List</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <DataGrid
        rows={clients}
        disableSelectionOnClick
        getRowId = {row=>row._id}
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
