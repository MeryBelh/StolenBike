import React from 'react';
import { Col, Row } from 'antd';
import DataTable from '@/components/custom/common/DataTable';
import PrimesSearchForm from './PrimesSearchForm';

class PrimesSearchPage extends React.Component {
  model = 'primesSearch';

  searchValues = {};

  handleSearch = values => {
    this.searchValues = values;
    this.fetchSearch();
  };

  fetchSearch =(frontPagination = {}) =>{
    console.log('props', this.props)
    const { dispatch } = this.props;
    dispatch({
      type: 'primesSearch/search',
      payload: { values: this.searchValues, frontPagination },
    });
  }

  render() {
    const { primes } = this.props;
    return (
      <>
        <Row>
          <Col>
            <PrimesSearchForm onSearch={this.handleSearch} />
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable dataSource={primes} onChange={this.fetchSearch} />
          </Col>
        </Row>
      </>
    );
  }
}

export default PrimesSearchPage;
