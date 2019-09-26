import React, { Component } from 'react';
import { Col, Row } from 'antd';
import DataTable from '@/components/custom/common/DataTable';
import { Link } from 'react-router-dom';
import SearchBox from '../../../../../components/custom/common/SearchBox';
import { applyPolicy } from '../../../../../utils/utils';



class AdherentSearchPage extends Component {
  hintMessage = {
    message: 'Pour rechercher un assuré veuilez saisir soit :',
    options: [
      'Catégorie, Num Contrat, Matricule',
      'Catégorie, Num Contrat , N° Assuré',
      'Catégorie, Num Contrat, Nom Assuré ',
    ],
  };

  searchMapper = applyPolicy([
    { label: 'Catégorie', name: 'categorie', rules: [{ required: true }] },
    { label: 'N° Contrat', name: 'numeroContrat', rules: [{ required: true }] },
    { label: 'N° Assuré', name: 'numeroAdherent' },
    { label: 'Matricule', name: 'matricule' },
    { label: 'Nom Assuré', name: 'nomAdherent', deniedFor: ['ROLE_SANTE_PRESTATAIRE'] },
  ]);

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
        title : 'Action',
        name: 'numeroAdherent',
        render: (numeroAdherent, obj) => {
          return (
            <Link
              to={`/prise-charge/adherent/${obj.numeroAdherent}/${obj.categorie}/${obj.numeroContrat}`}
            >
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
            <SearchBox
              layout="horizontal"
              onSearch={this.handleSearch}
              hintMessage={this.hintMessage}
              searchMapper={this.searchMapper}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable
              dataSource={adherents}
              actionColumns={actionColumns}
              onChange={this.fetchSearch}
            />
          </Col>
        </Row>
      </>
    );
  }
}

export default AdherentSearchPage;
