import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
       
        <div className="topRight">
          <div className="topbarIconContainer">
            <ExitToAppIcon />
            
          </div>
          <div className="topbarIconContainer">
            <LiveHelpIcon />
            
          </div>
          
         
        </div>
      </div>
    </div>
  );
}
