import React from 'react';
import DataTable from '../../../components/custom/common/DataTable';



const EstimationDetail = ({ prestations, title }) => {
  const total = prestations.data.reduce(
    (accumulator, prestation) => accumulator + prestation.baseRembourssement,
    0,
  );
  return (
    <>
      <h3>{title || "prestations"}</h3>
      <DataTable dataSource={prestations} />
      <p className="textRight">
        Total Estimation: <b>{total} somme totale (Dhs)</b>
      </p>
    </>
  );
};

export default EstimationDetail;
