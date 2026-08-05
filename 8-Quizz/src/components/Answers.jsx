import React from 'react'
import {useRef} from 'react'

const Answers = ({answers, selectedAnswer, answerState, onSelect}) => {
 
  const shuffledAnswersRef = useRef();
    if(!shuffledAnswersRef.current){
    shuffledAnswersRef.current =[...answers];
    shuffledAnswersRef.current.sort(()=> Math.random() - 0.5);
   }
   
 
    return (
    <div>
          <ul id="answers">
                {shuffledAnswersRef.current.map((answer) => {
                 const isSelected = selectedAnswer === answer;
                 const normalizedAnswerState = answerState === 'incorrect' ? 'wrong' : answerState;
                 
                 let cssClass = '';
                  if(answerState === 'answered' && isSelected){
                    cssClass = 'selected';   
                  }
                  if((answerState === 'correct' || answerState === 'incorrect') && isSelected){
                    cssClass = normalizedAnswerState;
                  }
                  return (
                        <li key={answer} className="answer">
                            <button onClick={() => onSelect(answer)} className={cssClass} disabled={answerState !== ''}>
                                {answer}
                            </button>
                        </li>
                    )
                })}
            </ul>
    </div>
  )
}

export default Answers