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
        <HeaderSearch
          className={`${styles.action} ${styles.search}`}
          placeholder={formatMessage({
            id: 'component.globalHeader.search',
          })}
          dataSource={[
            formatMessage({
              id: 'component.globalHeader.search.example1',
            }),
            formatMessage({
              id: 'component.globalHeader.search.example2',
            }),
            formatMessage({
              id: 'component.globalHeader.search.example3',
            }),
          ]}
          onSearch={value => {
            console.log('input', value); // tslint:disable-line no-console
          }}
          onPressEnter={value => {
            console.log('enter', value); // tslint:disable-line no-console
          }}
        />
        {/* <Avatar /> */}
        <NoticeIcon />
        <SelectLang className={styles.action} />
        <Button onClick={this.logout}>logout</Button>
      </div>
    );
  }

  logout = () => {
    deleteTokenInformation();
    setTimeout(() => router.push('/user/login'), 1000);
  };
}

export default connect(({ settings }) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);
