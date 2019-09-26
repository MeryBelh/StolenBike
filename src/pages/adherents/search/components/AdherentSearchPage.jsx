import React, { Component } from 'react';
import { Col, Row } from 'antd';
import DataTable from '@/components/custom/common/DataTable';
import AdherentSearchForm from '../../../../components/custom/AdherentSearchForm';
import { Link } from 'react-router-dom';

class AdherentSearchPage extends Component {
  model = 'adherentSearch';

  searchValues = {};

  handleSearch = values => {
    this.searchValues = values;
     this.fetchSearch();
  };

  fetchSearch = (pagination = {}) => {
    const { dispatch } = this.props;
    dispatch({
      type: `${this.model}/search`,
      payload: { values: this.searchValues, frontPagination: pagination },
    });
  };

  render() {
    const { adherents } = this.props;

    const actionColumns = [
      {
        name: 'numeroAdherent',
        render: (numeroAdherent, obj) => {
          return (
            <Link to={`/production/adherents/${obj.numeroAdherent}`}>
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
            <AdherentSearchForm onSearch={this.handleSearch} />
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable dataSource={adherents} actionColumns={actionColumns} onChange={this.fetchSearch} />
          </Col>
        </Row>
      </>
    );
  }
}

export default AdherentSearchPage;
