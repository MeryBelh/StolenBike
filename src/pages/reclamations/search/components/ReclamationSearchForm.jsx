import React, { Component } from 'react';
import SearchBox from '../../../../components/custom/common/SearchBox';
import { reclamationSearchMapper } from '../mapper';

class ReclamationSearchForm extends Component {
  hintMessage = {
    message: 'Pour rechercher une prime veuilez saisir soit :',
    options: [
      'Numéro Reclamation',
      'Catégorie, Numéro Contrat',
      'Numéro Déclaraion',
      'Date Saisie',
      'Catégorie, Numéro Contrat, Statut',
    ],
  };

  handleSearch = values => {
    const { onSearch } = this.props;
    if (values.dateSaisie) values.dateSaisie = values.dateSaisie.format('DD/MM/YYYY');
    onSearch(values);
  };

  render() {
    return (
      <SearchBox
        hintMessage={this.hintMessage}
        onSearch={this.handleSearch}
        searchMapper={reclamationSearchMapper}
      />
    );
  }
}

export default ReclamationSearchForm;
