import React from 'react';
import { Col, Row } from 'antd';
import BordereauSearchForm from './BordereauSearchForm';
import DataTable from '../../../../components/custom/common/DataTable';

class BordereauSearchPage extends React.Component {
  model = 'bordereauxSearch';

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
    const { bordereaux } = this.props;

    return (
      <>
        <Row>
          <Col>
            <BordereauSearchForm onSearch={this.handleSearch} />
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable dataSource={bordereaux} onChange={this.fetchSearch} />
          </Col>
        </Row>
      </>
    );
  }
}

export default BordereauSearchPage;
