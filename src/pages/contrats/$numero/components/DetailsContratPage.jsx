import { Tabs } from 'antd';
import React, { Component } from 'react';
import DataTable from '@/components/custom/common/DataTable';

const { TabPane } = Tabs;

class DetailsContratPage extends Component {
  model = 'contratDetails';

  componentDidMount() {
    this.fetchData('fetchAvenants');
    this.fetchData('fetchPrestations');
    this.fetchData('fetchClauses');
    this.fetchData('fetchPrimes');
  }

  fetchData = (action, pagination = {}) => {
    const {
      dispatch,
      match: {
        params: { numero },
      },
    } = this.props;
    dispatch({ type: `${this.model}/${action}`, payload: { numero, frontPagination: pagination } });
  };

  render() {
    const { avenants, prestations, clauses, primes } = this.props;
    const {
      match: {
        params: { numero },
      },
    } = this.props;
    return (
      <div>
        <h1> Contrat : {numero} </h1>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Avenants" key="1">
            <DataTable
              dataSource={avenants}
              onChange={pagination => this.fetchData('fetchAvenants', pagination)}
            />
          </TabPane>
          <TabPane tab="Prestations" key="2">
            <DataTable
              dataSource={prestations}
              onChange={pagination => this.fetchData('fetchPrestations', pagination)}
            />
          </TabPane>
          <TabPane tab="Clauses Particulières" key="3">
            <DataTable
              dataSource={clauses}
              onChange={pagination => this.fetchData('fetchClauses', pagination)}
            />
          </TabPane>
          <TabPane tab="Primes" key="4">
            <DataTable
              dataSource={primes}
              onChange={pagination => this.fetchData('fetchPrimes', pagination)}
            />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default DetailsContratPage;
