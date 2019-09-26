import React from 'react';
import { Descriptions } from 'antd';

const DeclarationDetailsDescription = props => {
  const { declaration } = props;

  return (
    <Descriptions bordered>
      <Descriptions.Item label="Contractante">
        {declaration.nomClient}
        <br />
      </Descriptions.Item>
      <Descriptions.Item label="Assuré">{`${declaration.nomAdherent} ${declaration.numeroAdherent}`}</Descriptions.Item>
      <Descriptions.Item label="Malade">{declaration.malade}</Descriptions.Item>
      <Descriptions.Item label="Date Sinistre">{declaration.dateConsultation}</Descriptions.Item>
      <Descriptions.Item label="Date Cachet">{declaration.dateReception}</Descriptions.Item>
      <Descriptions.Item label="N° Réglement">{declaration.numeroReglement}</Descriptions.Item>
      <Descriptions.Item label="Date Réglement">{declaration.dateTraitement}</Descriptions.Item>
      <Descriptions.Item label="Bordereau">{declaration.numeroBordereau}</Descriptions.Item>
      <Descriptions.Item label="Mode Paiement">{declaration.modePaiement}</Descriptions.Item>
      <Descriptions.Item label="RIB">{declaration.rib}</Descriptions.Item>
      <Descriptions.Item label="Utilisateur">{declaration.codeUtilisateur}</Descriptions.Item>
      <Descriptions.Item label="Observation">{declaration.observation}</Descriptions.Item>
    </Descriptions>
  );
};

export default DeclarationDetailsDescription;
