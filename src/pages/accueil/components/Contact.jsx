import React from 'react';
import { Card, Icon } from 'antd';

<col>Fermeture le week-end </col>;

class Contact extends React.Component {
  render() {
    return (
      <Card title="Centre de Relation Client" bordered={false}>
        <div>Ramadan : de 9h00 à 15h00</div>
        <div>Hors Ramadan : Lundi au Vendredi 8h-12h / 14h30-18h30</div>
        <div>Fermeture le week-end </div>
        <Icon type="contacts" style={{ fontSize: '60px', color: '#f6d992' }} theme="outlined" />
      </Card>
    );
  }
}

export default Contact;
