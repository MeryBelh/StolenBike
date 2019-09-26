import React from 'react';

import { Col, Row } from 'antd';
import Medicament from './components/Medicament';
import Contact from './components/Contact';
import PriseEnCharge from './components/PriseEnCharge';
import WafaSante from './components/WafaSante';
import haut from '@/assets/haut.png';
import wafaSanteImg from '@/assets/WafaSante.png';

class Welcome extends React.Component {
  render() {
    return (
      <Row gutter={24} style={{ textAlign: 'center', width: '98%' }}>
        <div style={{ textAlign: 'center', width: '94%', marginBottom: '2%' }}>
          <img alt="" src={haut} style={{ width: '100%' }} />
        </div>
        <Col lg={11} md={20} style={{ width: '45%', height: '40%', marginBottom: '1%' }}>
          <PriseEnCharge />
        </Col>
        <Col lg={11} md={20} style={{ width: '45%', height: '40%', marginBottom: '1%' }}>
          <Medicament />
        </Col>

        <Col lg={11} md={20} tyle={{ width: '45%', height: '40%', marginBottom: '1%' }}>
          <WafaSante />
        </Col>
        <Col lg={11} md={20} style={{ width: '45%', height: '40%', marginBottom: '1%' }}>
          <Contact />
        </Col>
        <div style={{ textAlign: 'center', width: '98%' }}>
          <img alt="" src={wafaSanteImg} style={{ width: '96%' }} />
        </div>
      </Row>
    );
  }
}

export default Welcome;
