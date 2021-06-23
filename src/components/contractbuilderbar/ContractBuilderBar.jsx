import "./contractbuilder.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { Link } from "react-router-dom";
import {tableData} from "../../dummyData"
import React, { useState,useEffect } from 'react';
import { ScrollView } from "@cantonjs/react-scroll-view";
import doticon from "../../images/dot.png"

export default function ContractBuilderBar(props) {
  const [tables, setTables] = useState(null);
  useEffect(() => {
    // tarayıcının başlık bölümünü değiştirmemizi sağlar
    setTables(tableData)
  });
  return (
    
    <div className="contractbuilderbar">
      {props.isInfoOpen?
        <div className="contractbuilderbarWrapper">
          <h2 style={{color:'#F9F3FA',padding:'8%',textAlign:'left'}}>Contract Builder</h2>
        <div className="contractbuilderbarMenu">
          
          <ul className="contractbuilderbarList">
            <Link to="/" className="link">
        
            <li className="contractbuilderbarListItem active">
              
              <AddIcon className="contractbuilderbarIcon" />
              Create new tenancy contract
              <img style={{padding:'3%'}}src={doticon} alt="omnicheck" width="10" height="10"/>
              
          
            </li>
        
            
            </Link>
            <Link to="/home" className="link">
            <li className="contractbuilderbarListItem">
              <FiberManualRecordIcon className="contractbuilderbarIcon orange" />
              Active tenancy contracts
            </li>
            </Link>
            <li className="contractbuilderbarListItem">
              <FiberManualRecordIcon className="contractbuilderbarIcon pink" />
              Draft tenancy contracts
            </li>
            <li className="contractbuilderbarListItem">
              <FiberManualRecordIcon className="contractbuilderbarIcon green" />
              Signed tenancy contracts
            </li>
          </ul>
          
        </div>
        <div style={{width:'100%', height:4,color:"white", backgroundColor:"#C4C4C4"}}>
              
          </div>
          <h2 className={"h2title"}>Table Of Contents</h2>
          
          <ScrollView style={{ height: '60vh' }}>
            {tables!=null?tables.map(table => 
                <div>
                  <p className="tablenames">{table.tablename}</p>
              
                    {table.contents.map(content => 
                      <p className="contenttexts">{content.title}: {content.part}</p>
                    )}
                  
                </div>
               
               
            ):null}
          </ScrollView>

            
         
         
      </div>
      :
      <div className="contractbuilderbarWrapper">
        <div className="contractbuilderbarMenu">
        <h2 style={{color:'#F9F3FA',padding:'8%',textAlign:'left'}}>Contract Builder</h2>
          <ul className="contractbuilderbarList">
            <Link to="/" className="link">
        
            <li className="contractbuilderbarListItem active">
              
              <AddIcon className="contractbuilderbarIcon" />
              Create new tenancy contract
              <img style={{padding:'3%'}}src={doticon} alt="omnicheck" width="10" height="10"/>
          
            </li>
        
            
            </Link>
            <Link to="/home" className="link">
            <li className="contractbuilderbarListItem">
              <FiberManualRecordIcon className="contractbuilderbarIcon orange" />
              Active tenancy contracts
            </li>
            </Link>
            <li className="contractbuilderbarListItem">
              <FiberManualRecordIcon className="contractbuilderbarIcon pink" />
              Draft tenancy contracts
            </li>
            <li className="contractbuilderbarListItem">
              <FiberManualRecordIcon className="contractbuilderbarIcon green" />
              Signed tenancy contracts
            </li>
          </ul>
        </div>
        
      </div>
      }
      
    </div>
  );
}
