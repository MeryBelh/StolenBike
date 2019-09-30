import React from 'react';

import { Col, Row } from 'antd';
import haut from '@/assets/stolen-bike.jpg';
import wafaSanteImg from '@/assets/WafaSante.png';

class Welcome extends React.Component {
  render() {
    return (
      <Row gutter={24} style={{ textAlign: 'center',width: '98%' }}>
        <div style={{ textAlign: 'center', width: '94%', marginBottom: '2%' }}>
          <img alt="" src={haut} style={{ width: '100%'}} />
        </div>
      </Row>
    );
  }
}

export default Welcome;
