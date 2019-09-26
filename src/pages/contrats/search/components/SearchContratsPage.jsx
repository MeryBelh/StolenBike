import React from 'react';
import { Col, Row } from 'antd';
import SearchContratsForm from './SearchContratsForm';
import { Link } from 'react-router-dom';
import DataTable from '@/components/custom/common/DataTable';

class SearchContratsPage extends React.Component {
  searchValues = {};

  model = 'contratSearch';

  search = values => {
    this.searchValues = values;
    this.fetchSearch();
  };

  fetchSearch = (pagination = {}) => {
    const { dispatch } = this.props;
    dispatch({
      type: `${this.model}/searchContrat`,
      payload: { values: this.searchValues, frontPagination: pagination },
    });
  };

  render() {
    const { contrats } = this.props;

    const actionColumns = [
      {
        name: 'numeroContrat',
        render: (numeroContrat, obj) => {
          return (
            <Link to={`/production/contrats/${obj.categorie},${obj.numeroContrat}`}>
              détails
            </Link>
          );
        },
      },
    ];

    return (
      <>
        <Row>
          <Col>
            <SearchContratsForm onSearch={this.search} />
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable dataSource={contrats} actionColumns={actionColumns} onChange={this.fetchSearch} />
          </Col>
        </Row>
      </>
    );
  }
}

export default SearchContratsPage;
