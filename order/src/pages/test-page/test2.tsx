import { Link } from 'react-router-dom';
import useTest2 from './hooks/useTest2';
import React from 'react';

function TestPage2() {
  const { data } = useTest2();

  console.log('dataa2 : ', data);
  const redirectOrder = () => {
    window.location.assign('http://localhost/order');
  };

  return (
    <div style={{ padding: 20, backgroundColor: 'red' }}>
      <div>ini order</div>
      <div style={{ marginTop: 20 }}>
        <button type="button" onClick={redirectOrder}>Ke Order</button>
      </div>
    </div>
  );
}

export default TestPage2;
