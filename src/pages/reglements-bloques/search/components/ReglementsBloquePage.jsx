import React, { Component } from 'react';
import { Form } from 'antd';
import Page from '../../../../components/Page';
import DataTable from '../../../../components/custom/common/DataTable';
import SearchBox from '../../../../components/custom/common/SearchBox';
import { reglementBloqueSearchMapper } from '../mapper';

@Form.create()
export default class ReglementsBloquePage extends Component {
  model = 'reglementsBloqueSearch';
  searchValues = {};

  hintMessage = {
    message: 'Pour rechercher une déclaration veuilez saisir soit :',
    options: ['Catégorie, Numéro Contrat'],
  };

  handleSearch = values => {
    this.searchValues = values;
    this.fetchSearch();
  };
  fetchSearch = (frontPagination = {}) => {
    const { dispatch } = this.props;

    dispatch({
      type: `${this.model}/search`,
      payload: { values: this.searchValues, frontPagination },
    });
  };

  render() {
    const { reglementsBloque } = this.props;

    return (
      <Page inner>
        <SearchBox
          layout="horizontal"
          hintMessage={this.hintMessage}
          onSearch={this.handleSearch}
          searchMapper={reglementBloqueSearchMapper}
        />

        <DataTable dataSource={reglementsBloque} onChange={this.fetchSearch} />
      </Page>
    );
  }
}
