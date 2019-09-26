import React, { Component } from 'react';
import { Col, Row } from 'antd';
import DeclarationSearchForm from './DeclarationSearchForm';
import DataTable from '../../../../components/custom/common/DataTable';

class DeclarationSearchPage extends Component {
  model = 'declarationSearch';

  searchValues = {};

  handleSearch = values => {
    this.searchValues = values;
    this.fetchSearch();
  };

  fetchSearch = frontPagination => {
    const { dispatch } = this.props;
    dispatch({
      type: 'declarationSearch/search',
      payload: { values: this.searchValues, frontPagination },
    });
  };

  render() {
    const { declarations } = this.props;

    return (
      <React.Fragment>
        <Row>
          <Col>
            <DeclarationSearchForm onSearch={this.handleSearch} />
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable dataSource={declarations} onChange={this.fetchSearch} />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default DeclarationSearchPage;
