import React, { Component } from 'react';
import { Col, Row } from 'antd';
import ReclamationSearchForm from './ReclamationSearchForm';
import DataTable from '../../../../components/custom/common/DataTable';

class ReclamationsSearchPage extends Component {
  model = 'reclamationsSearch';

  searchValues = {};

  handleSearch = values => {
    this.searchValues = values;
    this.fetchSearch();
  };

  fetchSearch = frontPagination => {
    const { dispatch } = this.props;
    dispatch({
      type: `${this.model}/search`,
      payload: { values: this.searchValues, frontPagination },
    });
  };

  render() {
    const { reclamations } = this.props;

    return (
      <>
        <Row>
          <Col>
            <ReclamationSearchForm onSearch={this.handleSearch} />
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable dataSource={reclamations} onChange={this.fetchSearch} />
          </Col>
        </Row>
      </>
    );
  }
}

export default ReclamationsSearchPage;
