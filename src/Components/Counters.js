import React from 'react';
import CountUp from 'react-countup';

function Counter({ end, text }) {
  return (
    <div className="counter">
      <CountUp end={end} duration={2.5} />
      <p>{text}</p>
    </div>
  );
}

function Counters() {
  return (
    <div className="counters">
      <Counter end={20000} text="APPS BUILT" />
      <Counter end={7000} text="HAPPY CUSTOMERS" />
      <Counter end={47} text="REPEAT AND REFERRAL BUSINESS %" />
      <Counter end={2800} text="DEVELOPERS" />
    </div>
  );
}

export default Counters;
