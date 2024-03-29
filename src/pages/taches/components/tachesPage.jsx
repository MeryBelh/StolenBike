import React from 'react';
import { Modal, Tabs } from 'antd';


import DataTable from '@/components/custom/common/DataTable';
import styles from '../index.less';

const { TabPane } = Tabs;

class TachesPage extends React.Component {
  model = 'tachesModel';

  componentDidMount() {
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
      title: 'case resolved  ',
      content: (
        <div>
          <p> Stolen case mark as resolved </p>
        </div>
      ),
      onOk() {
        dispatch({
          type: `tachesModel/solvecase`,
          payload: { bikeId: bike.bikeID || bike.id },
        });
      },
    });
  };

  asignTask = (bike, dispatch) => {
    Modal.info({
      title: 'Stolen case asigned  ',
      content: (
        <div>
          <p> Stolen case asigned </p>
        </div>
      ),
      onOk() {
        dispatch({
          type: `tachesModel/asignTask`,
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
        render: (id) => {
          return <a onClick={this.bikeSubimttedInfo.bind(this, id, dispatch)}>Mark as resolved</a>;
        },
      },
    ];

    const nonAffectedTaskActionColumns = [
      {
        name: 'action',
        render: (id) => {
          return <a onClick={this.asignTask.bind(this, id, dispatch)}>asign task</a>;
        },
      },
    ];
    return (
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="My tasks" key="1">
          <h2 className={styles.centerHeader}>My tasks : </h2>
          <DataTable dataSource={taches} actionColumns={taskActionColumns} />
        </TabPane>
        <TabPane tab="Unresolved tasks :" key="2">
          <h2 className={styles.centerHeader}>Unresolved tasks : </h2>
          <DataTable dataSource={tachesNonAffecte} actionColumns={nonAffectedTaskActionColumns} />
        </TabPane>
      </Tabs>
    );
  }
}

export default TachesPage;
