import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import CalculationComponent from "./CalculationComponent";

const MainComponent = () => {
   const [question, setQuestion] = useState("");
   const [answer, setAnswer] = useState("");

   const handleClick = (event) => {
      const value = event.target.value;
      switch (value) {
         case "=": {
            if (question !== "") {
               let result = "";
               try {
                  result = eval(question);
               } catch (err) {
                  setAnswer("Math Error");
               }
               if (result === undefined) {
                  setAnswer("Math Error");
               } else {
                  setAnswer(result);
               }
               break;
            }
            break;
         }
         case "AC": {
            setQuestion("");
            setAnswer("");
            break;
         }
         case "DEL": {
            setQuestion(question.slice(0, -1));
            setAnswer("");
            break;
         }
         case "%": {
            if (answer !== "") {
               setQuestion("");
               setAnswer(answer / 100);
            } else {
               setAnswer(eval(question) / 100);
            }
            break;
         }
         case "/": {
            if (answer !== "") {
               setQuestion(answer + "/");
               setAnswer("");
            } else {
               setQuestion(question + "/");
               setAnswer("");
            }
            break;
         }
         case "*": {
            if (answer !== "") {
               setQuestion(answer + "*");
               setAnswer("");
            } else {
               setQuestion(question + "*");
               setAnswer("");
            }
            break;
         }
         case "-": {
            if (answer !== "") {
               setQuestion(answer + "-");
               setAnswer("");
            } else {
               setQuestion(question + "-");
               setAnswer("");
            }
            break;
         }
         case "+": {
            if (answer !== "") {
               setQuestion(answer + "+");
               setAnswer("");
            } else {
               setQuestion(question + "+");
               setAnswer("");
            }
            break;
         }
         default: {
            setQuestion(question + value);
            setAnswer("");
            break;
         }
      }
   };

   return (
      <div className="calculator">
         <div className="calculator-screen">
            <h1>CASIO</h1>
            <div className="">
               <CalculationComponent question={question} answer={answer} />
               <div className="button-row">
                  <ButtonComponent
                     className="btnaction"
                     element={"AC"}
                     handleClick={handleClick}
                  />
                  <ButtonComponent
                     className="btnaction"
                     element={"DEL"}
                     handleClick={handleClick}
                  />
                  <ButtonComponent
                     className="btnaction"
                     element={"%"}
                     handleClick={handleClick}
                  />
                  <ButtonComponent
                     className="btnaction"
                     element={"/"}
                     handleClick={handleClick}
                  />
               </div>
               <div className="button-row">
                  <ButtonComponent element={"7"} handleClick={handleClick} />
                  <ButtonComponent element={"8"} handleClick={handleClick} />
                  <ButtonComponent element={"9"} handleClick={handleClick} />
                  <ButtonComponent
                     className="btnaction"
                     element={"*"}
                     handleClick={handleClick}
                  />
               </div>
               <div className="button-row">
                  <ButtonComponent element={"4"} handleClick={handleClick} />
                  <ButtonComponent element={"5"} handleClick={handleClick} />
                  <ButtonComponent element={"6"} handleClick={handleClick} />
                  <ButtonComponent
                     className="btnaction"
                     element={"-"}
                     handleClick={handleClick}
                  />
               </div>
               <div className="button-row">
                  <ButtonComponent element={"1"} handleClick={handleClick} />
                  <ButtonComponent element={"2"} handleClick={handleClick} />
                  <ButtonComponent element={"3"} handleClick={handleClick} />
                  <ButtonComponent
                     className="btnaction"
                     element={"+"}
                     handleClick={handleClick}
                  />
               </div>
               <div className="button-row">
                  <ButtonComponent element={" "} />
                  <ButtonComponent element={"0"} handleClick={handleClick} />
                  <ButtonComponent element={"."} handleClick={handleClick} />
                  <ButtonComponent
                     className="btnaction"
                     element={"="}
                     handleClick={handleClick}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default MainComponent;
