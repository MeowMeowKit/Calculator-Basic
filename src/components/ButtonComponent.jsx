import React from "react";

const ButtonComponent = (props) => {
   return (
      <input
         className={props.className}
         type="button"
         value={props.element}
         onClick={props.handleClick}
      />
   );
};

export default ButtonComponent;
