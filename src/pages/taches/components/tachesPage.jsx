import React from 'react';
import DataTable from '@/components/custom/common/DataTable';
import { Link } from 'react-router-dom';
import { getAuthority } from '../../../utils/authority';
import { Button, Modal } from 'antd';

class TachesPage extends React.Component {
  model = 'tachesModel';

  componentDidMount() {
    const { dispatch } = this.props;
    this.fetchTaches();
  }

  fetchTaches = (frontPagination = {}) => {
    const { dispatch } = this.props;
    dispatch({
      type: `${this.model}/fetchTaches`,
      payload: { frontPagination },
    });
  };

  bikeSubimttedInfo = (bikeId, dispatch) => {
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
          payload: { bikeId },
        });
      },
    });
  };

  render() {
    const { taches } = this.props;
    const actionColumns = [
      {
        name: 'action',
        render: (id, obj) => {
          return <a onClick={this.bikeSubimttedInfo(obj.id)}>asign a task</a>;
        },
      },
    ];
    return (
      <DataTable dataSource={taches} onChange={this.fetchTaches} actionColumns={actionColumns} />
    );
  }
}

export default TachesPage;
