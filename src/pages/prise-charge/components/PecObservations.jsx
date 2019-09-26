import { Descriptions } from 'antd';
import React from 'react';

const PecObservations = ({ observations }) => {
  return (
    <>
      <Descriptions bordered title="Observations : " />
      <p>{observations}</p>
    </>
  );
};

export default PecObservations;
