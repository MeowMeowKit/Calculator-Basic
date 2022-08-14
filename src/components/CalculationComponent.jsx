import React from "react";

const CalculationComponent = (props) => {
   return (
      <div className="screen-row">
         <input
            type="text"
            readOnly
            id="screen-question"
            value={props.question}
         />
         <input type="text" readOnly id="screen-answer" value={props.answer} />
      </div>
   );
};

export default CalculationComponent;
