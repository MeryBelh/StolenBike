import React from 'react';
import DataTable from '@/components/custom/common/DataTable';
import styles from '../index.less';

import { Link } from 'react-router-dom';
import { getAuthority } from '../../../utils/authority';
import { Button, Modal, Tabs } from 'antd';
const { TabPane } = Tabs;

class TachesPage extends React.Component {
  model = 'tachesModel';

  componentDidMount() {
    const { dispatch } = this.props;
    this.fetchTachesInProgress();
    this.fetchTachesNonAffected();
  }

  fetchTachesInProgress = (frontPagination = {}) => {
    const { dispatch } = this.props;
    dispatch({
      type: `${this.model}/fetchTaches`,
      payload: { frontPagination },
    });
  };

  fetchTachesNonAffected = (frontPagination = {}) => {
    const { dispatch } = this.props;
    dispatch({
      type: `${this.model}/fetchTachesNonAffected`,
      payload: { frontPagination },
    });
  };

  bikeSubimttedInfo = (bike, dispatch) => {
    Modal.info({
      title: 'Stolen case asigned  ',
      content: (
        <div>
          <p> Stolen case asigned </p>
        </div>
      ),
      onOk() {
        dispatch({
          type: `tachesModel/solvecase`,
          payload: { bikeId: bike.id },
        });
      },
    });
  };

  render() {
    const { taches, tachesNonAffecte, dispatch } = this.props;
    const taskActionColumns = [
      {
        name: 'action',
        render: (id, obj) => {
          return <a onClick={this.bikeSubimttedInfo.bind(this, id, dispatch)}>Mark as resolved</a>;
        },
      },
    ];
    return (
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="My tasks" key="1">
          <h2 className={styles.centerHeader}>My tasks : </h2>
          <DataTable dataSource={taches} actionColumns={taskActionColumns} />
        </TabPane>
        <TabPane tab="unresolved tasks :" key="2">
          <h2 className={styles.centerHeader}>Unresolved tasks : </h2>
          {<DataTable dataSource={tachesNonAffecte} />}
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    );
  }
}

export default TachesPage;
