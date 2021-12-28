import React from "react";



export function Sidebar() {
  return (
    <div id='sidebar'className="container-fluid">
            
             <ul className="list-group">
               <li className="list-group-item active" aria-current="true">Categories</li>
               <li className="list-group-item">Fruits</li>
               <li className="list-group-item">Spices</li>
               <li className="list-group-item">Vegetables</li>
               <li className="list-group-item">Others</li>
             </ul>
         </div>
  );
}