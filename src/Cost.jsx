import React from "react"; 
import details_list from "./info"; 

var total_price = details_list.reduce(function(sum,prc){
    return sum + prc.price;
},0);

function Cost(){
    return (
        <div>
           <span>Total Price : {total_price}</span>
        </div>
    ); 
} 

export default Cost; 