// QAndA.js

import React, { useEffect, useState } from 'react';
import '../Css/QAndA.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const QAndA = () => {
  const [questions, setQuestions] = useState([
    { id: 1, category: 'Platform', question: 'How does it generate responses?', answer: 'Access valuable insights into customer behavior, identify areas for improvement, manage support requests and make data-driven decisions to optimize your services.' },
    { id: 2, category: 'Platform', question: 'Is AI copywriting more cost-effective than hiring human writers?', answer: 'Access valuable insights into customer behavior, identify areas for improvement, manage support requests and make data-driven decisions to optimize your services.' },
    { id: 3, category: 'Platform', question: 'hiring human writers?', answer: 'Access valuable insights into customer behavior, identify areas for improvement, manage support requests and make data-driven decisions to optimize your services.' },
    { id: 4, category: 'Payment', question: 'Is AI copywriting more cost-effective than hiring human writers?', answer: 'Access valuable insights into customer behavior, identify areas for improvement, manage support requests and make data-driven decisions to optimize your services.' },
    { id: 5, category: 'Payment', question: 'copywriting more cost-effective than human writers?', answer: 'Access valuable insights into customer behavior, identify areas for improvement, manage support requests and make data-driven decisions to optimize your services.' },
    { id: 6, category: 'Support', question: 'Is AI copywriting more cost-effective ?', answer: 'Access valuable insights into customer behavior, identify areas for improvement, manage support requests and make data-driven decisions to optimize your services.' },
    { id: 7, category: 'Support', question: 'loren ipsum ipsum loren than robots in market ?', answer: 'Access valuable insights into customer behavior, identify areas for improvement, manage support requests and make data-driven decisions to optimize your services.' },
    // ... (Add more questions with different categories)
  ]);

  const [selectedCategory, setSelectedCategory] = useState('Platform');

  useEffect(() => {
    const handleQALoader = () => {
      gsap.from('.q-and-a-container', { opacity: 0, x: -50, duration: 0.5, delay: 0.5, scrollTrigger: { trigger: '.q-and-a-container', start: 'top 80%' } });
    };

    // window.addEventListener('load', handleQALoader);

    // return () => {
    //   window.removeEventListener('load', handleQALoader);
    // };
  }, []);

  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const toggleAnswer = (id) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  const filterQuestionsByCategory = (category) => {
    return questions.filter((q) => q.category === category);
  };

  return (
    <div className="q-and-a-container">
      <div className="header-container">
        <h1>Q&A</h1>
        <div className="button-container">
          <button className="platformbtn" onClick={() => setSelectedCategory('Platform')}>
            Platform
          </button>
          <button className="paymentbtn" onClick={() => setSelectedCategory('Payment')}>
            Payment
          </button>
          <button className="supportbtn" onClick={() => setSelectedCategory('Support')}>
            Support
          </button>
        </div>
      </div>
      {filterQuestionsByCategory(selectedCategory).map((q) => (
        <div className="question" key={q.id}>
          <div className="question-header" onClick={() => toggleAnswer(q.id)}>
            <h3>{q.question}</h3>
            <span style={{ fontSize: '2em', fontWeight: 'bold' }}>{expandedQuestion === q.id ? '-' : '+'}</span>
          </div>
          {expandedQuestion === q.id && <p className="answer">{q.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default QAndA;
