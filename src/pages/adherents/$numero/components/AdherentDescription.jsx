import React from 'react';
import { Descriptions } from 'antd';

const AdherentDescription = props => {
  const { adherent } = props;
  return (
    <Descriptions bordered>
      <Descriptions.Item label="Date d'embauche">
        {adherent.dateEmbauche}
        <br />{' '}
      </Descriptions.Item>
      <Descriptions.Item label="Sexe">
        {adherent.sexe}
        <br />
      </Descriptions.Item>
      <Descriptions.Item label="Situation Familiale">
        {adherent.situationFamiliale}
      </Descriptions.Item>
      <Descriptions.Item label="Statut">{adherent.grade}</Descriptions.Item>
      <Descriptions.Item label="Régime">{adherent.regime}</Descriptions.Item>
      <Descriptions.Item label="Rib en instance">{adherent.ribInstance}</Descriptions.Item>
      <Descriptions.Item label="Rib Valide">{adherent.rib}</Descriptions.Item>
    </Descriptions>
  );
};

export default AdherentDescription;
