import React from "react";
import "./PlusIcon.css";

const PlusIcon = ({ onClick }) => {
   return (
      <div onClick={onClick} className="plus-icon">
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="hwb(0 2% 98%)"
            width="30px"
            height="30px"
         >
            <path
               d="M12 5v14M5 12h14"
               stroke="hwb(0 2% 98%)"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </svg>
      </div>
   );
};

export default PlusIcon;