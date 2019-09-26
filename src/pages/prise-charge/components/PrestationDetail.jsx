import React from 'react';
import { Descriptions } from 'antd';
const { Item } = Descriptions;

const PrestationDetail = ({ pec, title }) => {
  const { pathologie, dateConsultation, medecin } = pec;
  return (
    <Descriptions title={title || 'Détail de la prestation'}>
      <Item label="Pathologie">{pathologie}</Item>
      <Item label="Date Consultation">{dateConsultation}</Item>
      <Item label="Médecin">{medecin}</Item>
    </Descriptions>
  );
};

export default PrestationDetail;
