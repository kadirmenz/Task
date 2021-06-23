
import "./confirmcontract.css";
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route,useLocation,withRouter } from "react-router-dom";
import ContractBuilderBar from "../../components/contractbuilderbar/ContractBuilderBar";
import Topbar from "../../components/topbar/Topbar";
import sendicon from "../../images/sendicon.png"


export default function ConfirmContract(props) {

  const location = useLocation();
  
  return (
    <Router>
      <ContractBuilderBar isInfoOpen={true}/>
      
      <div className="contractbuilder">
        <Topbar/>
      
        <div style={{marginLeft:'10%',height:"94%"}}>
           <div className="previewcontainer">
            
            <div className="titlepreviewcheckcontainer">
              <h2 className="titlepreviewcheck">Preview Contract</h2>
              
              <div style={{ height: '600px', overflowY: 'scroll' }} >
              <div className="checkpartscontainer">
                      <div className="checkparts">
                        <div>
                        <p  className="sectiontitles" style={{textAlign:'left',paddingTop:'5%'}}>Section 1:</p>
                        <p style={{paddingTop:"10%",paddingLeft:"3%",paddingBottom:"3%", color:'#F9F3FA',textAlign:'left'}}>AGREEMENT</p>
                        <p style={{paddingTop:"10%",paddingLeft:"3%",paddingBottom:"3%", color:'#F9F3FA',textAlign:'left'}}>In name of</p>
                        <p style={{paddingTop:"10%",paddingLeft:"3%",paddingBottom:"3%", color:'#F9F3FA',textAlign:'left', textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{location.state.user.firstname} {location.state.user.middlename} {location.state.user.surname}</p>
                        
                        <div className="checkparts">
                          <p style={{paddingTop:'20%'}}className="sectiontitles">Section 2:</p>
                          <p style={{paddingTop:"20%",paddingLeft:"3%",paddingBottom:"20%", color:'white',textOverflow:"ellipsis",whiteSpace:"nowrap"}}>Bills included:</p>
                          {location.state.bills.map((bill)=>(
                           <p className="billcontent">{bill}</p>
                          ))}
                      
                        </div>
                        </div>  
                      </div>
                      

                </div> 
               
                
            
                 
              </div>
      
            

            </div>
                            
          </div>
         
          
          <div onClick={()=>alert('Successful!')}  className="confirmcontractcontainer" style={{display:'flex',padding:'0.5%',backgroundColor:'#D41553',width:"18%",height:"5%",justifyContent:"center",alignItems:'center',marginTop:'1%',marginLeft:'25%'}}>
                      <p className="signbutton" style={{textAlign:'center'}}>Confirm Contract</p>
                      <img src={sendicon} style={{marginLeft:'5%'}} alt="omnicheck" width="25" height="25"/>
          </div>
        </div>
       
      </div>
      
    </Router>
    
  );
}
 