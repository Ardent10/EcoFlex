import React from "react";
import { NotificationsNone, Language, Settings,ExitToApp} from "@material-ui/icons";
import "./topbar.css";
import { useDispatch } from "react-redux";
import { userlogout } from "../../redux/apiCalls";


export default function Topbar() {
  const dispatch = useDispatch();

  const handleClick = ()=>{
    userlogout(dispatch);
    window.location.reload(true);
  }


  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Ecoflex-Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://img.icons8.com/fluency/96/000000/admin-settings-male.png" alt="" className="topAvatar" />
          <ExitToApp className="logout" onClick={handleClick}/>
        </div> 
      </div>
    </div>
  );
}
