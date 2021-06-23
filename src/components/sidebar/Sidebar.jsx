import "./sidebar.css";
import { Link } from "react-router-dom";
import omnichecklogo from "../../images/omnicheck.png"
import usericonlogo from "../../images/usericon.png"
import omninewslogo from "../../images/omninews.png"
import contractbuidlerlogo from "../../images/contractbuidler.png"
import omniscanlogo from "../../images/omniscan.png"
import companylogo from "../../images/companylogo.png"

export default function Sidebar() {
  return (
    <div className="sidebar">
       
      
      
       
      <div style={{justifyContent:"center"}}>
        <div className="usericoncontainer">
          <img style={{marginLeft:30}} src={usericonlogo} alt="omnicheck" width="60" height="60"/>
        </div>
      
              
         
      <ul className="sidebarList" style={{justifyContent:"center"}}>
           
            
     
        
       
         
           <hr style={{marginLeft:35}} className="line" size="1" width="30%" color="#4E444C"></hr>
             
        
           <Link to="/" className="link">
           
           <li className="sidebarListItem">
             
           <div className="sidebarHeader">
             <img src={omnichecklogo} alt="omnicheck" width="80" height="80"/>
             
             
           </div>
           <p className="titles">OmniCheck</p>
           </li>
           </Link>
           <Link to="/contractbuilder" className="link">
           <li className="sidebarListItem active">
           <div className="sidebarHeader">
             <img src={contractbuidlerlogo} alt="omnicheck" width="80" height="80"/>

             
           </div>
           <p className="titles">Contract Builder</p>
             
           </li>
           </Link>
           <Link to="/" className="link">
           <li className="sidebarListItem">
           <div className="sidebarHeader">
             <img src={omninewslogo} alt="omnicheck" width="80" height="80"/>
             
           </div>
           <p className="titles">OmniNews</p>
           </li>
           </Link>
           <Link to="/" className="link">
           <li className="sidebarListItem">
           <div className="sidebarHeader">
             <img src={omniscanlogo} alt="omnicheck" width="80" height="80"/>
  
           </div>
           <p className="titles">OmniScan</p>
             
           </li>
           </Link>
         </ul>
  
      </div>
     
      <div className="sidebarCompanyLogo">
        <img src={companylogo} alt="omnicheck" width="70" height="70"/>
            
      </div>
    </div>
  );
}
