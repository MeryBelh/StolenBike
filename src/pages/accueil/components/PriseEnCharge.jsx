import React from 'react';

import Link from 'umi/link';
import { Card, Icon } from 'antd';
import styles from '../index.less';

class PriseEnCharge extends React.Component {
  render() {
    return (
      <div>
        <Card title="Prise en charge" bordered={false}>
          <div>
            la Prise en charge ??? Pour faciliter l'accès aux médicaments couteûx à nos assurés,
            Wafa Assurance a mis en place, à compter du 01 avril 2014 sur la ville de Casablanca,
            une nouvelle procédure pour la prise en charge de certains médicaments dans le cadre du
            tiers payant (liste disponible via l'extranet).
          </div>

          <Icon
            type="safety-certificate"
            style={{ fontSize: '60px', color: '#f6d992' }}
            theme="outlined"
          />
        </Card>
      </div>
    );
  }
}

export default PriseEnCharge;
