import React, { Component } from 'react';
import { Tabs } from 'antd';
import DataTable from '../../../../components/custom/common/DataTable';
import AddReclamationPage from '../../../reclamations/add/index';
import DeclarationDetailsDescription from './DeclarationDetailsDescription';

const { TabPane } = Tabs;

class DeclarationDetailsPage extends Component {
  model = 'declarationDetails';

  componentDidMount() {
    this.fetchData('fetchDeclaration');
    this.fetchData('fetchPrestations');
    this.fetchData('fetchCorrespondances');
  }

  fetchData = (action, frontPagination = {}) => {
    const {
      dispatch,
      match: {
        params: { numero },
      },
    } = this.props;
    dispatch({ type: `${this.model}/${action}`, payload: { numero, frontPagination } });
  };

  render() {
    const { declaration, prestations, correspondances } = this.props;
    console.log('declaration', declaration);
    const {
      match: {
        params: { numero },
      },
    } = this.props;

    return (
      <div>
        <h1> Déclaration Maladie : {numero}</h1>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Détails Déclaration" key="1">
            <DeclarationDetailsDescription declaration={declaration} />
          </TabPane>
          <TabPane tab="Prestations" key="2">
            <DataTable
              dataSource={prestations}
              onChange={pagination => this.fetchData('fetchPrestations', pagination)}
            />
          </TabPane>
          <TabPane tab="Correspondances" key="3">
            <DataTable
              dataSource={correspondances}
              onChange={pagination => this.fetchData('fetchCorrespondances', pagination)}
            />
          </TabPane>
          <TabPane tab="Réclamer">
            <AddReclamationPage numeroDeclaration={declaration.numeroDeclaration} />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default DeclarationDetailsPage;
