import "./contractbuilder.css";
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route ,Link, useHistory} from "react-router-dom";
import ContractBuilderBar from "../../components/contractbuilderbar/ContractBuilderBar";
import Topbar from "../../components/topbar/Topbar";
import progressicon from "../../images/progress.png"
import nextarrow from "../../images/nextarrow.png"
import penicon from "../../images/penicon.png"
import cancelicon from "../../images/cancelicon.png"
import sendicon from "../../images/sendicon.png"




export default function ContractBuilder() {
  const [firstName,setFirstName]=useState(null)
  const [middleName,setMiddleName]=useState(null)
  const [surname,setSurname]=useState(null)
  const [companyName,setCompanyName]=useState(null)
  
  const [isElectricityInclude,setElectricityInclude]=useState(false)
  const [isGasInclude,setGasInclude]=useState(false)
  const [isWaterInclude,setWaterInclude]=useState(false)
  const [isInternetInclude,setInternetInclude]=useState(false)
  const [isTVLicenceInclude,setTVLicenceInclude]=useState(false)
  const [isOtherInclude,setOtherInclude]=useState(false)
  const [bills,setBills]=useState([])
  const [isEditPageOpen,setEditPageOpen]=useState(false)

  const history = useHistory()

  function editBill(billname,isInclude){
    if(isInclude){
      
      setBills([billname,...bills])
    }else{
      var index = bills.indexOf(billname)
      setBills(bills.splice(index,0))     
    }
    
  }

  function onPressNext(){
    if(companyName!=null && surname!=null && firstName!=null){
      setEditPageOpen(true)
    }else{
      alert('You have to fill blanks !')
    }
  }
  return (
   
    <Router>
      <ContractBuilderBar isInfoOpen={isEditPageOpen}/>
      
      <div className="contractbuilder">
        <Topbar/>
        {isEditPageOpen?
          <div style={{display:'flex',height:"94%"}}>
           <div className="previeweditcontainer">
            
            <div className="titlepreviewcontainer">
              <h2 className="titlepreview">Preview & Edit Terms of Contract</h2>
              
              <div style={{ height: '600px', overflowY: 'scroll' }} >
              <div className="editpartscontainer">
                      <div className="editpartsaggrement">
                        <div>
                        <p  className="sectiontitles" style={{textAlign:'center',paddingTop:'5%'}}>Section 1:</p>
                        <p style={{paddingTop:"30%",paddingLeft:"3%",paddingBottom:"3%", color:'white',fontWeight:'bold',textAlign:'center'}}>AGREEMENT</p>
                        <p style={{paddingTop:"30%",paddingLeft:"3%",paddingBottom:"3%", color:'white',textAlign:'center'}}>In name of</p>
                        <p style={{paddingTop:"30%",paddingLeft:"3%",paddingBottom:"3%", color:'green',textAlign:'center', textOverflow:"ellipsis",whiteSpace:"nowrap",fontWeight:'bold'}}>{firstName} {middleName!=null?middleName:''} {surname}</p>
                        
                        
                        </div>
                        
                         
                      </div>
                      
                      
                      <div className="peniconcontainer">
                        <img src={penicon} alt="omnicheck" width="30" height="30"/>
                      </div>
                </div> 
               
                 <div className="editpartscontainer">
                      <div className="editparts">
                          <p className="sectiontitles">Section 2:</p>
                          <p style={{paddingTop:"3%",paddingLeft:"3%",paddingBottom:"3%", color:'white',fontWeight:'bold'}}>Bills included:</p>
                          {bills.map((bill)=>(
                           <p className="billcontent">{bill}</p>
                          ))}
                      
                      </div>
                      <div className="peniconcontainer">
                        <img src={penicon} alt="omnicheck" width="30" height="30"/>
                      </div>
                  </div>
            
                 
              </div>
            

            </div>
          </div>
          <div className="choosebillcontainer" >
              <div style={{marginLeft:"92%", marginTop:"3%"}}>
                <img src={cancelicon} alt="omnicheck" width="20" height="20"/>
              </div>
              <div style={{paddingLeft:'10%'}}>
                <p className="choosebilltitle">Which bills are included?</p>
              </div>
              <div style={{marginLeft:'13%',width:'75%',height:"80%",paddingTop:'4%'}}>
                
                  <button onClick={()=>{editBill("Electricity",!isElectricityInclude); setElectricityInclude(!isElectricityInclude)}} style={{width:'100%',height:"12%", backgroundColor:isElectricityInclude?'#93227F':'#3C363B'}}>
                    <p style={{color:'snow'}}>Electricity</p>
                  </button>
                
                  
                  <button onClick={()=>{editBill("Gas",!isGasInclude); setGasInclude(!isGasInclude)}} style={{width:'100%',height:"12%", backgroundColor:isGasInclude?'#93227F':'#3C363B',marginTop:'3%'}}>
                    <p style={{color:'snow'}}>Gas</p>
                  </button>
                  <button onClick={()=>{editBill("Water",!isWaterInclude); setWaterInclude(!isWaterInclude)}} style={{width:'100%',height:"12%", backgroundColor:isWaterInclude?'#93227F':'#3C363B',marginTop:'3%'}}>
                    <p style={{color:'snow'}}>Water</p>
                  </button>
                  <button onClick={()=>{editBill("Internet",!isInternetInclude); setInternetInclude(!isInternetInclude)}} style={{width:'100%',height:"12%", backgroundColor:isInternetInclude?'#93227F':'#3C363B',marginTop:'3%'}}>
                    <p style={{color:'snow'}}>Internet</p>
                  </button>
                  <button onClick={()=>{editBill("TVLicence",!isTVLicenceInclude); setTVLicenceInclude(!isTVLicenceInclude)}} style={{width:'100%',height:"12%", backgroundColor:isTVLicenceInclude?'#93227F':'#3C363B',marginTop:'3%'}}>
                    <p style={{color:'snow'}}>TV Licence</p>
                  </button>
                  <button onClick={()=>{editBill("Other",!isOtherInclude); setOtherInclude(!isOtherInclude)}} style={{width:'100%',height:"12%", backgroundColor:isOtherInclude?'#93227F':'#3C363B',marginTop:'3%'}}>
                    <p style={{color:'snow'}}>Other</p>
                  </button>
              </div>
              
             
                <div onClick={()=>history.push({pathname: '/contractbuilder/confirmcontract',search: '?query=confirmpage',state: { bills: bills,user:{firstname:firstName,surname:surname,middlename:middleName!=null?middleName:""} }})}  className="signandsendcontainer" style={{position:"absolute",display:'flex',padding:'0.5%',bottom:'10%',right:'4%',backgroundColor:'#D41553',width:"18%",height:"5%",justifyContent:"center",alignItems:'center'}}>
                      <p className="signbutton" style={{textAlign:'center'}}>Sign and Send Contract to Tenant(s)</p>
                      <img src={sendicon} style={{marginLeft:'3%'}} alt="omnicheck" width="25" height="25"/>
                </div>
            
          </div>
          
        </div>
         
        :
        <div className="containercontractbuilder">
        <div  className="containerInside">
          <img style={{padding:10,alignSelf:"center", marginLeft:10}} src={progressicon} alt="omnicheck" width={400} height={8}/>
          <p  style={{}} className="contractbuildertext"><pre style={{textAlign:"left"}}>Enter your full name and/or the company</pre> <pre style={{textAlign:"left"}}>name that the tenant(s) is entering the</pre> <pre style={{textAlign:"left"}}>agreement with</pre></p>
            <div className="chooseboxcontainer">
              <input onChange={(text)=>setFirstName(text.target.value)} className="choosebox" type="text" id="fname" name="fname" placeholder="First name">
              
              </input>
            </div>
            
            <div className="chooseboxcontainer">
              <input onChange={(text)=>setMiddleName(text.target.value)} className="choosebox" type="text" id="fname" name="fname" placeholder="Middle name(s)">
              
              </input>
            </div>

            <div className="chooseboxcontainer">
              <input onChange={(text)=>setSurname(text.target.value)} className="choosebox" type="text" id="fname" name="fname" placeholder="Surname">
              
              </input>
            </div>
            <div className="chooseboxcontainer">
              <p className="chooseboxline"></p>
            </div>
            <div className="chooseboxcontainer">
              <input onChange={(text)=>setCompanyName(text.target.value)} className="choosebox" type="text" id="fname" name="fname" placeholder="Company name">
              
              </input>
            </div>
            <div className="chooseboxcontainer">
              <div className="chooseboxbutton">
                <p onClick={()=>onPressNext()} className="chooseboxbuttontext">Next <img style={{padding:2,alignSelf:"center", marginLeft:10}} src={nextarrow} alt="omnicheck" width={8} height={15}/></p>
                
              </div>
            
            </div>
            <div className="chooseboxcontainer">
              
            </div>

        

          
          
        </div>
      </div>
         
        }
        
       
      
        
      </div>
     
     
          
          
          
        
    </Router>
   

    
  );
}
