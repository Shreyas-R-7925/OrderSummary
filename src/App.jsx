import React from "react"; 
import Detail from "./Detail";  
import details_list from "./info";
import Cost from "./Cost";   

function createEntry(info) {
    return (
      <Detail
        key={info.id}
        item_name={info.item_name}
        description={info.description}
        price={info.price} 
      />
    );
  }

function App(){ 
    return (
        <div>
            <h1>
                <span>Order Summary</span> 
            </h1>

            <dl className="detail">
                {details_list.map(createEntry)} 
            </dl>  

            <div className="tot_cost"><Cost/></div>
            
        </div>
    );
} 

export default App; 
