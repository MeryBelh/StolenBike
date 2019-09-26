import React, { Component } from 'react';
import SearchBox from '../../../../components/custom/common/SearchBox';
import { declarationSearchMapper } from '../mapper';

class DeclarationSearchForm extends Component {
  hintMessage = {
    message: 'Pour rechercher une déclaration veuilez saisir soit :',
    options: [
      'Catégorie, Numéro Contrat, Date cachet  ',
      'Catégorie, Num Contrat , N° Assuré',
      'Catégorie, Num Contrat , Matricule',
      'Num declaration',
      'N° bordereau',
      'N° chéque',
    ],
  };

  handleSearch = values => {
    const { onSearch } = this.props;
    if (values.dateConsultation)
      values.dateConsultation = values.dateConsultation.format('DD/MM/YYYY');
    if (values.dateReception) values.dateReception = values.dateReception.format('DD/MM/YYYY');
    onSearch(values);
  };

  render() {
    return (
      <SearchBox
        layout="horizontal"
        hintMessage={this.hintMessage}
        onSearch={this.handleSearch}
        searchMapper={declarationSearchMapper}
      />
    );
  }
}

export default DeclarationSearchForm;
