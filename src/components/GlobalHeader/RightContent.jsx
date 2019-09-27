import React, { Component } from 'react';
import { Button } from 'antd';
import { formatMessage } from 'umi-plugin-react/locale';
import HeaderSearch from '../HeaderSearch';
import NoticeIcon from './NoticeIconView';
import SelectLang from '../SelectLang';
import styles from './index.less';
import { connect } from 'dva';
import { deleteTokenInformation } from '../../pages/user/login/utils/utils';
import router from 'umi/router';

class GlobalHeaderRight extends Component {
  render() {
    const { theme, layout } = this.props;
    let className = styles.right;

    if (theme === 'dark' && layout === 'topmenu') {
      className = `${styles.right}  ${styles.dark}`;
    }

    return (
      <div className={className}>
        {/* <Avatar /> */}
         {/*<NoticeIcon />*/}
        <SelectLang className={styles.action} />
        <Button onClick={this.policeLogin}>Police login</Button>
      </div>
    );
  }

  policeLogin = () => {
   // deleteTokenInformation();
    setTimeout(() => router.push('/police/login'), 1000);
  };
}

export default connect(({ settings }) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);
