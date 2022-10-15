import React from "react"; 
import Incrementer from "./Incre"; 

function Detail(props){ 
    return (  
        <div className="order"> 
            <span className="title">{props.item_name}</span>
            <br/> 
            <br/>
            <span> <b className="comp">Description : </b> {props.description}</span>
            <br/>
            <br/>
            <span><b className="comp">Price : </b>{props.price}</span>
            <br/>  
            <br/>
            <span><b className="comp">Quantity : </b><Incrementer/></span>
            <br/>
            
        </div>
    );
} 


export default Detail; 



 

    