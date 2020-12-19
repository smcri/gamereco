import React,{useState} from "react";
import "../style.css";


const QuestionBox = ({ question, options,selected}) => {
  const [answer, setAnswer] = useState(options);
  const [wobble, setWobble] = React.useState(0);
  return (
    <div className="questionBox">
        <div className="question">{question}</div>
        {answer.map((text,index) => (
          <button
              key={index}
              className="answerBtn"
              onClick={()=>{
                    setAnswer([text]);
                    selected(text);
                    setWobble(1);
                  }}onAnimationEnd={() => setWobble(0)}
      wobble={wobble}> {text}
         </button>
        ))}
    </div>
  )
};

export default QuestionBox;
