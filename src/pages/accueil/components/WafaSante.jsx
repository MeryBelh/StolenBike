import React from 'react';

import Link from 'umi/link';
import { Button, Card, Icon, Tag, Divider, Menu, Dropdown } from 'antd';
import styles from '../index.less';

class WafaSante extends React.Component {
  render() {
    return (
      <div>
        <Card title="WAFA Santé" bordered={false}>
          <div>WAFA Santé ???</div>
          <Icon
            type="safety-certificate"
            style={{ fontSize: '60px', color: '#f6d992', alignContent: 'left' }}
            theme="outlined"
          />
        </Card>
      </div>
    );
  }
}

export default WafaSante;
