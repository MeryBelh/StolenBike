import React from 'react';
import { Descriptions } from 'antd';

const AdherentDetailsDescription = props => {
  const { adherent } = props;
  // todo: fill raison social
  console.log(adherent);
  return (
    <Descriptions bordered>
      <Descriptions.Item label="Catégorie">{adherent.categorie}</Descriptions.Item>
      <Descriptions.Item label="N° Contrat">{adherent.numeroContrat}</Descriptions.Item>

      <Descriptions.Item label="Raison sociale">{adherent.nomClient}</Descriptions.Item>
      <Descriptions.Item label="Nom/Prénom">{adherent.nomAdherent}</Descriptions.Item>
      <Descriptions.Item label="N° affiliation">{adherent.numeroAdherent}</Descriptions.Item>
      <Descriptions.Item label="N° matricule">{adherent.numeroMatricule}</Descriptions.Item>
      <Descriptions.Item label="N° CIN">{adherent.cin}</Descriptions.Item>
    </Descriptions>
  );
};

export default AdherentDetailsDescription;
