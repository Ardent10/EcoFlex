import React ,{useState, useEffect} from "react";
import { Visibility } from "@material-ui/icons";
import { userRequest } from "../../requestMethods";
import "./widgetSm.css";

export default function WidgetSm() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () =>{
      try {
          const res = await userRequest.get("users/?new=true");
          setUsers(res.data);
      } 
      catch (err) {
        console.log(err);  
      }
    };
   
    getUsers();
  }, [])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">

      {users.map((user)=>(

        <li className="widgetSmListItem" key={user._id}>
          <img
            src={user.img || "https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-user-interface-kiranshastry-gradient-kiranshastry.png"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      ))}

      </ul>
    </div>
  );
}
