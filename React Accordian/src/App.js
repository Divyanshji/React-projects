import React, { useState } from 'react';
import questions from './data';
import data from './data';
import Question from './Question';
import SingleQuestion from './Question';
function App() {
  const [questions , setQuestions] = useState(data)
  return(
    <main>
    <div className="container">
     
        <h2>question and answers about login</h2>
      <section className="info">
      {questions.map((question)=> {
        return <SingleQuestion key= {question.id} {...question} />
      }
      )}
      </section>
      </div>
      </main>
  );
}

export default App;
