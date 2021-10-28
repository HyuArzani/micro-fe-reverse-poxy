import { Link } from 'react-router-dom';
import useTest2 from './hooks/useTest2';
import React from 'react';

function TestPage2() {
  const { data } = useTest2();

  console.log('dataa2 : ', data);

  return (
    <div style={{ padding: 20 }}>
      <div>ini page 2</div>
      <Link to="/">Kembali page 1</Link>
    </div>
  );
}

export default TestPage2;
