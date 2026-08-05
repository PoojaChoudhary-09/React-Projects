import React, { useState } from 'react'
import QuestionTimer from './QuestionTimer.jsx'
import Answers from './Answers.jsx'
import QUESTIONS from '../questions.js'
const Question = ({questionIndex, onSelectAnswer, onSkipAnswer}) => {
   
    const [answer, setAnswer] = useState({
        selectedAnswer:'',
        isCorrect: null
    });

   let Timer =10000;
   if(answer.selectedAnswer){
    Timer = 1000;
   }
   if(answer.isCorrect !== null){
    Timer = 2000;
   }

    function handleSelectAnswer(answer){
  setAnswer({
    selectedAnswer: answer,
    isCorrect: null
  })
  setTimeout(()=>{
    setAnswer({
      selectedAnswer:answer,
      isCorrect: QUESTIONS[questionIndex].answers[0] === answer 
    })
    setTimeout(()=>{
        onSelectAnswer(answer);
    }, 2000);
  }, 1000);
    }
 
    let answerState ='';
    if(answer.selectedAnswer && answer.isCorrect !== null){
        answerState = answer.isCorrect === null ? 'answered' : answer.isCorrect ? 'correct' : 'incorrect';
    }
    else if(answer.selectedAnswer){
        answerState = 'answered';
    }
    return (
      <div id="question">
            <QuestionTimer key={Timer} 
            timeout={Timer} 
            onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null} mode={answerState}/>
  <h2>{QUESTIONS[questionIndex].text}</h2>
        
        <Answers 
         answers={QUESTIONS[questionIndex].answers} 
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
        />
        </div>
  )
}

export default Question