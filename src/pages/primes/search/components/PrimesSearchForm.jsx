import React, { Component } from 'react';
import SearchBox from '@/components/custom/common/SearchBox';
import { primeSearchMapper } from '../mapper';

class PrimesSearchForm extends Component {
  hintMessage = {
    message: 'Pour rechercher une prime veuilez saisir soit :',
    options: [
      'Excercice',
      'Exercice, Catégorie, Numéro Contrat',
      'Exercice, Trimestre',
      'Exercice, Statut',
      'Exercice, Catégorie, Numéro Contrat, Trimestre, Statut',
    ],
  };

  checkExcercice = (rule, value, callback) => {
    if (value > 1970 || value === '') {
      callback();
      return;
    }
    callback('Entrez un exercice aprés 1970!');
  };

  render() {
    const { onSearch } = this.props;
    return (
      <SearchBox
        layout="horizontal"
        onSearch={onSearch}
        hintMessage={this.hintMessage}
        searchMapper={primeSearchMapper}
      />
    );
  }
}

export default PrimesSearchForm;
